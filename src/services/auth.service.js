import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username:username,
        password:password
     })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(username, email, password) {
    const response = await axios.post(API_URL + "signup", {
      username: username,
      age:22,
      email: email,
      password:password,
      role:["student"]
  });
    console.log("you are login");
    return response;
  }
}

export default new AuthService();