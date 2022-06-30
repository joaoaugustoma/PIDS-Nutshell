import {Routes} from '@angular/router';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteComponent} from './cliente.component';

export const ClienteRoutes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      {
        path: '',
        component: ClienteListComponent
      },
    ]
  }
];
