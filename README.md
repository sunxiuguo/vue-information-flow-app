# vue-information-flow-app

### 功能

1. 首页
2. slider
3. 文章列表/视频列表（包含整体滚动结构，列表项）
4. 实时搜索
5. 详情页
6. axios 请求/mock
7. vuex 的使用

### 开始

1. 构建页面和路由
   1.1 新建 List.vue
   1.2 新建 Detail.vue
   1.3 router/index.ts 中, enum RouteNames, 动态导入两个组件, /list 和/detail 路由带参

2. 组件
   2.1 Slider 组件 ,active, change 事件, 横向滚动, transition, ["我的", "发现", "文章", "视频", "他的", "娱乐", "朋友"];
   2.2 banner 组件, 单 image, border-radius, 随着 slider 切换更改 banner，transition fade
   [
   "https://img.tukuppt.com//ad_preview/00/03/56/5c98abb074bdd.jpg!/fw/780",
   "https://img.tukuppt.com//ad_preview/00/11/13/5c9940242bf11.jpg!/fw/780",
   "https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
   "https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
   "http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120"
   ];
   2.3 首页推荐列表， 添加 axios，baseUrl, 添加 services https://easy-mock.com/project/5ece4b693895ef0603fa6f5f, 点击 Item translate3d
   2.4 首页引用这些组件
