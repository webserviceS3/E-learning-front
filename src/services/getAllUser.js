import axios from "axios";
import { useState } from "react";
import {customer1, plus, profile2, profile3} from "../assets/images/index.js";

const API_URL = "http://localhost:8080/api/test/";


class getAllUsers {

    async Users() {
        const respons =  await axios.get(API_URL + "Allusers");

        // eslint-disable-next-line react-hooks/rules-of-hooks

        return respons.data;
    }
  async nomberStudent(){
      const response = await axios.get(API_URL+"countuserbyrole/ROLE_STUDENT");

    return response.data;
  }
  async nomberPROF(){
    const response = await axios.get(API_URL+"countuserbyrole/ROLE_PROF");

    return response.data; 
  }
}

export default new getAllUsers();