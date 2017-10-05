import axios from 'axios';
import {Load} from '../action_creators/index';

var url = "http://localhost:9000";
export default function ADD() {
    
       return  dispatch => {
        axios.post(url+'/add', {
            num:{
                num1:3,
                num2:4
            }
          })
          .then(function (response) {
            console.log("Response"+JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
         
     }

 }
      