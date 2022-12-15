package com.aziz.telephones.entities;

import org.springframework.data.rest.core.config.Projection;
public interface TelephoneProjection {

	
	@Projection(name = "nomTele", types = { Telephone.class })
	public interface telephoneProjection {
	public String getNomTelephone();
	
	
	}
}