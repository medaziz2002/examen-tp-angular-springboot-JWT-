package com.aziz.telephones.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.aziz.telephones.entities.Telephone;
import com.aziz.telephones.entities.Type;
import com.aziz.telephones.repos.TelephoneRepository;
@Service
public  class TelephoneServiceImpl implements TelephoneService{

	
	@Autowired
	TelephoneRepository telephoneRepository;
	
	
	@Override
	public Telephone saveTelephone(Telephone t) {
		
		return telephoneRepository.save(t);
	}

	@Override
	public Telephone updateTelephone(Telephone t) {
		return telephoneRepository.save(t);
	}

	@Override
	public void deleteTelephone(Telephone t) {
		telephoneRepository.delete(t);
		
	}

	@Override
	public void deleteTelephoneById(Long id) {
		
		telephoneRepository.deleteById(id);
	}

	@Override
	public Telephone getTelephone(Long id) {
		return telephoneRepository.findById(id).get();
	}

	@Override
	public List<Telephone> getAllTelephones() {
	return telephoneRepository.findAll();
	}

	
	
	@Override
	public List<Telephone> findByNomTelephone(String nom) {
		
		return telephoneRepository.findByNomTelephone(nom);
	}

	@Override
	public List<Telephone> findByNomTelephoneContains(String nom) {
		return telephoneRepository.findByNomTelephoneContains(nom);
	}

	@Override
	public List<Telephone> findByNomPrix(String nom, Double prix) {
		return telephoneRepository.findByNomPrix(nom, prix);
	}

	@Override
	public List<Telephone> findByType(Type type) {
		return telephoneRepository.findByType(type);
	}

	@Override
	public List<Telephone> findByTypeIdType(Long id) {
		return telephoneRepository.findByTypeIdType(id);

	}

	@Override
	public List<Telephone> findByOrderByNomTelephoneAsc() {
		return telephoneRepository.findByOrderByNomTelephoneAsc();
	}

	@Override
	public List<Telephone> trierTelephonesNomsPrix() {
		return telephoneRepository.trierTelephonesNomsPrix();
	}

}
