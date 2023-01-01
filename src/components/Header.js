import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import Logo from '../app/assets/img/backpack_logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar sticky='top' expand='md' className='color-nav'>
            <NavbarBrand className='ms-2' href='/'>
                <img alt='backpack icon' src={Logo} style={{ width: 80 }}/>
            </NavbarBrand>
            <NavbarBrand className='ms-5' href='/'>
                <h1>Welcome</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem className='nav-link' to='/'>
                        <i className='fa fa-solid fa-compass fa-lg' alt='gear'/>
                    </NavItem>
                    <NavItem className='nav-link' to='/'>
                        <i className='fa fa-solid fa-car fa-lg' />
                    </NavItem>
                    <NavItem className='nav-link' to='/'>
                        <i className='fa fa-solid fa-address-book fa-lg' />
                    </NavItem>
                    <NavItem className='nav-link' to='/'>
                        <i className='fa fa-regular fa-calendar fa-lg' />
                    </NavItem>
                    <NavItem className='nav-link' to='/'>
                        <i className='fa fa-bicycle fa-lg' />
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;