<template>
    <div class="list-page">
        <div class="input-container">
            <input
                type="text"
                v-model="search"
                class="input"
                placeholder="请输入关键字搜索"
            />
        </div>

        <div class="list-container">
            <div class="list-item" v-for="item in currentList" :key="item.id">
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
            id: 1,
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            id: 2,
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            id: 3,
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            id: 4,
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            id: 5,
            title: "握草！！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            id: 6,
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            id: 9,
            title: "握草！！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            id: 7,
            title: "震惊！一男一女竟然做出这种事！！！",
            desc:
                "在阴暗的房间里，小明摸索着前行，找不到开关，好像全世界都停电了。走着走着，突然...."
        },
        {
            id: 8,
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
.input-container {
    position: sticky;
    top: 0;

    height: 6rem;
    background: white;

    .input {
        outline-style: none;
        border: 1px solid #cccccc;
        border-radius: 0.3rem;
        padding: 1rem;

        width: 60%;
        margin: 1rem auto;

        font-size: 1.6rem;
        text-align: center;
    }
}

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

        margin-top: 1.5rem;

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
