/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import DeckRoundedIcon from '@mui/icons-material/DeckRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { GiHadesSymbol } from 'react-icons/gi';
import './Navbar.scss'

const Navbar = () => {

    return (
        <Nav>
            <NavItem text={'about'} />
            <NavItem text={'contact'} />
            <NavItem icon={<ArrowDropDownRoundedIcon className='icon' fontSize='large'/>}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </Nav>
    )
}

function Nav(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <Link to={'/'} className='nav-pages'><GiHadesSymbol className='globe'/>EarthWander🌍</Link>
                {props.children}
            </ul>
        </nav>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false)

    return (
        <li className='nav-item'>
            {
                props.icon ?
                    <span className="icon-button" onClick={() => setOpen(!open)}>
                        {props.icon}
                    </span> 
                    :
                    <Link to={`${props.text}`} className='nav-links'>{props.text}</Link>
            }
            {open && props.children}
        </li>
    )
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null)
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames='menu-primary'
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                <Link to={'/login'}><DropdownItem leftIcon={<AccountCircleRoundedIcon fontSize='large' sx={{color: '#fff'}}/>}>Login</DropdownItem></Link>
                    <DropdownItem
                        leftIcon={<ExploreRoundedIcon fontSize='large' sx={{color: '#fff'}}/>}
                        rightIcon={<ArrowRightRoundedIcon fontSize='large' sx={{color: '#fff'}}/>}
                        goToMenu='travel'
                        >
                        Travel with us!
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'travel'}
                timeout={500}
                classNames='menu-secondary'
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu='main' leftIcon={<ExploreRoundedIcon fontSize='large' sx={{color: '#fff' }} />} rightIcon={<ArrowLeftRoundedIcon fontSize='large' sx={{color: '#fff' }}/>}><h2>Travel with us!</h2></DropdownItem>
                    <Link to={'/lodging'}><DropdownItem leftIcon={<DeckRoundedIcon fontSize='medium' sx={{color: '#fff'}}/>}>Lodgings</DropdownItem></Link>
                    <Link to={'/history'}><DropdownItem leftIcon={<AutoStoriesRoundedIcon fontSize='medium' sx={{color: '#fff'}}/>}>Past Bookings</DropdownItem></Link>
                </div>
            </CSSTransition>
        </div>
    )
}


export default Navbar
