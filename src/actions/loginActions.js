import { SET_USER } from './types';
import jwt_decode from 'jwt-decode';

export const loginUser = (user) => dispatch => {

        fetch("http://localhost:8000/api/v1/auth/login", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        })
          .then(response => response.json())
          .then(data => {
              if(!data.error){
                const userDetail = jwt_decode(data.token);
                const payload = {...userDetail, token:data.token}
                if(user)
                 dispatch({
                     type: SET_USER,
                     payload
                 });
              }
              else{
                  console.log(data.error)
              }
           

            // if (data.message) {
            //   localStorage.setItem("message", data.message);
            // }
            // if (data.errors) {
            //   localStorage.setItem("errors", data.errors);
            // }
            // if (data.error === true) {
            //   localStorage.setItem("error", "true");
            // } else {
            //   const token = data.token;
            //   localStorage.setItem("token", token);
            //   localStorage.setItem("role", data.authDetail.role);
            //   localStorage.setItem("username", data.authDetail.username);
            //   localStorage.setItem("cart", "");
            //   localStorage.setItem("id", data.authDetail.id);
            //   localStorage.setItem("email", data.authDetail.email);
            //   localStorage.setItem("name", data.authDetail.name);
              
            // }
           
          });
}