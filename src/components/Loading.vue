<template>
    <div class="mask">
        <div class="spinner">
            <div
                v-for="item in list"
                :key="item"
                :class="`rect${item}`"
                :style="getStyle(item)"
            ></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {}
})
export default class Loading extends Vue {
    list = [1, 2, 3, 4, 5];

    getStyle(index: number) {
        const seconds = -1 + index / 10;
        return { "animation-delay": `${seconds}s` };
    }
}
</script>
<style lang="less" scoped>
@import "../style/index.less";

.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);

    z-index: 10000;

    display: flex;
    justify-content: center;
    align-items: center;

    .spinner {
        display: flex;
        width: 5rem;
        height: 6rem;

        div {
            margin-left: 0.5rem;
            background-color: @main-color;
            height: 100%;
            width: 0.6rem;
            animation: stretchdelay 1.2s infinite ease-in-out;
            border-radius: 0.5rem;
        }
    }
}

@keyframes stretchdelay {
    0%,
    40%,
    100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1);
        -webkit-transform: scaleY(1);
    }
}
</style>
