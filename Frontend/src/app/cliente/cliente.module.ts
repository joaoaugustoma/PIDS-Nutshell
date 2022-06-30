import {NgModule} from '@angular/core';
import {ClienteComponent} from './cliente.component';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClienteRoutes} from './cliente.routing';
import {MatButtonModule, MatDialogModule, MatTableModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {ClienteDialogComponent} from "./cliente-dialog/cliente-dialog.component";
import {RemocaoDialogComponent} from "../dialog/remocao-dialog/remocao-dialog.component";

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(ClienteRoutes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [
    ClienteListComponent,
    ClienteDialogComponent,
    RemocaoDialogComponent
  ]
})
export class ClienteModule { }
