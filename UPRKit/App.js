import firebase from 'react-native-firebase';
import * as DeviceActions from '../app/actions/DeviceActions';
import { store } from '../App';

AppDidStart = () => {
  if (!store) throw "No store found";
  console.log('UPRKit - App Started');
  firebase
    .auth()
    .signInAnonymouslyAndRetrieveData()
    .then(credential => {
      if (credential) {
        console.log('default app user ->', credential.user.toJSON());
        store.dispatch(DeviceActions.SetCredential(credential));
      } else {
        console.error('no credential');
      }
    });
  this.onTokenRefreshListener = firebase
    .messaging()
    .onTokenRefresh(fcmToken => {
      console.log('token generated ->', fcmToken);
      store.dispatch(DeviceActions.SetFCMToken(fcmToken));
    });
  firebase
    .messaging()
    .getToken()
    .then(fcmToken => {
      if (fcmToken) {
        // user has a device token
        console.log('has token ->', fcmToken);
        store.dispatch(DeviceActions.SetFCMToken(fcmToken));
      } else {
        // user doesn't have a device token yet
        console.error('no messaging token');
      }
    });
};

export default { AppDidStart };
