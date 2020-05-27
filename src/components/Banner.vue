<template>
    <img :src="src" class="banner-image" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    components: {}
})
export default class Banner extends Vue {
    @Prop({ type: String, default: "" }) src!: string;
}
</script>
<style lang="less" scoped>
@import "../style/index.less";

.banner-image {
    width: 100%;
    height: 14rem;
    border-radius: @main-border-radius;
}
</style>
