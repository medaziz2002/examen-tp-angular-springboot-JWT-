package com.aziz.telephones.repos;
import com.aziz.telephones.entities.Type;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.aziz.telephones.entities.Telephone;


@RepositoryRestResource(path = "rest")
public interface TelephoneRepository extends JpaRepository<Telephone, Long> {

List<Telephone> findByNomTelephone(String nom);
List<Telephone> findByNomTelephoneContains(String nom); 
	
/*@Query("select t from Telephone t where t.nomTelephone like %?1 and t.prixTelephone > ?2")
List<Telephone> findByNomPrix (String nom, Double prix);*/

@Query("select t from Telephone t where t.nomTelephone like %:nom and t.prixTelephone > :prix")
List<Telephone> findByNomPrix (@Param("nom") String nom,@Param("prix") Double prix);
@Query("select t from Telephone t where t.type = ?1")
List<Telephone> findByType (Type type);
List<Telephone> findByTypeIdType(Long id);
List<Telephone> findByOrderByNomTelephoneAsc();
@Query("select t from Telephone t order by t.nomTelephone ASC, t.prixTelephone DESC")
List<Telephone> trierTelephonesNomsPrix ();

}
