import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import axios from 'axios';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import { SlRefresh, SlBubbles, SlArrowLeftCircle } from 'react-icons/sl';
import HeaderStyles from '../styles/HeaderStyles';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import { menu } from '../constants/menu';
import { SearchModalContext } from '../contexts/searchModalContext';
import { IsAdminContext } from '../contexts/isAdminContext';
import { useLocation } from '@reach/router';

function Header() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [isRootURL, setIsRootURL] = useState(false);
  const { isAdmin, logoutAsAdmin } = useContext(IsAdminContext);
  const { openSearchModal } = useContext(SearchModalContext);

  const handleSearchModalOpen = () => {
    openSearchModal();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const handleDashboard = () => {
    if (typeof window !== 'undefined') {
      window.open(
        'https://fppi.sanity.studio/',
        '_blank',
        'rel=noopener noreferrer'
      );
    }
  };

  const handleLogout = () => logoutAsAdmin();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsRootURL(true);
    } else {
      setIsRootURL(false);
    }
  }, [location.pathname]);

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
                {isAdmin && (
                  <>
                    <div className='searchIcon'>
                      <div
                        className='searchIcon__wrapper'
                        onKeyDown={handleSearchModalOpen}
                        tabIndex={0}
                        role='button'
                        onClick={() => handleDashboard()}
                      >
                        {isNavOpen ? (
                          <p style={{ fontSize: '12px' }}>Dashboard</p>
                        ) : (
                          <p style={{ fontSize: '11px' }}>Dashboard</p>
                        )}
                      </div>
                    </div>
                    <div className='searchIcon'>
                      <div
                        className='searchIcon__wrapper'
                        onKeyDown={handleSearchModalOpen}
                        tabIndex={0}
                        role='button'
                        onClick={() => handleLogout()}
                      >
                        {isNavOpen ? (
                          <p style={{ fontSize: '11px' }}>Logout</p>
                        ) : (
                          <SlArrowLeftCircle />
                        )}
                      </div>
                    </div>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
