import { get, post } from "./http";
export const getData = (params) => get("", params);
export const postData = (data) => post("", data);
// export const getData = () => get("后端接口名");
// export const postData = () => post("后端接口名");