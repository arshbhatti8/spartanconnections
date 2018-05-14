import React from 'react';
import axios from 'axios';
const GetUser = () => {

    return new Promise((resolve,reject)=>{
        const userID=sessionStorage.getItem("userID");
        const encodeURI='http://localhost:3000/users/'+userID;
        axios.get(encodeURI)
            .then((response)=> {
                console.log(response);
                resolve(response)})
            .catch((error)=>{
                reject(error);
            })
    });


};
export default GetUser;
