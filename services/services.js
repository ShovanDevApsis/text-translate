import axios from "axios";
import { API } from "../backend/backend";

export const translateText = async (body) => {
  try {
    const res = await axios.post(`${API}/translate`, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};
