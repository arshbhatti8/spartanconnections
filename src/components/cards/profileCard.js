import React from 'react';
import {Card,Image,Button} from 'semantic-ui-react';
const ProfileCard = () => {
    return (
        <div>
            <Card raised centered>
                <Image src={require('../../assets/images/profile.jpg')} />
                <Card.Content style={{textAlign:'center'}}>
                    <Card.Header>Arsh Bhatti</Card.Header>
                    <Card.Meta>Connect with me on:</Card.Meta>
                    <Card.Description>
                        <a target="_blank" href="https://www.linkedin.com/in/arshbhatti"><Button circular size='massive'  color='linkedin' icon='linkedin'/></a>
                        <a target="_blank" href="https://www.github.com/arshbhatti8"><Button circular size='massive' color='black' icon='github'/></a>
                        <a target="_blank" href="https://www.facebook.com/arshbhatti8"><Button circular size='massive' color='facebook' icon='facebook'/></a>
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    );

};
export default ProfileCard;
