import { createWebHistory, createRouter } from "vue-router";

import HeroView from "@/views/HeroView.vue";
import OurCoffeeView from "@/views/OurCoffeeView.vue";
import GoodsView from "@/views/GoodsView.vue";
import ContactsView from "@/views/ContactsView.vue";
import ThanksView from "@/views/ThanksView.vue";

const routes = [
  { path: "/", component: HeroView },
  { path: "/coffee", component: OurCoffeeView },
  { path: "/goods", component: GoodsView },
  { path: "/contacts", component: ContactsView },
  { path: "/thanks", component: ThanksView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
