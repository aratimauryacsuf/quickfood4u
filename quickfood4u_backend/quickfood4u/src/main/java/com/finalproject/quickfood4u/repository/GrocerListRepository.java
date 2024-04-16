package com.finalproject.quickfood4u.repository;

import com.finalproject.quickfood4u.entity.GroceryList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GrocerListRepository extends JpaRepository<GroceryList, Long> {

    List<GroceryList> findByUsername(String username);

    void deleteByIngredientAndUsername(String ingredient, String username);

    GroceryList findByIngredientAndUsername(String ingredient, String username);
}
