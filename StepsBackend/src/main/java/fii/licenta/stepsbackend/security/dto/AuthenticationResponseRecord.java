package fii.licenta.stepsbackend.security.dto;

public class AuthenticationResponseRecord {
	private String token;
	private String type = "Bearer";
	private Integer id;
	private String username;

	public AuthenticationResponseRecord(String token, Integer id, String username) {
		this.token = token;
		this.id = id;
		this.username = username;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
}
