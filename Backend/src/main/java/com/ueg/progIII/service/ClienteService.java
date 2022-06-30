package com.ueg.progIII.service;

import com.ueg.progIII.model.Cliente;
import com.ueg.progIII.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

  @Autowired private ClienteRepository clienteRepository;

  public Cliente getCliente(String cpf) {
    this.validarClienteExiste(cpf);
    Optional<Cliente> cliente = obterClienteSeExiste(cpf);
    return cliente.get();
  }

  public List<Cliente> listarTodos() {
    return clienteRepository.findAll();
  }

  public Cliente incluir(Cliente cliente) {
    Boolean existeEndereco = clienteRepository.exiteEndereco(cliente.getEndereco());

    if (existeEndereco) {
      throw new IllegalStateException(
          "Endereço: " + cliente.getEndereco() + " já foi atribuido a outro cliente.");
    }

    return clienteRepository.save(cliente);
  }

  public Cliente remover(String cpf) {
    Optional<Cliente> clienteOptional = obterClienteSeExiste(cpf);

    this.validarClienteExiste(cpf);

    Cliente cliente = clienteOptional.get();
    clienteRepository.delete(cliente);

    return cliente;
  }

  private Optional<Cliente> obterClienteSeExiste(String cpf) {
    return clienteRepository.findById(cpf);
  }

  public Cliente alterar(Cliente cliente, String cpf) {
    Optional<Cliente> clienteOptional = obterClienteSeExiste(cpf);

    this.validarClienteExiste(cpf);

    Cliente clienteBD = clienteOptional.get();

    if (!cliente.getPrimeiroNome().isEmpty()) {
      clienteBD.setPrimeiroNome(cliente.getPrimeiroNome());
    }

    if (!cliente.getSobreNome().isEmpty()) {
      clienteBD.setSobreNome(cliente.getSobreNome());
    }

    if (!cliente.getEndereco().isEmpty()) {
      clienteBD.setEndereco(cliente.getEndereco());
    }

    if (cliente.getDataNascimento() != null) {
      clienteBD.setDataNascimento(cliente.getDataNascimento());
    }

    if (!cliente.getTelefone().isEmpty()) {
      clienteBD.setTelefone(cliente.getTelefone());
    }

    clienteBD = clienteRepository.save(clienteBD);

    return clienteBD;
  }

  private void validarClienteExiste(String cpf) {
    Optional<Cliente> cliente = clienteRepository.findById(cpf);
    if (cliente.isEmpty()) {
      throw new IllegalStateException("Não existe Cliente com o CPF: " + cpf);
    }
  }

  public List<Cliente> getClienteByPrimeiroNome(String primeiroNome) {
    List<Cliente> clientes = clienteRepository.findByPrimeiroNome(primeiroNome);
    if (CollectionUtils.isEmpty(clientes)) {
      throw new IllegalAccessError(
          "Nenhum Cliente com a primeiro nome: " + primeiroNome + " encontrado");
    }
    return clientes;
  }
}
