import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

const { VITE_APP_URL } = import.meta.env;

export default defineStore("authStore", {
  state: () => ({
    isLogged: false,
  }),
  actions: {
    signIn(username, password) {
      axios
        .post(`${VITE_APP_URL}/admin/signin`, { username, password })
        .then((response) => {
          this.isLogged = true;
          alert(response.data.message);
          // 登入成功，導回上一頁
          router.go(-1);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    logout() {
      axios
        .post(`${VITE_APP_URL}/logout`)
        .then((res) => {
          alert(res.data.message);
          // 登出成功，將isLogin設為false
          this.isLogged = false;
          router.push({ name: "login" });
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    checkAuth() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      axios.defaults.headers.common.Authorization = token;

      axios
        .post(`${VITE_APP_URL}/api/user/check`)
        .then((res) => {
          this.isLogged = true;
        })
        .catch((err) => {
          console.log(err);
          this.isLogged = false;
        });
    },
  },
});
