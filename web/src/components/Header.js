import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import axios from 'axios';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import { SlRefresh } from 'react-icons/sl';
import HeaderStyles from '../styles/HeaderStyles';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import { menu } from '../constants/menu';
import { SearchModalContext } from '../contexts/searchModalContext';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [isRootURL, setIsRootURL] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(undefined);
  const { openSearchModal } = useContext(SearchModalContext);

  const handleSearchModalOpen = () => {
    openSearchModal();
  };

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const handleRefresh = () => {
    alert('refreshing');
    axios.post(`${process.env.GATSBY_BASE_URL}/__refresh`).then(res => {
      console.log('refreshed', res);
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeNav);
    }
  }, []);

  // useEffect(() => {
  //   setIsAdmin(localStorage.getItem('admin'));
  // }, []);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setIsRootURL(true);
    } else {
      setIsRootURL(false);
    }
  }, [window.location.pathname]);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isNavOpen]);

  return (
    <HeaderStyles
      scrollNav={scrollNav}
      navOpen={isNavOpen}
      isRootURL={isRootURL}
    >
      <div className='container'>
        <div className='header__container'>
          <div className='logo'>
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className='mobileIcon'>
              <div className='searchIcon'>
                <div
                  className='searchIcon__wrapper'
                  onClick={handleSearchModalOpen}
                  onKeyDown={handleSearchModalOpen}
                  tabIndex={0}
                  role='button'
                >
                  <MdSearch />
                </div>
              </div>
              <ActionButton
                className='mobileMenuBtn'
                onKeyDown={() => setIsNavOpen(true)}
                onClick={() => setIsNavOpen(true)}
              >
                <MdMenu />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                aria-label='Close Menu'
                role='button'
                tabIndex={0}
                className='mobileNavBg'
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className='mobileMenuCloseBtn'
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleNavItemClick}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className='searchIcon'>
                  <div
                    className='searchIcon__wrapper'
                    onClick={handleSearchModalOpen}
                    onKeyDown={handleSearchModalOpen}
                    tabIndex={0}
                    role='button'
                  >
                    <MdSearch />
                  </div>
                </li>
                {/* {isAdmin && ( */}
                <div className='searchIcon'>
                  <div
                    className='searchIcon__wrapper'
                    onKeyDown={handleSearchModalOpen}
                    tabIndex={0}
                    role='button'
                    onClick={() => handleRefresh()}
                  >
                    <SlRefresh />
                  </div>
                </div>
                {/* )} */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
