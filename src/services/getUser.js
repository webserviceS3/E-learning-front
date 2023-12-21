import axios from "axios";
const API_URL = "http://localhost:8080/api/test/photoProfil/";

class getUser {
 

  async getPhoto(username) {
    try {
      const response = await axios.get(API_URL + username, { responseType: 'blob' });
      const objectURL = URL.createObjectURL(response.data);
      return objectURL;
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error; // Rethrow the error so that the calling code can handle it
    }
  }
}

export default new getUser();