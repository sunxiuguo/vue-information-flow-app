<template>
    <div>
        <loading v-if="loading" />
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
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Services from "../services";
import Loading from "../components/Loading.vue";

@Component({
    components: {
        Loading
    }
})
export default class Detail extends Vue {
    title = "";
    content = "";
    imgSrc = "";
    loading = true;

    get id() {
        return this.$route.params.id;
    }

    async created() {
        const res = await Services.getDetailById(this.id);
        this.title = res.title;
        this.content = res.content;
        this.imgSrc = res.image;
        setTimeout(() => {
            this.loading = false;
        }, 1000);
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
