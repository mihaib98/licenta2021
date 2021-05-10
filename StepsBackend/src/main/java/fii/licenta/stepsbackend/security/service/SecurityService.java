package fii.licenta.stepsbackend.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import fii.licenta.stepsbackend.commons.dao.User;
import fii.licenta.stepsbackend.commons.repository.UserRepository;
import fii.licenta.stepsbackend.commons.service.UserService;

@Service
public class SecurityService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserService userService;

	public void verifyCurrentUserPassword(String passwordInClearText) {
		User user = this.userService.getCurrentUser();
		if (!passwordEncoder.matches(passwordInClearText, user.getPassword())) {
			throw new RuntimeException("wrong_old_password");
		}
	}

	protected String encodePassword(String passwordInClearText) {
		return passwordEncoder.encode(passwordInClearText);
	}

	/**
	 * If the user have password in clear text specified we encode it and set the
	 * password with the encoded value.
	 */
	private void encodePasswordInformations(User user) {
		if (StringUtils.hasText(user.getPassword()))
			user.setPassword(encodePassword(user.getPassword()));
	}
}
