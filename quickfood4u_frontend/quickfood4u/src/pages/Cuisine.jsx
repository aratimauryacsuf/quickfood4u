import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link,  useParams} from 'react-router-dom';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);

    let params = useParams();

    const getCuisine = async (name) =>{
        
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`);
    
        const recipes = await data.json();

        setCuisine(recipes.results);

        }
useEffect(() =>{
    getCuisine(params.type);
    console.log(params);
},[params.type, params]);

  return (
   <Grid 
    animate={{opacity: 1}} 
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    
   >
    {cuisine.map((item) => {
        return(
            <Card key={item.id}>
              <Link to={"/recipe/"+item.id}>
                <img src ={item.image} alt="" />
                <h4>{item.title}</h4>
                </Link>
            </Card>
        );
    })}
   </Grid>
  )
}

const Grid = styled(motion.div)`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
 grid-gap: 3rem;
`;

const Card =styled.div`
height: 15rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  h4 {
    text-align: center;
    padding: 1rem;
    margin: 0; /* Reset margin to remove any default margin */
    background-color: rgba(0, 0, 0, 0.5); /* Optional: Add a semi-transparent background */
    color: white;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 2rem 2rem;
  }
`;

// Origina as per video
// const Card =styled.div`
// height: 15rem;
// width: 15rem;

// img{
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 2rem;
// }

// a {
//     text-decoration: none;
// }

// h4 {
//     position: absolute;
//     text-align: center;
//     padding: 1rem;
    
    
// }
// `;

export default Cuisine