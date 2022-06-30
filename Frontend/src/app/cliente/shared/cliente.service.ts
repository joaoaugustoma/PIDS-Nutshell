import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlBackend = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlBackend + '/api/v1/cliente/');
  }

  public salvar(cliente: Cliente): Observable<Cliente>|undefined {
    return this.http.post<Cliente>(this.urlBackend + '/api/v1/cliente/', cliente);
  }

  public incluir(cliente: Cliente): Observable<Cliente>|undefined {
    return this.http.patch<Cliente>(this.urlBackend + '/api/v1/cliente/' + cliente.cpf, cliente);
  }

  public getById(cpf: string): Observable<Cliente>|undefined {
    return this.http.get<Cliente>(this.urlBackend + '/api/v1/cliente/' + cpf);
  }

  public remover(cpf: string): Observable<Cliente>|undefined {
    return this.http.delete<Cliente>(this.urlBackend + '/api/v1/cliente/' + cpf);
  }
}
