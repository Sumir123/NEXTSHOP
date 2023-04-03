import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

const createUserSlice = (set) => ({
  userInfo: "",
  username: "kminchelle",
  password: "0lelplR",
  error: "",
  checkInfo: async (username, password) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        username: username,
        password: password,
      });
      console.log(res.data);
      set({ userInfo: res.data });
      set({ error: "" });
    } catch (error) {
      set({ error: error.response.data.message });
      set({ userInfo: "" });
    }
  },
  setUsername: (username) => set({ username: username }),
  setUserInfo: (userInfo) => set({ userInfo: userInfo }),
  setPassword: (password) => set({ password: password }),
  setError: (error) => set({ error: error }),
});

export default createUserSlice;
