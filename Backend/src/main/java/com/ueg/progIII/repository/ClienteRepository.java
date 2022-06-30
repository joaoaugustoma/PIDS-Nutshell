package com.ueg.progIII.repository;

import com.ueg.progIII.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, String> {
    List<Cliente> findByPrimeiroNome(String primeiroNome);

    //JPQL
    @Query("" +
            "SELECT CASE WHEN COUNT(c) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Cliente c " +
            "WHERE c.endereco = ?1"
    )
    Boolean exiteEndereco(String endereco);
}
