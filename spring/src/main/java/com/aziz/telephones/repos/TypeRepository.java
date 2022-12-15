package com.aziz.telephones.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.aziz.telephones.entities.Type;
@RepositoryRestResource(path = "type")
@CrossOrigin(origins="http://localhost:4200/") //pour autoriser angular 
public interface TypeRepository extends JpaRepository<Type,Long>{
	
}
