package com.aziz.telephones;

import com.aziz.telephones.entities.Type;
import java.util.Date;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.aziz.telephones.entities.Telephone;
import com.aziz.telephones.repos.TelephoneRepository;

@SpringBootTest
class Telephones2ApplicationTests {

	@Autowired
	private TelephoneRepository telephoneRepository;
	
	@Test
	public void testCreateTelephone() {
	Telephone tele = new Telephone (new Date(),"iphone16",1574.6,"apple");
	telephoneRepository.save(tele);
	}
	@Test
	public void testFindTelephone()
	{
	Telephone t = telephoneRepository.findById(8L).get();
	System.out.println(t);
	}
	
	@Test
	public void testUpdateTelephone()
	{
	Telephone t = telephoneRepository.findById(12L).get();
	t.setPrixTelephone(1000.0);
	telephoneRepository.save(t);
	}
	

	@Test
	public void testDeleteTelephone()
	{
	telephoneRepository.deleteById(15L);;
	}
	@Test
	public void testListerTousTelephones()
	{
	List<Telephone> tele = telephoneRepository.findAll();
	for (Telephone t : tele)
	{
	System.out.println(t);
	}
	}

	
	@Test
	public void testFindByNomTelephone()
	{
	List<Telephone> tele = telephoneRepository.findByNomTelephone("Iphone12");
	for (Telephone t : tele)
	{
	System.out.println(t);
	}
	}

	@Test
	public void testFindByNomTelephoneContains ()
	{
	List<Telephone> tele=telephoneRepository.findByNomTelephoneContains("n");
	for (Telephone t : tele)
	{
	System.out.println(t);
	} 
	}
	
	@Test
	public void testfindByNomPrix()
	{
	List<Telephone> tele = telephoneRepository.findByNomPrix("Iphone12", 1000.0);
	for (Telephone t : tele)
	{
	System.out.println(t);
	}
	}
	
	@Test
	public void testfindByType()
	{
	Type ty = new Type();
	ty.setIdType(1L);
	List<Telephone> tele = telephoneRepository.findByType(ty);
	for (Telephone t : tele)
	{
	System.out.println(t);
	}
	}
	@Test
	public void findByTypeIdType()
	{
	List<Telephone> tele = telephoneRepository.findByTypeIdType(1L);
	for (Telephone t : tele)
	{
	System.out.println(t);
	}
	 }
	
	@Test
	public void testfindByOrderByNomTelephoneAsc()
	{
	List<Telephone> tele =
	telephoneRepository.findByOrderByNomTelephoneAsc();
	for (Telephone t : tele)
	{
	System.out.println(t);
	}
	}
	
	@Test
	public void testTrierTelephonesNomsPrix()
	{
	List<Telephone> tele = telephoneRepository.trierTelephonesNomsPrix();
	for (Telephone t : tele)
	{
	System.out.println(t);
	}
	}

	

	
}
