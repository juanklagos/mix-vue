import Home from './components/views/Home'
import Login from './components/views/Login'
import Register from './components/views/Register'
export const routes = [

    {
        path: '/',
        name: 'home',
        component: Home,
    },{
        path: '/login',
        name: 'login',
        component: Login,
    },{
        path: '/register',
        name: 'register',
        component: Register,
    },
];