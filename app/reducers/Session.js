import { SET_TOKEN, RESET_SESSION } from '../actions/SessionActions';

const initialState = {};

const actionsMap = {
  [SET_TOKEN](state, action) {
    return { ...state, token: action.token};
  },
  [RESET_SESSION](state, action) {
    return initialState;
  }
};

export default function Token(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
