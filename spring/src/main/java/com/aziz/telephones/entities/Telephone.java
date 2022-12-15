package com.aziz.telephones.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
@Entity
public class Telephone {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long idTelephone;
	private String nomTelephone;
	private String societe;
	private Double prixTelephone;
	private Date dateCreation;
	@ManyToOne
	private Type type;
	
	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public Telephone() {
		super();
	}
	
	public String getSociete() {
		return societe;
	}

	public void setSociete(String societe) {
		this.societe = societe;
	}

	public Telephone(Date dateCreation,String nomTelephone ,Double prixTelephone, String societe) {
		super();
		this.nomTelephone = nomTelephone;
		this.societe=societe;
		this.prixTelephone = prixTelephone;
		this.dateCreation = dateCreation;
	}
	
	@Override
	public String toString() {
		return "Telephone [idTelephone=" + idTelephone + ", nomTelephone=" + nomTelephone + ", societe=" + societe
				+ ", prixTelephone=" + prixTelephone + ", dateCreation=" + dateCreation + "]";
	}

	

	public Long getIdTelephone() {
		return idTelephone;
	}
	public void setIdTelephone(Long idTelephone) {
		this.idTelephone = idTelephone;
	}
	public String getNomTelephone() {
		return nomTelephone;
	}
	public void setNomTelephone(String nomTelephone) {
		this.nomTelephone = nomTelephone;
	}
	public Double getPrixTelephone() {
		return prixTelephone;
	}
	public void setPrixTelephone(Double prixTelephone) {
		this.prixTelephone = prixTelephone;
	}
	public Date getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}
	
	
	
	
}
