import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components'; 
// import {Link,  useParams} from 'react-router-dom';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);

    let params = useParams();

    const getSearched = async (name) =>{
        
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=9`);
    
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);

        };

        useEffect(() => {
            getSearched(params.search);
        },[params.search]);



  return (
   <Grid>
    {searchedRecipes.map((item) => {
        return(
            <card key={item.id}>
              <Link to={"/recipe/"+item.id}>
                <img src={item.image} alt=""/>
                <h4>{item.title}</h4>
                </Link>

            </card>
        )
    })}
   </Grid>
  )
}

const Grid = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
 grid-gap: 3rem;
`;

// const Card =styled.div`
// // height: 15rem;
// //   width: 15rem;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   position: relative;
// //   border-radius: 2rem;

//   img {
//     width: 100%;
//     // height: 100%;
//     // object-fit: cover;
//     border-radius: 2rem;
//     // position: absolute;
//     // top: 0;
//     // left: 0;
//   }

//   h4 {
//     text-align: center;
//     padding: 1rem;
//     // margin: 0; /* Reset margin to remove any default margin */
//     // background-color: rgba(0, 0, 0, 0.5); /* Optional: Add a semi-transparent background */
//     // color: white;
//     // width: 100%;
//     // position: absolute;
//     // bottom: 0;
//     // left: 0;
//     // border-radius: 0 0 2rem 2rem;
//   }
// `;


export default Searched