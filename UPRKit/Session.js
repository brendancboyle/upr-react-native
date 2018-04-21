import axios from 'axios';
import _ from 'lodash';
import { API_ENDPOINT } from './index';
import { store } from '../App';
import * as SessionActions from '../app/actions/SessionActions';

let sessionChangeListener;
let previousSessionState;
let tempSessionInterval;

async function RequestToken() {
  store.dispatch(
    SessionActions.SetSessionState(SessionActions.SessionStates.DISCONNECTED)
  );
  const tokenResponse = await axios
    .get(`${API_ENDPOINT}/NewSession`)
    .catch(err => console.error(err));
  const token = tokenResponse.data;
  const holdfor = Math.floor(Math.random() * 900000) + 100000;
  store.dispatch(SessionActions.SetSessionToken(token, holdfor));
}

function SubscribeToSessionChanges() {
  previousSessionState = store.getState().Session;
  sessionChangeListener = store.subscribe(async () => {
    const Session = store.getState().Session;
    if (_.isEqual(previousSessionState, Session)) return;

    if (Session.state === SessionActions.SessionStates.WAITING) {
      await QueryTempSession();
      tempSessionInterval = setInterval(async () => {
        await QueryTempSession();
      }, 1500);
    } else {
      clearInterval(tempSessionInterval);
    }

    previousSessionState = Session;
  });
}

function UnsubscribeFromSessionChanges() {
  if (sessionChangeListener) sessionChangeListener();
}

async function QueryTempSession() {
  const Session = store.getState().Session;
  const Device = store.getState().Device;
  const tempSessionResponse = await axios
    .get(`${API_ENDPOINT}/TempSession`, {
      params: {
        token: Session.token,
        holdfor: Session.holdfor,
        fcmtoken: Device.FCMToken
      }
    })
    .catch(err => console.error(err));
  const tempSession = tempSessionResponse.data;
  switch (tempSession) {
    case 0:
      await RequestToken();
      break;
    case 1:
      break;
    case 2:
      store.dispatch(
        SessionActions.SetSessionState(SessionActions.SessionStates.READY)
      );
      break;
  }
}

async function SlideUp() {}

async function SlideDown() {}

async function PlayMedia() {}

export default {
  RequestToken,
  SubscribeToSessionChanges,
  UnsubscribeFromSessionChanges,
  SlideUp,
  SlideDown,
  PlayMedia
};
