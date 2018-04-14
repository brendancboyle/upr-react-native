import firebase from 'react-native-firebase';
import * as DeviceActions from '../app/actions/DeviceActions';
import { store } from '../App';

let onTokenRefreshListener;

async function AppDidStart() {
  if (!store) throw 'No store found';
  console.log('UPRKit - App Started');

  await SetUpAuth();
  await SetUpMessaging();
}

async function SetUpAuth() {
  const credential = await firebase.auth().signInAnonymouslyAndRetrieveData();
  if (credential) {
    console.log('default app user ->', credential.user.toJSON());
    store.dispatch(DeviceActions.SetCredential(credential));
  } else {
    console.error('no credential');
  }
}

async function SetUpMessaging() {
  onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
    console.log('token generated ->', fcmToken);
    store.dispatch(DeviceActions.SetFCMToken(fcmToken));
  });

  const fcmToken = await firebase.messaging().getToken();
  if (fcmToken) {
    // user has a device token
    console.log('has token ->', fcmToken);
    store.dispatch(DeviceActions.SetFCMToken(fcmToken));
  } else {
    // user doesn't have a device token yet
    console.error('no messaging token');
  }

  const messagingEnabled = await firebase.messaging().hasPermission();
  if (messagingEnabled) {
    // user has permissions
    console.log('User has FCM permissions');
  } else {
    // user doesn't have permission
    console.log('User does not have FCM permissions');
    RequestMessagePermissions();
  }
}

async function RequestMessagePermissions() {
  console.log('Requesting FCM permission');
  await firebase.messaging().requestPermission().catch(err => console.err(err));
}

export default { AppDidStart };
