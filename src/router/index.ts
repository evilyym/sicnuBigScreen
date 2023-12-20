import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

//静态路由
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
    children: [],
  },
  {
    path: "/tab",
    component: () => import("@/views/tab.vue"),
    children: [],
  },
  {
    path: "/:pathMatch(.*)", //当捕获*所有的路由时,需要使用正则表达式的参数来表示
    name: "*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});
router.afterEach((to, from, next) => {});

const resetRouter = () => {
  const whiteList: string[] = ["", "/404", "/:pathMatch(.*)"];
  //获取所有路由
  router.getRoutes().forEach((route) => {
    const { name } = route; //获取路由name
    if (name && !whiteList.includes(name as string)) {
      //路由不属于白名单,则删除
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
};
interface menu_type {
  en_name: string;
  child: menu_type[];
  features: {
    en_name: string;
  };
}

const createMenu = (menu: menu_type[]) => {
  return menu.map((res: menu_type) => {
    let item: any = { path: res.en_name, features: res.features };
    if (res.child) item = createMenu(res.child);
    return item;
  });
};
export default router;
