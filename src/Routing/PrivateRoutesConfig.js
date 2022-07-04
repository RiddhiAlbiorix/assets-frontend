import React from 'react';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Roles from "./Roles";

import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import UsersListing from '../Pages/Users'
import UsersAdd from "../Pages/Users/UsersAdd";
import UsersEdit from "../Pages/Users/UsersEdit";
import Profile from "../Pages/Profile";
import AssetsListing from "../Pages/Assets/index"
import AssetsAdd from "../Pages/Assets/AssetsAdd"
import AssetsEdit from "../Pages/Assets/AssetsEdit"
import AssetCategories from "../Pages/AssetCategories";
import AssetCategoryAdd from "../Pages/AssetCategories/AssetCategoryAdd";
import AssetCategoryEdit from "../Pages/AssetCategories/AssetCategoryEdit";
import AssetDetails from "../Pages/Assets/AssetDetails";

import AssetTypesListing from "../Pages/AssetTypes/index";
import AssetTypeAdd from "../Pages/AssetTypes/AssetTypeAdd";
import AssetTypeEdit from "../Pages/AssetTypes/AssetTypeEdit";

import AssetStatusListing from "../Pages/AssetStatus/index"
import AssetStatusAdd from "../Pages/AssetStatus/AssetStatusAdd"
import AssetStatusEdit from "../Pages/AssetStatus/AssetStatusEdit"

export const PrivateRoutesConfig = [
    {
        component : Registration,
        path : '/',
        exact : true
    },
    {
        component : Login,
        path : '/login',
        exact : true
    },
    {
        component : ForgotPassword,
        path : '/forgot-password',
        exact : true
    },
    {
        component : ResetPassword,
        path : '/reset-password/:id',
        exact : true
    },
    {
        key : 2,
        sidebar : false,
        component: Profile,
        path: '/profile',
        permissions: [
            Roles.ADMIN,
            Roles.EMPLOYEE,
        ],
    },
    {
        key : 3,
        sidebar : true,
        icon : React.createElement(UserOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/app/users">Users</Link>,
        component : UsersListing,
        path : '/app/users',
        exact : true,
        permissions : [
            Roles.ADMIN,
            Roles.EMPLOYEE
        ],
        childrens : [
            {
                key : 4,
                component : UsersAdd,
                path : '/users/add',
                exact : true
            },
            {
                key : 5,
                component : UsersEdit,
                path : '/users/edit/:id',
                exact : true
            },
        ]
    },
    {
        key : 6,
        sidebar : true,
        icon : React.createElement(LaptopOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/app/assets">Assets</Link>,
        component : AssetsListing,
        path : '/app/assets',
        exact : true,
        permissions : [
            Roles.ADMIN
        ],
        childrens : [
            {
                key : 7,
                component : AssetDetails,
                path : '/assets/:id',
                exact : true
            },
            {
                key : 8,
                component : AssetsAdd,
                path : '/assets/add',
                exact : true
            },
            {
                key : 9,
                component : AssetsEdit,
                path : '/assets/edit/:id',
                exact : true
            },
        ]
    },
    {
        key : 10,
        sidebar : true,
        icon : React.createElement(LaptopOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/app/asset-categories">Asset Categories</Link>,
        component : AssetCategories,
        path : '/app/asset-categories',
        exact : true,
        permissions : [
            Roles.ADMIN
        ],
        childrens : [
            {
                key : 11,
                component : AssetCategoryAdd,
                path : '/asset-categories/add',
                exact : true
            },
            {
                key : 12,
                component : AssetCategoryEdit,
                path : '/asset-categories/edit/:id',
                exact : true
            },
        ]
    },
    {
        key : 13,
        sidebar : true,
        icon : React.createElement(LaptopOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/app/asset-types">Asset Types</Link>,
        component : AssetTypesListing,
        path : '/app/asset-types',
        exact : true,
        permissions : [
            Roles.ADMIN
        ],
        childrens : [
            {
                key : 14,
                component : AssetTypeAdd,
                path : '/asset-types/add',
                exact : true
            },
            {
                key : 15,
                component : AssetTypeEdit,
                path : '/asset-types/edit/:id',
                exact : true
            },
        ]
    },
    {
        key : 16,
        sidebar : true,
        icon : React.createElement(LaptopOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/app/asset-status">Asset Status</Link>,
        component : AssetStatusListing,
        path : '/app/asset-status',
        exact : true,
        permissions : [
            Roles.ADMIN
        ],
        childrens : [
            {
                key : 17,
                component : AssetStatusAdd,
                path : '/asset-status/add',
                exact : true
            },
            {
                key : 18,
                component : AssetStatusEdit,
                path : '/asset-status/edit/:id',
                exact : true
            },
        ]
    },
]
