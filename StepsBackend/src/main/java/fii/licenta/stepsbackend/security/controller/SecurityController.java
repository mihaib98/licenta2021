package fii.licenta.stepsbackend.security.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fii.licenta.stepsbackend.security.dao.UserDetailsImpl;
import fii.licenta.stepsbackend.security.dto.AuthenticationRecord;
import fii.licenta.stepsbackend.security.dto.AuthenticationResponseRecord;
import fii.licenta.stepsbackend.security.jwt.JwtUtils;
import fii.licenta.stepsbackend.security.service.SecurityService;

@RestController
@RequestMapping("/security")
public class SecurityController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired	
	private JwtUtils jwtUtils;

	@Autowired
	private SecurityService securityService;

	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticate(@Valid @RequestBody AuthenticationRecord loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		return ResponseEntity.ok(new AuthenticationResponseRecord(jwt, userDetails.getId(), userDetails.getUsername()));

	}

	@GetMapping("/authenticate")
	public ResponseEntity<?> getAuthenticated() {
		UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication()
				.getPrincipal();
		
		return ResponseEntity
				.ok(new AuthenticationResponseRecord(null, userDetails.getId(), userDetails.getUsername()));
	}

}
