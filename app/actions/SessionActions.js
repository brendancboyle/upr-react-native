export const SET_TOKEN = 'SET_TOKEN';
export const RESET_SESSION = 'RESET_SESSION';

const DISCONNECTED = 'DISCONNECTED';
const WAITING = 'WAITING';
const READY = 'READY';
export const SessionStates = { DISCONNECTED, WAITING, READY };

export function SetToken(token) {
  return { type: SET_TOKEN, token };
}

export function ResetSession() {
  return { type: RESET_SESSION };
}
