import ILLNESSES from '../../data/dummy-data';

const initialState = {
    availableIllnesses: ILLNESSES,
    // selectedIllnesses: ILLNESSES.filter(prod => prod.id) 
};

export default (state = initialState, action) => {
    return state;
};