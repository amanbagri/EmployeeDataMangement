package com.amanbagri.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amanbagri.exception.ResourceNotfound;
import com.amanbagri.model.Employee;
import com.amanbagri.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController

public class LoginController {

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@PostMapping("/login")
	public ResponseEntity<Employee> processLogin(@RequestBody Map<String, String> requestBody) {

	  String email = requestBody.get("email");
	  String password = requestBody.get("password");
		Employee employee = employeeRepository.findByEmail(email)
				.orElseThrow(() -> new ResourceNotfound("Employee not found with email :" + email));

		// Check if the password is valid and return appropriate response
		System.out.println(employee.getPassword());
		if (passwordEncoder.matches(password,employee.getPassword())) {
			return ResponseEntity.ok(employee);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}
}
