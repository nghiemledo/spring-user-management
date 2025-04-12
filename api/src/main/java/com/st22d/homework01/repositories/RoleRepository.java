package com.st22d.homework01.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.st22d.homework01.domain.Role;

import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role save(Role role);

    void deleteById(long id);

    List<Role> findByName(String name);

    List<Role> findAll();

    Role findById(long id);
    
    Role findRoleByName(String name);
}
