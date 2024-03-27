import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  
  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setDetails(detailData);
      console.log(detailData);
    };

    fetchDetails();
  }, [params.name]);

  return (
    <div className="container-fluid mt-4 p-5"> 
    <DetailWrapper>
      <ContentWrapper>
        <h2>{details.title}</h2>
        <ImageContainer>
          <Image src={details.image} alt="" />
        </ImageContainer>
      </ContentWrapper>
      <Info >
        <ButtonContainer>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonContainer>
        { activeTab === "instructions" && (
          <div className="container-fluid p-2 mt-2 my-2 ">
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>

        )}
        { activeTab === "ingredients" && (
        <ul>
          {details.extendedIngredients.map((ingredient) =>
          <li key={ingredient.id}>{ingredient.original}</li>)}
        </ul>
          )}
      </Info>
    </DetailWrapper>
    </div>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  // img {
  //   //  width: 80%; /* Adjust the width as needed */
  //   max-width: 100%; /* Ensure the image doesn't exceed its container's width */
  //   height: auto; /* Maintain aspect ratio */

  // }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* Take up remaining space */
  // justify-content: center;
  // align-items: center;
  // text-align: center;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const ButtonContainer = styled.div`
  display: flex; /* Use flexbox */
  align-items: center; /* Align buttons vertically in the container */
`;
const ImageContainer = styled.div`
width: 100%;
height: 100%;
  // max-width: 100%; /* Ensure the image doesn't exceed its container's width */
  // display: flex;
  // justify-content: center; /* Center the image horizontally */
`;
const Info = styled.div`
  margin-left: 5rem;
  // display: flex;
  flex: 1; /* Take up remaining space */
  overflow-y: auto; /* Add scrollbar if content exceeds height */
  h3 {
    font-size: 1rem; /* Adjust the font size as needed */
  }
`;

const Image = styled.img`
   max-width: 100%; /* Ensure the image doesn't exceed its container's width */
  height: auto; /* Maintain aspect ratio */
  width: 100%; /* Set the width to 100% of its container */
`;

export default Recipe;
