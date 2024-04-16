package com.finalproject.quickfood4u.controller;

import com.finalproject.quickfood4u.entity.GroceryList;
import com.finalproject.quickfood4u.entity.User;
import com.finalproject.quickfood4u.service.GroceryListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.PrivateKey;
import java.util.List;
import java.util.PrimitiveIterator;

@RestController
@RequestMapping("/api/grocery")

public class GroceryListController {
    @Autowired
    private GroceryListService groceryListService;

    @GetMapping("/grocerylist")
    public List<GroceryList> getGroceryList(@RequestParam("username") String username){

        return groceryListService.getGroceryItems(username);
    }

    @PostMapping("/addItem")
    public GroceryList saveGroceryItem(@RequestBody GroceryList grocery){
        return groceryListService.saveGrocery(grocery);
    }

    @DeleteMapping("/deleteitem")
    public ResponseEntity<?> deleteGroceryItemByUsernameAndIngredient(
            @RequestParam("username") String username,
            @RequestParam("ingredient") String ingredient) {
        groceryListService.deleteIngredient(ingredient, username);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }


}
