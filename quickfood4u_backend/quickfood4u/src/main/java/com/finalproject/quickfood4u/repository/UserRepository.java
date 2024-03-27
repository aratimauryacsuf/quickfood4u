package com.finalproject.quickfood4u.repository;

import com.finalproject.quickfood4u.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
