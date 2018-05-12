import axios from 'axios';

function PostData(userData){
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:3000/users/signup',userData)
            .then((response)=> {
            console.log(response);
            resolve(response)})
            .catch((error)=>{
                reject(error);
        })
    });
}
 export default PostData;