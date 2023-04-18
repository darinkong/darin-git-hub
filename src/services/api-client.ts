import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a7bb005570514db4a316ea1a621babfb",
  },
});
