import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Customer/Home.vue";
import Men from "../views/Customer/Men.vue";
import Women from "../views/Customer/Women.vue";
import Admin from "../views/Admin/Admin.vue";
import Product from "../views/Admin/ManageProduct.vue";
import Banner from "../views/Admin/Banner.vue";
import Category from "../views/Admin/Category.vue";
import ManageUser from "../views/Admin/ManageUser.vue";
import OrderList from "../views/Admin/OrderList.vue";
import Dashboard from "../views/Admin/Dashboard.vue";
import ProductDetail from "../views/Admin/ProductDetail.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/men",
    name: "Men",
    component: Men,
  },
  {
    path: "/women",
    name: "Women",
    component: Women,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/Contact.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/Cart.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/Account.vue"),
  },
  {
    path: "/userlogin",
    name: "UserLogin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/UserLogin.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/Checkout.vue"),
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Customer/ProductDetail.vue"
      ),
  },
  {
    path: "/adminlogin",
    name: "AdminLogin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin/AdminLogin.vue"),
  },
  {
    path: "/adminregister",
    name: "AdminRegister",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Admin/AdminRegister.vue"
      ),
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "/admin/banner",
        name: "Banner",
        component: Banner,
      },
      {
        path: "/admin/category",
        name: "Category",
        component: Category,
      },
      {
        path: "/admin/product",
        name: "Product",
        component: Product,
<<<<<<< HEAD
      },
      {
        path: "/admin/product/:id",
        name: "ProductDetail",
        component: ProductDetail,
=======
        children: [
          {
            path: "/admin/product/:id",
            name: "ProductDetailAdmin",
            component: ProductDetail,
          },
        ],
>>>>>>> main
      },
      {
        path: "/admin/manageuser",
        name: "ManageUser",
        component: ManageUser,
      },
      {
        path: "/admin/orderlist",
        name: "OrderList",
        component: OrderList,
      },
      {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

// router.beforeEach((to, from, next) => { //Duyệt luồng truy cập
//   // redirect to login page if not logged in and trying to access a restricted page
//   const RestrictedPage = ['/admin', '/banner','/category','/product','/manageuser','/orderlist','/dashboard'];
//   const authRequired = RestrictedPage.includes(to.path);
//   const loggedIn = localStorage.getItem(`token`);
//   if(authRequired)
//     if (!loggedIn) {
//       return next('/adminlogin');
//   }
//   next();
// })
