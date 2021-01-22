import React from 'react';

const Home = React.lazy(() => import('./screens/home/Home'));
const User = React.lazy(() => import('./screens/user/User'));
const CreteUser = React.lazy(() => import('./screens/user/CreateUser'));
const UpdateUser = React.lazy(() => import('./screens/user/UpdateUser'));
const Role = React.lazy(() => import('./screens/role/Role'));
const CreateRole = React.lazy(() => import('./screens/role/CreateRole'));
const UpdateRole = React.lazy(() => import('./screens/role/UpdateRole'));
const Post = React.lazy(() => import('./screens/post/Post'));
const CreatePost = React.lazy(() => import('./screens/post/CreatePost'));
const UpdatePost = React.lazy(() => import('./screens/post/UpdatePost'));
const Category = React.lazy(() => import('./screens/category/Category'));
const CreateCategory = React.lazy(() => import('./screens/category/CreateCategory'));
const UpdateCategory = React.lazy(() => import('./screens/category/UpdateCategory'));
const Tag = React.lazy(() => import('./screens/tag/Tag'));
const CreateTag = React.lazy(() => import('./screens/tag/CreateTag'));
const UpdateTag = React.lazy(() => import('./screens/tag/UpdateTag'));
const Menu = React.lazy(() => import('./screens/menu/Menu'));
const UpdateMenu = React.lazy(() => import('./screens/menu/UpdateMenu'));
const Company = React.lazy(() => import('./screens/company/Company'));
const UpdateCompany = React.lazy(() => import('./screens/company/UpdateCompany'));

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Home },
  { path: '/home', name: 'Dashboard', component: Home },
  { path: '/user', exact: true, name: 'Users', component: User },
  { path: '/user/create', name: 'Create User', component: CreteUser },
  { path: '/user/edit/:id', name: 'Update User', component: UpdateUser },
  { path: '/role', exact: true, name: 'Roles', component: Role },
  { path: '/role/create', name: 'Create Roles', component: CreateRole },
  { path: '/role/edit/:id', name: 'Update Roles', component: UpdateRole },
  { path: '/category', exact: true, name: 'Categories', component: Category },
  { path: '/category/create', name: 'Creaate Categories', component: CreateCategory },
  { path: '/category/edit/:id', name: 'Update Categories', component: UpdateCategory },
  { path: '/post', exact: true, name: 'Posts', component: Post },
  { path: '/post/create', name: 'Create Posts', component: CreatePost },
  { path: '/post/edit/:id', name: 'Update Posts', component: UpdatePost },
  { path: '/tag', exact: true, name: 'Tags', component: Tag },
  { path: '/tag/create', name: 'Create Tags', component: CreateTag },
  { path: '/tag/edit/:id', name: 'Update Tags', component: UpdateTag },
  { path: '/menu', exact: true, name: 'Menus', component: Menu },
  { path: '/menu/edit/:id', name: 'Update Menus', component: UpdateMenu },
  { path: '/company', exact: true, name: 'Companies', component: Company },
  { path: '/company/edit/:id', name: 'Update Companies', component: UpdateCompany },
];

export default routes;
