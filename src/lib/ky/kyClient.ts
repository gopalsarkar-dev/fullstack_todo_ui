import ky from "ky";

const kyClient = ky.create({
  prefixUrl: "http://localhost:8055",
  credentials: "include",
  mode: "cors",
});

export default kyClient;
