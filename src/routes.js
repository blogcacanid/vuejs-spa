import Home from './components/Home.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import Redirect from './components/Redirect.vue'

const routes = [
    { path: '/', component: Home, name: '/' },
    { path: '/home', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/contacts', component: Contacts, name: 'contacts' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
];

export default routes