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
    meta: {
      title: "Home",
    },
  },
  {
    path: "/men",
    name: "Men",
    component: Men,
    meta: {
      title: "Men",
    },
  },
  {
    path: "/women",
    name: "Women",
    component: Women,
    meta: {
      title: "Women",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/About.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/Contact.vue"),
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/Cart.vue"),
    meta: {
      title: "Cart",
    },
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/Account.vue"),
    meta: {
      title: "Account",
    },
  },
  {
    path: "/userlogin",
    name: "UserLogin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/UserLogin.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer/Checkout.vue"),
    meta: {
      title: "Checkout",
    },
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Customer/ProductDetail.vue"
      ),
    meta: {
      title: "ProductDetail",
    },
  },
  {
    path: "/adminlogin",
    name: "AdminLogin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin/AdminLogin.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/adminregister",
    name: "AdminRegister",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Admin/AdminRegister.vue"
      ),
    meta: {
      title: "Register",
    },
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
        meta: {
          title: "Banner Managenent",
        },
      },
      {
        path: "/admin/category",
        name: "Category",
        component: Category,
        meta: {
          title: "Category Managenent",
        },
      },
      {
        path: "/admin/product",
        name: "Product",
        component: Product,
        children: [
          {
            path: "/admin/product/:id",
            name: "ProductDetailAdmin",
            component: ProductDetail,
            meta: {
              title: "ProductDetail",
            },
          },
        ],
      },
      {
        path: "/admin/manageuser",
        name: "ManageUser",
        component: ManageUser,
        meta: {
          title: "User Management",
        },
      },
      {
        path: "/admin/orderlist",
        name: "OrderList",
        component: OrderList,
        meta: {
          title: "OrderList Management",
        },
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
