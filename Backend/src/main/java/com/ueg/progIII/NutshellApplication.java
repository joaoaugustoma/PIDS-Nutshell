package com.ueg.progIII;

import com.ueg.progIII.model.Cliente;
import com.ueg.progIII.repository.ClienteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Calendar;
import java.util.Date;

@SpringBootApplication
public class NutshellApplication {

	public static void main(String[] args) {
		SpringApplication.run(NutshellApplication.class, args);
	}

}
