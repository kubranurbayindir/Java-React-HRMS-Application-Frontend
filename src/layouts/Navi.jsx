import React, { useState } from "react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Container, Menu, Icon } from 'semantic-ui-react'
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name="Ana Sayfa" as={Link} to={"/"}> <Icon name="home" />Ana Sayfa </Menu.Item>
                    <Menu.Item name="İş İlanları" as={Link} to={"/jobpostings"} />
                    <Menu.Item name="Öz Geçmişler" as={Link} to={"/cvs"} />
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu> 
                </Container>
            </Menu>
        </div>
    )
}
