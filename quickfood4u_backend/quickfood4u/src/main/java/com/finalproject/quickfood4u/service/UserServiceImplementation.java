package com.finalproject.quickfood4u.service;
import com.finalproject.quickfood4u.entity.User;
import com.finalproject.quickfood4u.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class UserServiceImplementation implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public UserServiceImplementation(UserRepository userRepository) {
        this.userRepository=userRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userData = userRepository.findByUsername(username);
        User user = userData.get();
        System.out.println(user);

        if(user==null) {
            throw new UsernameNotFoundException("User not found with this email"+username);

        }


        System.out.println("Loaded user: " + user.getEmail());
        List<GrantedAuthority> authorities = new ArrayList<>();
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                authorities);
    }
}
