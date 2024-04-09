/*
 * @Author: yym
 * @Date: 2024-03-19 13:20:02
 * @LastEditTime: 2024-03-20 10:25:00
 */
import { createApp } from "vue";
import router from "@/router";
import "./style.css";
import App from "./App.vue";
import countTo from './components/countTo.vue'

const app = createApp(App);
app.component('countTo', countTo)
app.use(countTo);
app.use(router);
app.mount("#app");
