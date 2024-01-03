import Geocoder from "react-native-geocoder";
import Geolocation from "react-native-geolocation-service";

// export const getCurrentLocation = (type) =>
//   new Promise((resolve, reject) => {
//     locationPermission()
//       .then(() => {
//         Geolocation.getCurrentPosition(
//           (position) => {
//             getLocation(position.coords.latitude, position.coords.longitude)
//               .then((res) => {
//                 //
//                 (res.latitud = position.coords.latitude),
//                   (res.longitude = position.coords.longitude);
//                 let data = { ...res, ...position };
//                 resolve(data);
//               })
//               .catch((error) => {});
//           },
//           (error) => {
//             reject(error.message, "");
//           },
//           { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
export const getLocation = async (lat, lng) => {
  try {
    let res = await Geocoder.geocodePosition({ lat, lng });
    let pinCode, state, city;
    for (var i = 0; i < res.length; ++i) {
      if (res[i].postalCode) {
        pinCode = res[i].postalCode;
        state = res[i].adminArea || "";
        city = res[i].locality || "";
        i = 2000;
        //  return
      }
      if (!!res[i]) {
        state = res[i]?.adminArea || "";
        city = res[i]?.locality || "";
      }
    }

    let addr = {
      address: res[0].formattedAddress,
      pinCode: pinCode,
      state,
      city
    };

    return addr;
  } catch (err) {}
};
