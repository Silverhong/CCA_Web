import React from 'react'
import CIcon from '@coreui/icons-react';

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/home',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      // text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Authentications',
    route: '/authentication',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Users',
        to: '/user',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Roles',
      //   to: '/role',
      // }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Companies',
    to: '/company',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info'
    }
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Menu Setup',
  //   route: '/menu',
  //   icon: 'cil-list-rich',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Menu',
  //       to: '/menu',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Categories',
  //       to: '/category',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tags',
  //       to: '/tag',
  //     },
  //   ],
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Posts',
    to: '/post',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info'
    }
  },
]

