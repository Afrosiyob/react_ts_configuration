import axios from "axios";
import { configs } from "core/configs";

import { log } from "../log/log.service";

import { StatusCode } from "./../../enums/enums";

// const baseUrl = process.env.REACT_APP_API_LOCALE_AUTH_URL;

const http = axios.create({
  baseURL: configs.api.base_url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// http.defaults.timeout = 300;

http.defaults.withCredentials = false;

// Intercept Request

/* eslint-disable */

http.interceptors.request.use(
  function fn(config: any) {
    // Do something before request is sent
    const authToken = window.localStorage.getItem("access_token");

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  function fn(error: any) {
    // log(error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Intercept Response

http.interceptors.response.use(
  function fn(response) {
    log(response.data);
    log(response.status);
    log(response.statusText);
    log(response.headers);
    log(response.config);

    if (response) {
      return response.data;
    }
  },
  function fn(error) {
    if (error.response) {
      switch (error.response.status) {
        case StatusCode.BadRequest:
          // Handle BadRequest

          break;
        case StatusCode.Unauthorized:
          // Handle Unauthorized

          // 1. Redirect to login page or
          // 2. Request refresh token
          localStorage.clear();
          window.location.reload();
          break;
        case StatusCode.Forbidden:
          // Handle Forbidden

          break;
        case StatusCode.TooManyRequests:
          // Handle TooManyRequests

          break;
        case StatusCode.InternalServerError:
          // Handle InternalServerError

          break;
        default:
          break;
      }
    } else if (error.request) {
      log(error.request);
    } else {
      log(error.message);
    }
    if (configs.app.appIsDev) log(error.config);
    return Promise.reject(error);
  }
);

/* eslint-enable */

export { http };
