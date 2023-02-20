import { useEffect, useRef, useState } from 'react';
import { MenuItem } from './MenuItem';
import { MenuItemProvider } from './context/MenuItemContext';
import hamburgerIcon from '../../assets/hamburger-svgrepo-com.svg';
import st from './Navbar.module.scss';

export function Navbar() {
    const [open, setOpen] = useState(false);
    const firstElementRef = useRef<HTMLAnchorElement>(null);
    const openMenuButtonRef = useRef<HTMLButtonElement>(null);

    function handleOpenMenu() {
        setOpen(open => !open);
    }

    useEffect(() => {
        open && firstElementRef.current?.focus();
    }, [open]);

    useEffect(() => {});

    return (
        <nav
            role='navigation'
            aria-label='Navigation menu'
            className={`container relative flex mb-2 gap-3 fs-s ${st.nav}`}
        >
            <a className={'shrink-0'} href='/'>
                <span className='sr-only'>Home page</span>
                <img src='/images/logo.svg' alt='Shortly Logo' />
            </a>
            <div
                id='nav-menu'
                className={`${st.navContent} ${
                    open ? '' : st.hidden
                } border-radius-s flex`}
            >
                <MenuItemProvider
                    buttonRef={openMenuButtonRef}
                    handleOpenMenu={handleOpenMenu}
                >
                    <ul className={`flex gap-2 ${st.navLeft}`}>
                        <li>
                            <MenuItem anchorRef={firstElementRef} href='/'>
                                Features
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem href='/'>Pricing</MenuItem>
                        </li>
                        <li>
                            <MenuItem href='/'>Resources</MenuItem>
                        </li>
                    </ul>
                    <div className={`flex gap-2 ${st.navRight}`}>
                        <MenuItem href='/'>Login</MenuItem>
                        <MenuItem
                            className='btn-main border-radius-lg'
                            href='/'
                        >
                            Sign up
                        </MenuItem>
                    </div>
                </MenuItemProvider>
            </div>
            <button
                ref={openMenuButtonRef}
                onClick={handleOpenMenu}
                className={st.openMenuBtn}
                aria-expanded={open}
                aria-controls='nav-menu'
            >
                <img
                    aria-hidden={true}
                    src={hamburgerIcon}
                    alt='Hamburger icon'
                />
            </button>
        </nav>
    );
}
