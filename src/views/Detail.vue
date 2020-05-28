<template>
    <div class="detail" v-if="imgSrc">
        <img :src="imgSrc" alt="banner" class="detail-banner" />
        <div class="content-container">
            <h1>{{ title }}</h1>
            <div class="content">{{ content }}</div>
        </div>
    </div>
    <div v-else>
        这里没有数据哦~
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Services from "../services";

@Component
export default class Detail extends Vue {
    title = "";
    content = "";
    imgSrc = "";

    get id() {
        return this.$route.params.id;
    }

    async created() {
        const res = await Services.getDetailById(this.id);
        this.title = res.title;
        this.content = res.content;
        this.imgSrc = res.image;
    }
}
</script>
<style lang="less" scoped>
.detail-banner {
    width: 100%;
}

.content {
    white-space: pre-wrap;
    text-align: left;
}
</style>
