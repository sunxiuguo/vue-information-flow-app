<template>
    <div id="app">
        <keep-alive :include="keepAliveNames">
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
    components: {}
})
export default class App extends Vue {
    keepAliveNames: string[] = [];

    @Watch("$route")
    onRouteChange(to: Route, from: Route) {
        // 前进
        if (to.meta.keepAlive && !this.keepAliveNames.includes(to.name!)) {
            this.keepAliveNames.push(to.name!);
        }

        // 返回
        if (from.meta.keepAlive && from.meta.depth > to.meta.depth) {
            const index = this.keepAliveNames.indexOf(from.name!);
            index !== -1 && this.keepAliveNames.splice(index, 1);
        }
    }
}
</script>
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
