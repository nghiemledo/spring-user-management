package com.st22d.homework01.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.st22d.homework01.domain.UserDemo;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserDemo, Long> {
    UserDemo save(UserDemo user);

    void deleteById(long id);

    // User findByEmail(String email);
    List<UserDemo> findByEmail(String email);

    List<UserDemo> findAll();

    UserDemo findById(long id);
    
    UserDemo findUserByEmail(String email);

    // List<User> findByEmailAndAddress(String email, String address);
}
