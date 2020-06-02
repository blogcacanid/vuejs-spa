<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">SPA Vue.js</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
            <router-link tag="li" to="home" class="nav-item" active-class="active">
                <a style="margin-left: 15px;" class="nav-link">
                    Home
                </a>
            </router-link>
            <router-link tag="li" to="about" class="nav-item" active-class="active">
                <a style="margin-left: 15px;" class="nav-link">
                    About
                </a>
            </router-link>
            <router-link tag="li" to="contacts" class="nav-item" active-class="active">
                <a style="margin-left: 15px;" class="nav-link">
                    Contacts
                </a>
            </router-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
    export default {

    }
</script>