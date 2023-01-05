import { useState } from "react"

import {Link} from 'react-router-dom'
import {
  Navbar as NavbarContainer,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <NavbarContainer className="px-3" color="dark" dark expand="md">
            <NavbarBrand tag='div'>
                <Link to='/' className="text-decoration-none" style={{ color: '#f2ca02' }}>Crypto App</Link>
            </NavbarBrand>
            <NavbarToggler color="white" onClick={toggle} />
            <Collapse className="justify-content-end" isOpen={isOpen} navbar>
                <Nav className="d-flex gap-4" navbar>
                    <NavItem className="text-center">
                      <Link className="text-light" to='/coins'>
                        Coins
                      </Link>
                    </NavItem>
                    <NavItem className="text-center">
                      <Link className="text-light" to='/exchanges'>
                        Exchanges
                      </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </NavbarContainer>
    )
}

export default Navbar