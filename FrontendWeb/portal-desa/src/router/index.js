import Vue from "vue";
import VueRouter from "vue-router";
import JhomePage from "../views/JhomePage.vue";
import DesaPage from "../views/DesaPage";
import ProductPage from "../views/ProductPage";
import JloginPage from "../views/JloginPage";
import JregisterPage from "../views/JregisterPage";
import CreateProdukForm from "../views/form/CreateProdukForm";
import DetailKecamatanPage from "../views/DetailKecamatanPage";
import DaftarAdminDesa from "../views/form/DaftarAdminDesa";
import FormDetailDesa from "../views/form/FormDetailDesa";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: JhomePage
  },
  {
    path: "/detailDesa",
    name: "detailDesa",
    component: FormDetailDesa
  },
  {
    path: "/daftarAdmin",
    name: "daftarAdmin",
    component: DaftarAdminDesa
  },
  {
    path: "/detailKecamatan/:sku",
    name: "DetailKecamatan",
    component: DetailKecamatanPage
  },
  {
    path: "/createProduk",
    name: "createProduk",
    component: CreateProdukForm
  },
  {
    path: "/register",
    name: "Register",
    component: JregisterPage
  },
  {
    path: "/login",
    name: "Login",
    component: JloginPage
  },
  {
    path: "/produk",
    name: "ProductPage",
    component: ProductPage
  },
  {
    path: "/desa",
    name: "DesaPage",
    component: DesaPage
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
