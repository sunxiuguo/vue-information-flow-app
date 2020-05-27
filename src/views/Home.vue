<template>
    <div class="home">
        <slider @onTabChange="onTabChange" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slider from "../components/Slider.vue";

@Component({
    components: { Slider }
})
export default class Home extends Vue {
    onTabChange(tabIndex: number) {
        console.log(tabIndex);
    }
}
</script>
<style lang="less" scoped>
@import "../style/index.less";
</style>
