import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Search() {

const [input, setInput] = useState("");
const navigate= useNavigate();

const submitHandler =(e) =>{
    e.preventDefault();
    navigate('/searched/'+input)
}

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch/>
        <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} />
      </div>
      
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  
  div {
    width: 100%;
    position: relative;

  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 2rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

// const FormStyle = styled.form`
//   margin: 0 auto; /* Center the form horizontally */
//   max-width: 50rem; /* Increase the maximum width of the form */

//   display: flex;
//   justify-content: center; /* Center the contents horizontally */
//   align-items: center; /* Center the contents vertically */

//   div {
//     max-width: 100%; /* Ensure the div takes up the full width */
//     display: flex;
//     justify-content: center; /* Center the contents horizontally */
//     align-items: center; /* Center the contents vertically */
//   }


//   input {
//     flex: 1; /* Take up remaining space */
//     border: none;
//     background: linear-gradient(35deg, #494949, #313131);
//     font-size: 1rem;
//     color: white;
//     padding: 1rem 2rem;
//     border-radius: 1rem;
//     outline: none;
//     box-sizing: border-box;
//   }

//   svg {
//     margin-right: 1rem; /* Add some margin to the right of the search icon */
//     color: white;
//   }
// `;

export default Search;
