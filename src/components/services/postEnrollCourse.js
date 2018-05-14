import React from 'react';
import axios from 'axios';

const PostEnrollCourse = (state) => {
    // let coursesArray=[];
    // coursesArray=courses.slice();
    //  console.log("Posting courses:"+coursesArray+" and its type is:"+typeof coursesArray);
    let id=state._id;
    return new Promise((resolve,reject)=>{
        const encodeURI="http://localhost:3000/users/"+id;
       axios.patch(encodeURI,state)
           .then((response)=>{
           resolve(response);
           })
           .catch((error)=>{
           reject(error);
           })
    });


};
export default PostEnrollCourse;
