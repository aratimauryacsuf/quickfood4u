package com.finalproject.quickfood4u.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "grocery_list")
public class GroceryList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="ingredient")
    private String ingredient;

    @Column(name ="username")
    private String username;

}
