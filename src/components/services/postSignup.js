import axios from 'axios';

function PostData(userData){
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:5678/api/member/add',JSON.stringify(userData))
            .then((response)=> {
            console.log(response);
            resolve(response)})
            .catch((error)=>{
                reject(error);
        })
    });
}
 export default PostData;