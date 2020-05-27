<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

html {
    width: 100%;
    height: 100%;
    font-size: 10px !important;
}

body {
    margin: 1.5rem;
}

@media only screen and (max-width: 338px) {
    html {
        font-size: 9px !important;
    }
}

// iPhone Plus
@media only screen and (min-width: 411px) {
    html {
        font-size: 11px !important;
    }
}

// Android Pad
@media only screen and (min-width: 450px) {
    html {
        font-size: 12px !important;
    }
}

@media only screen and (min-width: 525px) {
    html {
        font-size: 14px !important;
    }
}

// Nexus 7
@media only screen and (min-width: 600px) {
    html {
        font-size: 16px !important;
    }
}

// iPad or Browser
@media only screen and (min-width: 768px) {
    html {
        font-size: 20px !important;
    }
}
</style>
