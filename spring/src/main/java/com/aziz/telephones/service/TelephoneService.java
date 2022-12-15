package com.aziz.telephones.service;

import com.aziz.telephones.entities.Type;
import java.util.List;
import com.aziz.telephones.entities.Telephone;
public interface TelephoneService {
	Telephone saveTelephone(Telephone t);
	Telephone updateTelephone(Telephone t);
	void deleteTelephone(Telephone t);
	 void deleteTelephoneById(Long id);
	Telephone getTelephone(Long id);
	List<Telephone> getAllTelephones();
	List<Telephone> findByNomTelephone(String nom);
	List<Telephone> findByNomTelephoneContains(String nom);
	List<Telephone> findByNomPrix (String nom, Double prix);
	List<Telephone> findByType (Type type);
	List<Telephone> findByTypeIdType(Long id);
	List<Telephone> findByOrderByNomTelephoneAsc();
	List<Telephone> trierTelephonesNomsPrix();

}
