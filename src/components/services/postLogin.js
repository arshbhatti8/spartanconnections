import axios from 'axios';

function PostData(userData){
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:3000/users/login',userData)
            .then((response)=> {
            if(response.status===200){
                resolve(response);
                console.log(response);
            }
                if(response.status===401){
                    resolve(response);
                    console.log(response);
                }
            else{
                    reject("rejection");
                }
        })
            .catch((error)=>{
                reject(error);
            });

    });

}
export default PostData;