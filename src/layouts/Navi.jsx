import React from 'react'
import SıgnUp from "./SıgnUp";
import SıgnIn from "./SıgnIn";
import { Container, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
             <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                <Menu.Menu position='right'>    
                    <SıgnIn/>   
                    <SıgnUp/>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
