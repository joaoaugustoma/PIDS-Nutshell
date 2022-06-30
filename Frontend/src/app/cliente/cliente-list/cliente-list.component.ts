import {Component, OnInit} from '@angular/core';
import {Cliente} from '../shared/cliente';
import {ClienteService} from '../shared/cliente.service';
import {MatDialog} from '@angular/material';
import {ClienteDialogComponent} from "../cliente-dialog/cliente-dialog.component";
import {RemocaoDialogComponent} from "../../dialog/remocao-dialog/remocao-dialog.component";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  displayedColumns: string[] = ['cpf', 'primeiroNome', 'sobreNome', 'dataNascimento', 'telefone', 'endereco', 'acoes'];

  clientes: Cliente[] = [];

  dataSource = [...this.clientes];
  constructor(private clienteService: ClienteService,
              public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes(){
    this.clienteService.getClientes().subscribe((clientes: Cliente[]) => {
      this.dataSource = [...clientes];
    });
  }

  openDialog() {
    this.dialog.open(ClienteDialogComponent, {
      width: '50%'
    }).afterClosed().subscribe(result => {
      this.getAllClientes();
    });
  }

  confirmaRemocao(cliente: Cliente) {
    this.dialog.open(RemocaoDialogComponent, {
      width: '30%',
      data: cliente
    }).afterClosed().subscribe(result => {
      this.getAllClientes();
    });
  }

  confirmaEdicao(cliente: Cliente) {
    this.dialog.open(ClienteDialogComponent, {
      width: '50%',
      data: cliente
    }).afterClosed().subscribe(result => {
      this.getAllClientes();
    });
  }
}
