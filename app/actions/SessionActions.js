export const SET_TOKEN = 'SET_TOKEN';
export const RESET_SESSION = 'RESET_SESSION';

export function SetToken(token) {
  return { type: SET_TOKEN, token };
}

export function ResetSession() {
  return { type: RESET_SESSION };
}
