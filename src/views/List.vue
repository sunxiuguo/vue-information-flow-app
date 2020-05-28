<template>
    <div class="list-page">
        <input type="text" v-model="search" />
        <div class="list-container">
            <div
                class="list-item"
                v-for="(item, index) in currentList"
                :key="item.title + index"
            >
                <div class="left-section">
                    {{ getRandomEmoji() }}
                </div>
                <div class="right-section">
                    <span class="title">{{ item.title }}</span>
                    <span class="desc">{{ item.desc }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class List extends Vue {
    readonly emojiList = ["😨", "🤡", "👻", "👩", "💖"];
    readonly textList = [
        {
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            title: "握草！！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            title: "握草！！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            title: "握草！！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        }
    ];

    currentList = JSON.parse(JSON.stringify(this.textList));

    search = "";

    getRandomEmoji() {
        return this.emojiList[Math.floor(Math.random() * 6)];
    }

    @Watch("search")
    onSearchChange() {
        this.currentList = this.textList.filter(
            item => item.title.indexOf(this.search) > -1
        );
    }
}
</script>
<style lang="less" scoped>
@import "../style/index.less";
.list-container {
    .list-item {
        background: white;
        box-shadow: 0 0 10px rgba(144, 144, 144, 0.15);
        height: 10rem;
        border-radius: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 1rem;

        margin-bottom: 1.5rem;

        .left-section {
            width: 7rem;
            height: 7rem;
            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 2.5rem;
            font-weight: bold;
            color: white;

            background: @main-color;

            border-radius: 1rem;
        }

        .right-section {
            margin-left: 1rem;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .title {
                font-size: 1.4rem;
                font-weight: 500;
                text-align: left;
            }

            .desc {
                margin-top: 1rem;
                font-size: 1.2rem;
                font-weight: 400;
                text-align: left;
            }
        }
    }
}
</style>
