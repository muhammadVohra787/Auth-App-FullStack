import createStore from "react-auth-kit/createStore";
import { refresh } from "../api/user-authentication";
export const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});
