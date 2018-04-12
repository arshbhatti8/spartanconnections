import React  from 'react';
import {Card} from 'semantic-ui-react';
 const Posts =(props)=> props.posts.map((post,index)=>{
   return(
       <div>
       <Card key={index} >
           <Card.Content>
               <Card.Header>
                   {post.postTitle}
               </Card.Header>
           </Card.Content>
           <Card.Content>
               <Card.Description>
                   {post.postBody}
               </Card.Description>
           </Card.Content>
       </Card>
       </div>


   );
});
export default Posts;