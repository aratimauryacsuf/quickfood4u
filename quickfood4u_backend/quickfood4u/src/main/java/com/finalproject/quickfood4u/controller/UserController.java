package com.finalproject.quickfood4u.controller;

import com.finalproject.quickfood4u.config.JwtProvider;
import com.finalproject.quickfood4u.entity.User;
import com.finalproject.quickfood4u.repository.UserRepository;
import com.finalproject.quickfood4u.response.AuthResponse;
import com.finalproject.quickfood4u.service.UserService;
import com.finalproject.quickfood4u.service.UserServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins ="http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

   @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserServiceImplementation customUserDetails;

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user){

        User createdUSer = new User();
        createdUSer.setName(user.getName());
        createdUSer.setEmail(user.getEmail());
        createdUSer.setUsername(user.getUsername());
        createdUSer.setPassword(passwordEncoder.encode(user.getPassword()));

        return userService.registerUser(createdUSer);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> signin(@RequestBody User loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        System.out.println(username+"-------"+password);

        Authentication authentication = authenticate(username,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = JwtProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse();

        authResponse.setMessage("Login success");
        authResponse.setJwt(token);
        authResponse.setStatus(true);

        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }




    private Authentication authenticate(String username, String password) {

        System.out.println(username+"---++----"+password);

        UserDetails userDetails = customUserDetails.loadUserByUsername(username);


        System.out.println("Sig in in user details"+ userDetails);

        if(userDetails == null) {
            System.out.println("Sign in details - null" + userDetails);

            throw new BadCredentialsException("Invalid username and password");
        }

       if(!passwordEncoder.matches(password,userDetails.getPassword())) {
            System.out.println("Sign in userDetails - password mismatch"+userDetails);

            throw new BadCredentialsException("Invalid password");

      }


        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());

    }


}
