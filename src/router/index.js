import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import AdminView from "../views/AdminView.vue";
import DashboardView from "../views/member1/DashboardView.vue";
import DashboardView2 from "../views/member2/DashboardView2.vue";
import BookDetail from "../views/member1/BookDetail.vue";
import BookDetail2 from "../views/member2/BookDetail2.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/member",
    name: "member",
    component: DashboardView,
  },
  {
    path: "/member/:id",
    name: "BookDetail",
    component: BookDetail,
  },
  {
    path: "/member2",
    name: "member2",
    component: DashboardView2,
  },
  {
    path: "/member2/:id",
    name: "BookDetail2",
    component: BookDetail2,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  const adminAuthenticated = JSON.parse(
    localStorage.getItem("admin-authenticated")
  );
  const memberAuthenticated = JSON.parse(
    localStorage.getItem("member-authenticated")
  );
  const member2Authenticated = JSON.parse(
    localStorage.getItem("member2-authenticated")
  );
  if (
    to.name !== "login" &&
    !adminAuthenticated &&
    !memberAuthenticated &&
    !member2Authenticated
  )
    next({
      name: "login",
    });
  // Login As Admin
  else if (to.name === "login" && adminAuthenticated)
    next({
      name: "admin",
    });

  // Login As Member
  else if (to.name === "login" && memberAuthenticated)
    next({
      name: "member",
    });
  else if (to.name === "admin" && memberAuthenticated)
    next({
      name: "member",
    });
  else if (to.name === "member2" && memberAuthenticated)
    next({
      name: "member",
    });
  else if (to.name === "BookDetail2" && memberAuthenticated)
    next({
      name: "member",
    });

  // Login As Member 2
  else if (to.name === "login" && member2Authenticated)
    next({
      name: "member2",
    });
  else if (to.name === "admin" && member2Authenticated)
    next({
      name: "member2",
    });
  else if (to.name === "member" && member2Authenticated)
    next({
      name: "member2",
    });
  else if (to.name === "BookDetail" && member2Authenticated)
    next({
      name: "member2",
    });
  else next();
});
