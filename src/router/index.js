import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../views/TheHome.vue";
import AnimeList from "../views/AnimeList.vue";
import EpisodesDates from "../views/EpisodesDates.vue";
import ContactUs from "../views/ContactUs.vue";
import SearchView from "../views/SearchView.vue";
import UserView from "../views/UserView.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TheHome,
  },
  {
    path: "/list/:order",
    name: "animeList",
    component: AnimeList,
  },
  {
    path: "/dates",
    name: "episodesDates",
    component: EpisodesDates,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactUs,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/user/:action",
    name: "userView",
    component: UserView,
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// component: () => {
// import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
// }
