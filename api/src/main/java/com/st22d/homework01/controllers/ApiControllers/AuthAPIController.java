package com.st22d.homework01.controllers.ApiControllers;

import com.st22d.homework01.dtos.auth.AuthRequest;
import com.st22d.homework01.dtos.auth.RegisterRequest;
import com.st22d.homework01.models.ResponseObject;
import com.st22d.homework01.domain.Role;
import com.st22d.homework01.domain.UserDemo;
import com.st22d.homework01.repositories.UserRepository;
import com.st22d.homework01.services.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173", methods = { RequestMethod.GET, RequestMethod.POST,
        RequestMethod.OPTIONS })
public class AuthAPIController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }

    @GetMapping("/user/userProfile")
    public String userProfile() {
        return "Welcome to User Profile";
    }

    // Data test :
    // {
    // "username": "nghiemledo@gmail.com",
    // "password": "123456",
    // "fullName": "nghiem le do",
    // "phone": "0123456789",
    // "address": "26 Dong Da Street"
    // }

    @PostMapping("/register")
    public ResponseEntity<ResponseObject> processRegister(@RequestBody RegisterRequest registerRequest) {
        try {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            String encodedPassword = passwordEncoder.encode(registerRequest.getPassword());

            UserDemo user = new UserDemo();
            user.setEmail(registerRequest.getUsername());
            user.setPassword(encodedPassword);
            user.setFullName(registerRequest.getFullName());
            user.setPhone(registerRequest.getPhone());
            user.setAddress(registerRequest.getAddress());

            Set<Role> roles = new HashSet<>();
            if (registerRequest.getRoles() != null && !registerRequest.getRoles().isEmpty()) {
                roles.add(new Role(Long.parseLong(registerRequest.getRoles())));
            } else {
                roles.add(new Role("USER"));
            }
            user.setRoles(roles);

            userRepository.save(user);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Ok", "Register successfully", user));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ResponseObject("Not Ok", "Something went wrong", e.getMessage()));
        }
    }

    // Data test :
    // {
    // "username": "test@example.com",
    // "password": "123456"
    // }
    @PostMapping("/generateToken")
    public ResponseEntity<ResponseObject> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(
                            authRequest.getUsername(),
                            authRequest.getPassword()));

            if (authentication.isAuthenticated()) {
                String token = jwtService.generateToken(authRequest.getUsername());
                return ResponseEntity.status(HttpStatus.OK)
                        .body(new ResponseObject("Ok", "Generate token successfully", token));
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(new ResponseObject("Not Ok", "Something went wrong", "Authenticated failed"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ResponseObject("Not Ok", "Something went wrong", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseObject> login(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(
                            authRequest.getUsername(),
                            authRequest.getPassword()));

            if (authentication.isAuthenticated()) {
                String token = jwtService.generateToken(authRequest.getUsername());
                return ResponseEntity.status(HttpStatus.OK)
                        .body(new ResponseObject("Ok", "Login successfully", token));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new ResponseObject("Not Ok", "Login failed", "Invalid username or password"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ResponseObject("Not Ok", "Something went wrong", e.getMessage()));
        }
    }
}
