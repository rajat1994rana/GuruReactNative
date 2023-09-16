import { Alert, PermissionsAndroid, Platform } from "react-native"
import { check, openSettings, PERMISSIONS, request, requestMultiple, RESULTS } from "react-native-permissions"
// import RequestPermissionModal from "../Components/RequestPermissionModal"
import strings from "../Constants/lang"
import Geolocation from 'react-native-geolocation-service';

export const locationPermission = () =>
  new Promise(async (resolve, reject) => {
    if (Platform.OS === "ios") {
      try {
        const permissionStatus = await Geolocation.requestAuthorization(
          "whenInUse"
        );
        if (permissionStatus === "granted") {
          return resolve("granted");
        }
        reject("Permission not granted");
      } catch (error) {
        return reject(error);
      }
    }
    return request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then((granted) => {
        console.log(granted,"grantedgrantedgranted");
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return resolve("granted");
        }
        return reject("Location Permission denied");
      })
      .catch((error) => {
        console.log("Ask Location permission error: ", error);
        return reject(error);
      });
  });