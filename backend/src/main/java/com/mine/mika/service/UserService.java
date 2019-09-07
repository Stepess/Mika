package com.mine.mika.service;

import com.mine.mika.model.User;

import java.util.List;

public interface UserService {

    User getById(Long id);

    List<User> getAll();

    void save(User user);

    void delete(Long id);

}
