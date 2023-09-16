import * as auth from "./auth";
import { saveLocationInfo } from "./locations";


export default {
  ...auth,
  ...saveLocationInfo,
};
