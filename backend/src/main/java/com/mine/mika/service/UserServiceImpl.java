package com.mine.mika.service;

import com.mine.mika.data.UserRepository;
import com.mine.mika.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    @Autowired
    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public User getById(Long id) {
        return repository.getOne(id);
    }

    @Override
    public List<User> getAll() {
        return repository.findAll();
    }

    @Override
    public void save(User user) {
        repository.save(user);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
