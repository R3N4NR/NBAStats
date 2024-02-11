import styles from "./home.module.scss";
import Helmet from "react-helmet";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { teams } from "../../assets/teams-logo";

export const Home = () => {
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    const loadGames = async (endpoint) => {
      const options = {
        method: "GET",
        url: `https://v2.nba.api-sports.io${endpoint}/`,
        params: { date: '2024-02-10' },
        headers: {
          "X-RapidAPI-Key": "bfbb0d0938f82376449382812ca2e42a",
          "X-RapidAPI-Host": "v2.nba.api-sports.io",
        },
      };

      try {
        const response = await api.request(options);
        console.log(response.data.response);
        setGames(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    loadGames("/games");
  }, []);

  const loadTeamLogo = (teamName) => {
    for (const team of teams) {
      if (teamName === team.name) {
        console.log(team.picture_path)
        return team.picture_path;
      }
    }
    return null; // Se não encontrar o logotipo, retorne null ou algum valor padrão
  };

  return (
    <>
      <Helmet>
        <title>NBA - Home</title>
      </Helmet>
      <div className={styles.homeBody}>
        <div className={styles.dashboard}>
          <h1>Games In Live</h1>
          
          {games ? (
            <div className={styles.games}>
              {games.map((game, index) => (
                <div key={index} className={styles.gameInfo}>
                  <div className={styles.title}>
                    <img src={loadTeamLogo(game.teams.home.nickname)} alt="Home Team Logo"width="100px" height="100px"/>
                    <span>{game.teams.home.nickname}</span>
                    <strong>X</strong>
                    <img src={loadTeamLogo(game.teams.visitors.nickname)} alt="Home Team Logo" width="100px"/>
                    <span>{game.teams.visitors.nickname}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>Não há jogos</h1>
          )}
        </div>
      </div>
    </>
  );
};
