import {Component, Inject, OnInit} from '@angular/core';
import {Cliente} from "../../cliente/shared/cliente";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ClienteService} from "../../cliente/shared/cliente.service";

@Component({
  selector: 'app-remocao-dialog',
  templateUrl: './remocao-dialog.component.html',
  styleUrls: ['./remocao-dialog.component.scss']
})
export class RemocaoDialogComponent implements OnInit {

  cliente: Cliente;

  constructor(public clienteService: ClienteService,
              @Inject(MAT_DIALOG_DATA) public editData: Cliente,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.cliente = this.editData;
  }

  confirmarRemocao(cliente: Cliente) {
    this.clienteService.remover(cliente.cpf).subscribe();
    this.dialog.closeAll();
  }
}
