package com.st22d.homework01.services;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.st22d.homework01.domain.Company;
import com.st22d.homework01.domain.Role;
import com.st22d.homework01.domain.UserDemo;
import com.st22d.homework01.repositories.CompanyRepository;
import com.st22d.homework01.repositories.RoleRepository;
import com.st22d.homework01.repositories.UserRepository;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final CompanyRepository companyRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, RoleRepository roleRepository,
            CompanyRepository companyRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.companyRepository = companyRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String handleHello() {
        return "Hello from UserService";
    }

    public List<UserDemo> getAllUsers() {
        return this.userRepository.findAll();
    }

    public UserDemo getUserById(long id) {
        return this.userRepository.findById(id);
    }

    public List<UserDemo> getAllUsersByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    // public UserDemo handleSaveUser(UserDemo user) {
    // UserDemo newUser = this.userRepository.save(user);
    // return newUser;
    // }
    public void handleSaveUser(UserDemo user) {
        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        userRepository.save(user);
    }

    public void handleDeleteUser(long id) {
        this.userRepository.deleteById(id);
    }

    public void assignRole(long userId, long roleId) {
        UserDemo user = userRepository.findById(userId);
        Role role = roleRepository.findById(roleId);
        user.getRoles().add(role);
        userRepository.save(user);
    }

    public void assignUserToCompany(long userId, long companyId) {
        UserDemo user = userRepository.findById(userId);
        Company company = companyRepository.findById(companyId);

        if (user != null && company != null) {
            user.setCompany(company);
            userRepository.save(user);
        }
    }

    public UserDemo findByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }
}
