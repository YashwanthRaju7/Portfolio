import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [name,setName] = useState();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
    setName(getPathNameToTitle(path));
  }, [location]);

  const getPathNameToTitle = (pathname) => {
    const titleMap = {
      '/': 'Sarikonda Yashwanth Raju',
      '/about': 'ABOUT ME',
      '/skills': 'MY SKILLS',
      '/experience': 'MY EXPERIENCE',
      '/projects': 'MY PROJECTS',
      '/contact': 'CONTACT ME',
    };
    return titleMap[pathname] || 'Sarikonda Yashwanth Raju';
  };

  return (
    <nav className='nav'>
      <h1>{name}</h1>
      <ul className='nav-list'>
        <li>
          <Link
            className={`nav-links ${activeLink === '/' ? 'active' : ''}`}
            to="/"
            onClick={() => setActiveLink('/')}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            className={`nav-links ${activeLink === '/about' ? 'active' : ''}`}
            to="/about"
            onClick={() => setActiveLink('/about')}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            className={`nav-links ${activeLink === '/skills' ? 'active' : ''}`}
            to="/skills"
            onClick={() => setActiveLink('/skills')}
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            className={`nav-links ${activeLink === '/experience' ? 'active' : ''}`}
            to="/experience"
            onClick={() => setActiveLink('/experience')} 
          >
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link
            className={`nav-links ${activeLink === '/projects' ? 'active' : ''}`}
            to="/projects"
            onClick={() => setActiveLink('/projects')}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            className={`nav-links ${activeLink === '/contact' ? 'active' : ''}`}
            to="/contact"
            onClick={() => setActiveLink('/contact')}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
