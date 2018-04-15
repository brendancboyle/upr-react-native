import axios from 'axios';
import { API_ENDPOINT } from './index';
import { store } from '../App';
import * as SessionActions from '../app/actions/SessionActions';

async function RequestToken() {
  store.dispatch(SessionActions.SetSessionState(SessionActions.SessionStates.DISCONNECTED));
  const tokenResponse = await axios.get(`${API_ENDPOINT}/NewSession`).catch(err => console.error(err));
  const token = tokenResponse.data;
  store.dispatch(SessionActions.SetSessionToken(token));
}

export default { RequestToken };