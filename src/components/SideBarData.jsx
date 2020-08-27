import React from 'react';
import{FaUserFriends,FaShoppingCart,FaCog} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';

export const SideBarData =[
  {
    title: 'Home',
    path: '/',
    icon:  <AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/users',
    icon:  <FaUserFriends/>,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon:  <FaShoppingCart/>,
    cName: 'nav-text'
  },{
    title: 'Configurations',
    path: '/config',
    icon:  <FaCog/>,
    cName: 'nav-text'
  }
]