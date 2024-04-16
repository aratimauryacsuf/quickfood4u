package com.finalproject.quickfood4u.service;

import com.finalproject.quickfood4u.entity.GroceryList;
import com.finalproject.quickfood4u.entity.User;
import com.finalproject.quickfood4u.repository.GrocerListRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class GroceryListService {

    @Autowired
    private GrocerListRepository grocerListRepository;

    public GroceryListService(){

    }

    public GroceryList saveGrocery(GroceryList grocery){
        return grocerListRepository.save(grocery);
    }

    public List<GroceryList> getGroceryItems(String username){
        return grocerListRepository.findByUsername(username);
    }

    public void deleteIngredient(String ingredient, String username){
        grocerListRepository.deleteByIngredientAndUsername(ingredient, username);
    }

}
