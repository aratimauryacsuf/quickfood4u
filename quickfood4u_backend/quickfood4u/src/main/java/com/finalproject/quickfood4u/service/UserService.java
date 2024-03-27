package com.finalproject.quickfood4u.service;

import com.finalproject.quickfood4u.entity.User;
import com.finalproject.quickfood4u.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserService(){

    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User registerUser(User user){
        return userRepository.save(user);
    }

}
