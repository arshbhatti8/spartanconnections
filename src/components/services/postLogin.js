import axios from 'axios';

function PostData(userData){
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:5678/api/login',JSON.stringify(userData))
            .then((response)=> {
            if(response.status==200){
                resolve(response)
            }
            else{
                reject("rejection")
            }
        })
            .catch((error)=>{
                console.log("This is the error:"+error);
                reject(error);
            });

    });
}
export default PostData;