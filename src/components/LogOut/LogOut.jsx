import React from 'react'
import "./LogOut.css";
import NavBar from "../../components/NavBar/NavBar";
import { NavLink } from 'react-router-dom';
import { Nav} from "react-bootstrap";

export default function LogOut(props) {
    const logout = () => {
        localStorage.removeItem("token");
        props.setUser(null);
      };

    return (
        <>
            <Nav.Link as={NavLink} to="/logout" onClick={logout}>
            Logout
            </Nav.Link>
        </>
    )
}
