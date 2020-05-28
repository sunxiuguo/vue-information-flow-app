<template>
    <div class="slider">
        <span
            v-for="(tab, index) in tabs"
            :key="tab + index"
            class="tab-item flex-1"
            :class="{ active: activeTab === index }"
            @click="changeActiveTab(index)"
            >{{ tab }}</span
        >
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {}
})
export default class Slider extends Vue {
    tabs: string[] = ["我的", "视频", "文章", "发现", "他的", "娱乐", "朋友"];
    activeTab = 0;

    changeActiveTab(index: number) {
        this.activeTab = index;
        this.$emit("onTabChange", index);
    }
}
</script>
<style lang="less" scoped>
@import "../style/index.less";

.slider {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    overflow: scroll;

    &::-webkit-scrollbar {
        width: 0;
    }

    .tab-item {
        color: #353535;
        text-align: center;
        line-height: 2.6rem;
        font-size: 1.6rem;
        color: #878787;
        flex: 0 0 25%;
        transition: all 0.3s ease-in-out;

        &.active {
            transform: scale(1.2);
            font-weight: bold;
            color: #3a3a3a;
        }
    }
}
</style>
