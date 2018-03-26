import { SET_TOKEN } from '../actions/TokenActions';

const initialState = 0;

const actionsMap = {
  [SET_TOKEN](state, action) {
    return action.token;
  }
};

export default function Token(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
