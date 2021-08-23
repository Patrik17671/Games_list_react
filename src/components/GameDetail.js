import React from 'react';

import styled from "styled-components";
import {motion} from "framer-motion";

import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {smallImage} from "../util";
//images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import ps5 from "../img/logo5.svg";
import xb from "../img/X_Box_One_logo.svg"

const GameDetail = () => {
    const history = useHistory();
    //Exit detail
    const handleExitDetail = (e) => {
       const element = e.target;
       if(element.classList.contains("shadow")){
           document.body.style.overflow = "auto";
            history.push("/");
       }
    };
    //get platform images
    const getPlatform = (platform) => {
        switch (platform){
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            case "PlayStation 5":
                return ps5;
            case "Xbox Series S/X":
                return xb;
            default:
                return gamepad;
        }
    }

    //Data
    const {screen,game,isLoading} = useSelector((state) => state.detail);
    return (
        <>
        {!isLoading && (
        <StyledCardShadow className="shadow" onClick={handleExitDetail}>
            <StyledDetail>
                <StyledStats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <StyledInfo>
                        <h3>Platforms</h3>
                        <StyledPlatforms>
                            {game.platforms.map(data => (
                                <img
                                    key={data.platform.id}
                                    src={getPlatform(data.platform.name)}
                                    alt={data.platform.name}
                                    height="42px"
                                />
                            ))}
                        </StyledPlatforms>
                    </StyledInfo>
                </StyledStats>
                <StyledMedia>
                    <img src={smallImage(game.background_image,1280)} alt="image" />
                </StyledMedia>
                <StyledDescription>
                    <p>{game.description_raw}</p>
                </StyledDescription>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={smallImage(screen.image,1280)} key={screen.id} alt="" />
                    ))}
                </div>
            </StyledDetail>
        </StyledCardShadow>
         )}
        </>
    );
};


const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar{
    width: .5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track{
     background: white;
   }
`;
const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img{
    width: 100%;
  }
  @media ( max-width: 1200px){
    width: 100%;
    left: 0;
    border-radius: 0;
  }
  @media (max-width: 1000px){
    padding: 1rem 2rem;
  }
  @media (max-width: 450px){
    padding: 0.5rem 0.5rem;
  }

`;
const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledInfo = styled(motion.div)`
  text-align: center;
`;
const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img{
    margin-left: 3rem;
  }
  @media ( max-width: 1300px){
    img{
      height: 32px;
    }
  }
  @media ( max-width: 1000px){
    //height: auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit,minmax(50px, 1fr));
    img{
      margin: 0;
    }
  }
`;
const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img{
    width: 100%;
  }
`;
const StyledDescription = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;
