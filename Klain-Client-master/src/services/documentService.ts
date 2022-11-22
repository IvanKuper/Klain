import { Document } from "../interfaces/Document";
import axios from "axios";
const api: string = process.env.REACT_APP_API || "";

export const addDocument = (document: Document): Promise<any> => {
  return axios.post(`${api}documents`, document, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};
export const getDocument = (): Promise<any> => {
  return axios.get(`${api}documents`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};
