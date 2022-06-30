import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Cliente } from '../shared/cliente';
import {ClienteService} from "../shared/cliente.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './cliente-dialog.component.html',
  styleUrls: ['./cliente-dialog.component.scss']
})
export class ClienteDialogComponent implements OnInit {

  clienteForm !: FormGroup;
  cliente: Cliente;

  acao = 'criado';

  constructor(private clienteService: ClienteService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public editData: Cliente,
              public dialog: MatDialog
  ) {}

  ngOnInit() {

    this.clienteForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      sobreNome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required]
    });


    if(this.editData){
      this.clienteForm.controls['cpf'].setValue(this.editData.cpf)
      this.clienteForm.controls['primeiroNome'].setValue(this.editData.primeiroNome)
      this.clienteForm.controls['sobreNome'].setValue(this.editData.sobreNome)
      this.clienteForm.controls['dataNascimento'].setValue(this.editData.dataNascimento)
      this.clienteForm.controls['telefone'].setValue(this.editData.telefone)
      this.clienteForm.controls['endereco'].setValue(this.editData.endereco)
      this.acao = 'alterado';

      console.log(this.clienteForm.value)
    }
  }

  adicionarCliente() {
    this.cliente = this.clienteForm.value;

    if(this.acao == 'criado'){
      this.clienteService.salvar(this.cliente).subscribe(()=> {
        this.router.navigate(['cliente']);
        this.dialog.closeAll();
      }, erro => {
        console.log(erro);
      });
    }

    if(this.acao == 'alterado'){
      this.clienteService.incluir(this.cliente).subscribe(()=> {
        this.router.navigate(['cliente']);
        this.dialog.closeAll();
      }, erro => {
        console.log(erro);
      });
    }
  }
}
