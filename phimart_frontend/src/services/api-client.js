import axios from "axios";

export default axios.create({
  baseURL: "https://phimart-jet.vercel.app/api/v1",
});