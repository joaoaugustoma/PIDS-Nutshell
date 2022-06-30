package com.ueg.progIII.controller;

import com.ueg.progIII.model.Cliente;
import com.ueg.progIII.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( path = "api/v1/cliente" )
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping()
    public List<Cliente> listarTodos(){
        return clienteService.listarTodos();
    }

    @GetMapping( path = "{cpf}")
    public Cliente getCliente(@PathVariable("cpf") String cpf) {
        return clienteService.getCliente(cpf);
    }

    @GetMapping( path ="primeiroNome/{primeiroNome}")
    public List<Cliente> getClienteByPrimeiroNome(@PathVariable("primeiroNome") String primeiroNome){
        return clienteService.getClienteByPrimeiroNome(primeiroNome);
    }

    @PostMapping
    public Cliente incluir(@RequestBody Cliente cliente) {
        return clienteService.incluir(cliente);
    }

    @DeleteMapping( path = "{cpf}")
    public Cliente remover(@PathVariable("cpf") String cpf) {
        return clienteService.remover(cpf);
    }

    @PatchMapping( path = "{cpf}")
    public Cliente alterar(@RequestBody Cliente cliente, @PathVariable("cpf") String cpf) {
        return clienteService.alterar(cliente, cpf);
    }
}
