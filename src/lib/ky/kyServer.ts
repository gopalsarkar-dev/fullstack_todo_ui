import ky from "ky";

const kyServer = ky.create({
  prefixUrl: "http://127.0.0.1:8055",
  credentials: "include",
  mode: "cors",
});

export default kyServer;
