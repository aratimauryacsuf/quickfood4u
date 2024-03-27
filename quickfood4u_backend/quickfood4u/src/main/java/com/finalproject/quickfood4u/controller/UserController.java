package com.finalproject.quickfood4u.controller;

import com.finalproject.quickfood4u.entity.User;
import com.finalproject.quickfood4u.repository.UserRepository;
import com.finalproject.quickfood4u.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins ="http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user){
        return userService.registerUser(user);
    }

}
