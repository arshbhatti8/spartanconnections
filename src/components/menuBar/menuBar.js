import React from 'react';
import {Menu,Icon,Button} from 'semantic-ui-react';

const MenuBar = () => {
    return (
        <div>
            <Menu
                borderless
                fixed='top'
                style={{
                    border: 'none',
                    padding:0,
                    boxShadow: 'none',
                    margin:0,
                }}
                inverted
                pointing
                size="huge">
                <Menu.Item>
                    <Icon name='pied piper alternate' size='big'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button
                        primary>Log out
                    </Button>
                </Menu.Item>
            </Menu>
        </div>
    );

}
export default MenuBar
