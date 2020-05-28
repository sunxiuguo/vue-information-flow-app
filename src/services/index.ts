import axios from "axios";
import { HomeRecommendListItem, DetailInfo } from "./types";

export default class Services {
    static init() {
        axios.defaults.baseURL =
            "https://www.fastmock.site/mock/505750b853376ff038612e1d348bf716/mockflow";
    }

    static async getHomeRecommendList() {
        this.init();
        return axios
            .get<HomeRecommendListItem[]>("/homeRecommendList")
            .then(res => res.data);
    }

    static async getList() {
        this.init();
        return axios.get<DetailInfo[]>("/list").then(res => res.data);
    }
}
