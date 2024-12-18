import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import DropdownButton from './SidebarDropdownButton';
import hamburger from '../assets/images/hamburger.png'

function Sidebar(){
  const CustomBurgerIcon = () => <img src={hamburger} alt="Hamburger Menu" />;

  const events = [
      { name: 'Annual Talent Search', link: '/ats' },
      { name: 'Kshitij', link: '/kshitij' },
      { name: 'Annual Day', link: '/annual-day' },
  ];

  const team = [
      { name: 'Student Body', link: '/team' },
      { name: 'Teacher  Body', link: '/teachers' },
      { name: 'Our Teams', link: '/our-teams' },
  ];
  
  return (
    <Menu isOpen={false}  customBurgerIcon={ <CustomBurgerIcon /> } right width={'100%'}>
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/about">About</a>
        <a className="menu-item" href="/achievements">Achievements</a>
        <a className="menu-item" role='button'> <DropdownButton items = {events} name="Events"/> </a>
        <a className="menu-item" role='button'> <DropdownButton items = {team} name="Team"/> </a> 
        <a className="menu-item" href="/alumni">Alumni</a>
        <a className="menu-item" href="/gallery">Gallery</a>
        <a className="menu-item" href="/contact">Contact Us</a>
      </Menu>
  );
};

export default Sidebar;