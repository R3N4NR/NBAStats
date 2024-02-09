import styles from "./home.module.scss";
import Helmet from "react-helmet";
import api from "../../services/api";
import { useEffect, useState } from "react";
// import { teams } from "../../assets/teams-logo";
export const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const loadGames = async (endpoint) => {
      const options = {
        method: "GET",
        url: `https://v2.nba.api-sports.io${endpoint}/`,
        params: { live: "all" },
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

  return (
    <>
      <Helmet>
        <title>NBA - Home</title>
      </Helmet>
      <div className={styles.homeBody}>
        <div className={styles.dashboard}>
          <h1>Games In Live</h1>
          {games === 0 ? (
          <div className={styles.games}>
            {games.map((game) => (
              <div className={styles.gameInfo}>
                
                <div className={styles.title}>
                  <span>{game.teams.home.nickname}</span>
                  <strong>X</strong>
                  <span>{game.teams.visitors.nickname}</span>
                </div>
              </div>
            ))}
          </div>
          ): (
            <h1>Não há jogos</h1>
          )
}
        </div>
      </div>
    </>
  );
};
