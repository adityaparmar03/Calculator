import axios from 'axios';

var url = "http://localhost:9000/";

export function Operation(num,type) {

    
    
     return  dispatch => {
        axios.post(url+type, {
            num:{
                num1:num.num1,
                num2:num.num2
            }
          })
          .then(function (response) {
            return dispatch({ type : "RESULT", payload : response.data } )
          })
          .catch(function (error) {
            console.log(error);
          });
         
     }
 }
 