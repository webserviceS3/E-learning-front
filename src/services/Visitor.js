import axios from "axios";

const API_URL = "http://localhost:8080/api/test/";

class Visitor {
 async count() {
const token = localStorage.getItem('token'); 
const headers = {
  Authorization: `Bearer ${token}`,
};
    const response = await axios.get(API_URL+"nombreOFusers",{headers});
    return response.data;
  }



  async incrementcount() {
    const response = await axios.get(API_URL+"count-visitor");
    return response.data;
  }
}

export default new Visitor();