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
        return (User) Hibernate.unproxy(user); //TODO investigate exception if unproxy is removed
    }

    //Todo: investigate better uproach
    @PutMapping("/users/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody User user) {
        User userFromBd = service.getById(id);
        userFromBd.setUsername(user.getUsername());
        userFromBd.setEmail(user.getEmail());
        userFromBd.setFirstName(user.getFirstName());
        service.save(userFromBd);
    }

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@RequestBody User user) {
        service.save(user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        service.delete(id);
    }

}
