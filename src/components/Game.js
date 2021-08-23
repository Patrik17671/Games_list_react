import React from 'react';

import styled from "styled-components";
import {motion} from "framer-motion";

import {useDispatch} from "react-redux";
import {loadDetail} from "../actions/detailAction";
import {Link} from "react-router-dom";
import {smallImage} from "../util";
import {popIn} from "../animations";

const Game = ({name,released,image,id}) => {
    //Load detail handler
    const dispatch = useDispatch();
    const handleLoadDetail = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id))
    }

    return (
        <StyledGame variants={popIn} initial="hidden" animate="show" onClick={handleLoadDetail}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={smallImage(image,640)} alt={name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0,0,0,.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
