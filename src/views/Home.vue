<template>
    <div class="home">
        <slider @onTabChange="onTabChange" />
        <banner :src="bannerSrc" />
        <video-list v-show="showVideo" />
        <home-recommend v-show="!showVideo" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slider from "../components/Slider.vue";
import Banner from "../components/Banner.vue";
import HomeRecommend from "../components/HomeRecommend.vue";
import VideoList from "../components/VideoList.vue";

@Component({
    components: { Slider, Banner, HomeRecommend, VideoList },
    name: "home"
})
export default class Home extends Vue {
    readonly BANNER_LIST = [
        "https://img.tukuppt.com//ad_preview/00/11/13/5c9940242bf11.jpg!/fw/780",
        "https://img.tukuppt.com//ad_preview/00/03/56/5c98abb074bdd.jpg!/fw/780",
        "https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
        "https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
        "http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120",
        "https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
        "https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
        "http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120"
    ];
    showVideo = false;
    bannerSrc: string = this.BANNER_LIST[0];

    onTabChange(tabIndex: number) {
        if (tabIndex === 1) {
            this.showVideo = true;
        } else {
            this.showVideo = false;
        }
        this.bannerSrc = this.BANNER_LIST[tabIndex];
    }
}
</script>
<style lang="less" scoped>
@import "../style/index.less";
</style>
