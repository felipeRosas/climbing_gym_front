import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler,Collapse, Nav, NavItem,NavLink,DropdownMenu,DropdownItem,NavbarText,
    DropdownToggle,UncontrolledDropdown } from 'reactstrap';

import './styles/BarraNavegacion.css'

class BarraNavegacion extends React.Component{
    constructor(props){
        super();
    }
    componentWillUnmount(){
        
    }

    render(){
        return(
            <Navbar color="ligth" light expand="md">
                <NavbarBrand>{this.props.gymName}</NavbarBrand>
                <NavbarToggler></NavbarToggler>
                    <Collapse  navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/clases/">Clases</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/inscripcion/">inscripcion</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contacto/">contacto</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        );
    }
}

export default BarraNavegacion;