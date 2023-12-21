import axios from "axios";
import { useState } from "react";
import {customer1, plus, profile2, profile3} from "../assets/images/index.js";

const API_URL = "http://localhost:8080/api/test/addCour";


class Courservice {

    async addCour(data) {
        
        const[dt,setdt]=useState({
            
                title: data.title,
                courseSection: data.category,
                paragraphes: data.paragraphs
            })
        const respons =  await axios.post(API_URL, dt);

        // eslint-disable-next-line react-hooks/rules-of-hooks

        return respons;
    }
 
}

export default new Courservice();