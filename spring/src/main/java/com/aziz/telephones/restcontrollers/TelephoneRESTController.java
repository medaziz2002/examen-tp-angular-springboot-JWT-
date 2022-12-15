package com.aziz.telephones.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aziz.telephones.service.TelephoneService;
import com.aziz.telephones.entities.Telephone;
@RestController
@RequestMapping("/api")
@CrossOrigin
public class TelephoneRESTController {
   @Autowired
	TelephoneService  telephoneService;
   
   @RequestMapping(path="/all",method=RequestMethod.GET)
  public List<Telephone> getAllTelephones()
   {
	   return telephoneService.getAllTelephones();
   }
   
 
   
   @RequestMapping(value="/{id}",method = RequestMethod.GET)
   public Telephone	 getTelephoneById(@PathVariable("id") Long id) {
   return telephoneService.getTelephone(id);
    }
   @RequestMapping(method = RequestMethod.POST)
   public Telephone createTelephone(@RequestBody Telephone telephone) {
   return telephoneService.saveTelephone(telephone);
   }
   
   @RequestMapping(method = RequestMethod.PUT)
   public Telephone updateTelephone(@RequestBody Telephone telephone) {
   return telephoneService.updateTelephone(telephone);
   }
   @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
   public void deleteTelephone(@PathVariable("id") Long id)
   {
   telephoneService.deleteTelephoneById(id);
   }
   @RequestMapping(value="/tele/{idType}",method = RequestMethod.GET)
   public List<Telephone> getTelephonesByCatType(@PathVariable("idType") Long idType) {
   return telephoneService.findByTypeIdType(idType);
   }
   @RequestMapping(value="/teleByName/{nom}",method = RequestMethod.GET)
   public List<Telephone> findByNomTelephoneContains(@PathVariable("nom") String nom) {
   return telephoneService.findByNomTelephoneContains(nom);
   }
   
}
