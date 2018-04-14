import {
  SET_SESSION_TOKEN,
  SET_SESSION_STATE,
  RESET_SESSION,
  SessionStates
} from '../actions/SessionActions';

const initialState = { state: SessionStates.DISCONNECTED };

const actionsMap = {
  [SET_SESSION_TOKEN](state, action) {
    return { ...state, token: action.token };
  },
  [SET_SESSION_STATE](state, action) {
    if (!SessionStates[action.state]) return state
    return { ...state, state: action.state };
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
