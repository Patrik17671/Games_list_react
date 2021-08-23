import React, {useEffect} from "react";
import GameDetail from "../components/GameDetail";

import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";

import Game from "../components/Game";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";
import {fadeIn} from "../animations";


const Home = () => {
    //get current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    //Fetch games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    },[dispatch]);
    //get that data back
    const {popular, newGames, upcoming, searched} = useSelector((state) => state.games);

    return (
        <StyledGameList variants={fadeIn} initial="hidden" animate="show" >
            {pathId && <GameDetail pathId={pathId}/>}
            {searched.length ? (
            <div className="searched">
                <h2>Searched Games</h2>
                <StyledGames>
                    {searched.map(game => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </StyledGames>
            </div>
            ) : ""}
            <h2>Upcoming Games</h2>
            <StyledGames>
                {upcoming.map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </StyledGames>

            <h2>Popular Games</h2>
            <StyledGames>
                {popular.map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </StyledGames>

            <h2>New Games</h2>
            <StyledGames>
                {newGames.map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </StyledGames>
        </StyledGameList>
    );
};

const StyledGameList = styled(motion.div)`
  padding: 0 5rem;
  h2{
    padding: 5rem 0;
  }
  @media ( max-width: 1300px){
    padding: 0 2rem;
    h2{
      padding: 2rem 0;
    }
  }
  @media (max-width: 450px){
    padding: 0 0.5rem;
    h2{
      font-size: 1.5rem;
    }
  }
`;
const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(400px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export default Home;
