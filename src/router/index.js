import { createRouter, createWebHistory } from "vue-router";
import EmployeList from "../components/EmployeList.vue";
import EmployeDetail from "@/components/EmployeDetail.vue";
import AddEmploye from "@/components/AddEmploye.vue";
import EdditEmploye from "@/components/EdditEmploye.vue";

const routes =  [
  { path: "/", component: EmployeList },
  { path: "/detail-employe/:id", component: EmployeDetail, props: true },
  { path: "/add-employe", component: AddEmploye },
  {path : "/edit-employe/:id", component:EdditEmploye, props: true}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
