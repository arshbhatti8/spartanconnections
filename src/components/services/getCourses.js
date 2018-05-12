import axios from 'axios';

function getCourses(){
    return new Promise((resolve,reject)=>{
        axios.get('http://localhost:3000/courses/')
            .then((response)=> {
                console.log(response);
                resolve(response)})
            .catch((error)=>{
                reject(error);
            })
    });
}
export default getCourses;