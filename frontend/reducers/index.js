import * as types from '../actions/types';

function rootReducer(state = require('../static/defaultState'), action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default rootReducer;
