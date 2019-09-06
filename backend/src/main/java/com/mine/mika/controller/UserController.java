package com.mine.mika.controller;

import com.mine.mika.model.User;
import com.mine.mika.service.UserService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return service.getAll();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        User user = service.getById(id);
        return (User) Hibernate.unproxy(user); //TODO investigate
    }

    @PutMapping("/users")
    public void updateUser(@RequestBody User user) {
        service.save(user);
    }

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@RequestBody User user) {
        service.save(user);
    }

}
