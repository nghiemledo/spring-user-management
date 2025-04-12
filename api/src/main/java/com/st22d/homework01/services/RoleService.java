package com.st22d.homework01.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.st22d.homework01.domain.Role;
import com.st22d.homework01.repositories.RoleRepository;

@Service
public class RoleService {
    private final RoleRepository repository;

    public RoleService(RoleRepository repository) {
        this.repository = repository;
    }

    public List<Role> getAllRoles() {
        return this.repository.findAll();
    }

    public Role getRoleById(long id) {
        return this.repository.findById(id);
    }

    public List<Role> getAllRolesByName(String name) {
        return this.repository.findByName(name);
    }

    public Role handleSaveRole(Role role) {
        Role newRole = this.repository.save(role);
        return newRole;
    }

    public void handleDeleteRole(long id) {
        this.repository.deleteById(id);
    }
}
