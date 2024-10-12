import { CreateComponent } from "../pages/user/create/create.component";
import { DataTableComponent } from "../pages/user/data-table/data-table.component";
import { ProfileComponent } from "../pages/user/profile/profile.component";

export const navbarRoutes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: { icon: 'person', text: 'Perfil' }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: { icon: 'add', text: 'Crear' }
  },
  {
    path: 'data-table',
    component: DataTableComponent,
    data: { icon: 'tabla_chart', text: 'Tabla de datos' }
  },
];