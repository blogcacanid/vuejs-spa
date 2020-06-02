<template>
    <div id="app">
        <Navbar />
        <main class="container" role="main">
            <router-view />
        </main>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Navbar from './components/Navbar'
    export default {
        name: 'App',
        components: {
            Navbar,
        },
    }
</script>
