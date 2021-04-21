//import {AsyncStorageStatic} from 'react-native';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqaTQFvF5b6sXaFjh8wdWTo0_1JFHvkgo',
            {
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        );

        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Somthing went wrong!';
            if (errorId === 'EMAIL_EXISTS') {
                message = 'This email exist already!';
            }
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        dispatch({type: SIGNUP, token: resData.idToken, userId:resData.localId});
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqaTQFvF5b6sXaFjh8wdWTo0_1JFHvkgo',
            {
                method:'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    //returnSecureToken: true
                })
            }
        );

        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Somthing went wrong!';
            if (errorId === 'EMAIL_NOT_FOUND') {
                message = 'This email could not be found!';
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'This Password is not valid!';
            }
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        dispatch({type: LOGIN, token: resData.idToken, userId:resData.localId});
        //saveDataToStorage(resData.idToken, resData.localId);
    };
};

// const saveDataToStorage = (token, userId) =>{
//     AsyncStorageStatic.setItem('userData', JSON.stringify({
//         token: token,
//         userId: userId
//     }));
// };