import axios from "axios";
import { HomeRecommendListItem } from "./types";

export default class Services {
    constructor() {
        axios.defaults.baseURL =
            "https://easy-mock.com/mock/5ece4b693895ef0603fa6f5f/mock-flow";
    }

    static async getHomeRecommendList() {
        return axios.get<HomeRecommendListItem[]>("/homeRecommendList");
    }
}
