package fii.licenta.stepsbackend.commons.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import fii.licenta.stepsbackend.commons.dao.User;
import fii.licenta.stepsbackend.commons.repository.UserRepository;
import fii.licenta.stepsbackend.security.dao.UserDetailsImpl;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public User getCurrentUser() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth == null || auth instanceof AnonymousAuthenticationToken) {
			return null;
		}
		UserDetailsImpl userDetails = (UserDetailsImpl) auth.getPrincipal();
		User currentUser = userRepository.findById(userDetails.getId()).orElse(null);
		return currentUser;
	}
}
