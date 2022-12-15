package com.aziz.users.restController;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.aziz.users.entities.User;
import com.aziz.users.service.UserService;


@RestController
@CrossOrigin(origins="*")
public class UserRESTController {

	
	@Autowired
	UserService userService;
	
	@RequestMapping(path="all",method=RequestMethod.GET)
	public List<User> getAllUsers()
	{
		return userService.findAllUsers();
	}
	
	
}
