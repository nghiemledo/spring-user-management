package com.st22d.homework01.controllers.ApiControllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.st22d.homework01.domain.UserDemo;
import com.st22d.homework01.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173", methods = { RequestMethod.GET, RequestMethod.POST,
        RequestMethod.OPTIONS, RequestMethod.DELETE, RequestMethod.PUT })
public class UserAPIController {
    private final UserService service;

    public UserAPIController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<UserDemo>> getAllUsers() {
        List<UserDemo> users = service.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDemo> getUserById(@PathVariable Long id) {
        UserDemo user = service.getUserById(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(user);
    }

    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody UserDemo userDemo) {
        if (userDemo == null) {
            return ResponseEntity.badRequest().body("User data is not valid");
        }
        service.handleSaveUser(userDemo);
        return ResponseEntity.status(HttpStatus.CREATED).body("Create user successfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody UserDemo userDemo) {
        UserDemo userFind = service.getUserById(id);
        if (userFind == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with ID: " + id);
        } else {
            userFind.setEmail(userDemo.getEmail());
            userFind.setAddress(userDemo.getAddress());
            userFind.setFullName(userDemo.getFullName());
            userFind.setPhone(userDemo.getPhone());
            this.service.handleSaveUser(userFind);
        }
        return ResponseEntity.ok("Update user successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        UserDemo userFind = service.getUserById(id);
        if (userFind == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with ID: " + id);
        }

        service.handleDeleteUser(id);
        return ResponseEntity.ok("Delete user successfully");
    }
}
