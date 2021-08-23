import React,{useState} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import logo from "../img/logo.svg"

import {fetchSearch} from "../actions/gamesAction";
import {useDispatch} from "react-redux";
import {fadeIn} from "../animations";

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const handleInput = (e) => {
        setTextInput(e.target.value);
    };
    const handleSubmit = (e) => {
        dispatch(fetchSearch(textInput));
        setTextInput("");
        e.preventDefault();
    };

    const handleClearSearched = () => {
        dispatch({
            type:"CLEAR_SEARCHED"});
    };

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show" >
            <StyledLogo onClick={handleClearSearched}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </StyledLogo>
            <form onSubmit={handleSubmit} className="search">
                <input onChange={handleInput} value={textInput} type="text"/>
                <button onClick={handleSubmit} type="submit">Search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  @media (max-width: 500px){
    padding: 1rem 1rem;
  }
  input{
    width: 30%;
    font-size: 1.5rem;
    padding: .5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
    outline: none;
    font-weight: bold;
    font-family: "montserrant", sans-serif;
  }
  button{
    font-size: 1.5rem;
    border: none;
    padding: .5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
  }
  @media (max-width:1000px ){
    input{
      width: 50%;
    }
    button{
      padding: .5rem 1rem;
    }
  }
  @media (max-width: 450px){
    button{
      font-size: 1rem;
    };
    input{
      font-size: 1rem;
    }
  }
    
`;
const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img{
    height: 2rem;
    width: 2rem;
  }
    
`;

export default Nav;
