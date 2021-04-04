package fii.licenta.stepsbackend.security.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fii.licenta.stepsbackend.security.dto.AuthenticationRecord;

@RestController
@RequestMapping("/test")
public class TestController {
	@GetMapping()
	public ResponseEntity<?> smth(){
		AuthenticationRecord a = new AuthenticationRecord();
		return ResponseEntity.ok(a);
	}
}
