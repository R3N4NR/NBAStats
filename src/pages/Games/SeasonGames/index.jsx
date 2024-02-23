import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadData } from '../../../services/api';
import { ModalWrapper } from '../../../components/ModalWrapper/ModalWrapper';
import { convertDate } from '../../../utils/getDate';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';
import { SearchBar } from '../../../components/SearchBar/SearchBar';
import { Button } from '../../../components/Button/Button';
import { verifyString } from '../../../utils/extractDate';

export const SeasonGames = () => {
  const { season } = useParams();
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] =
    useState(1);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [maxPages, setMaxPages] = useState('');
  const pageSize = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadData(
          `/games?season=${season}`,
        );
        const gamesWithOpenState =
          data.response.map((game) => ({
            ...game,
            isOpen: false,
          }));

        setGames(gamesWithOpenState);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [season]);

  const handleSubmit = (e) => {
    const results = [];
    const searchLowerCase = search.toLowerCase();
    e.preventDefault();
    games.forEach((item) => {
      if (
        item.teams.visitors.nickname &&
        (item.teams.visitors.nickname
          .toLowerCase()
          .includes(searchLowerCase) ||
          item.teams.home.nickname
            .toLowerCase()
            .includes(searchLowerCase))
      ) {
        results.push(item);
      } else if (
        item.date.start &&
        verifyString(search, item.date.start)
      ) {
        results.push(item);
      }
    });
    console.log(results);
    setResult(results);
    return results;
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleOpenModal = (gameIndex) => {
    setGames((prevGames) => {
      const updatedGames = [...prevGames];
      updatedGames[gameIndex].isOpen = true;
      return updatedGames;
    });
  };

  const handleCloseModal = (gameIndex) => {
    setGames((prevGames) => {
      const updatedGames = [...prevGames];
      updatedGames[gameIndex].isOpen = false;
      return updatedGames;
    });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const renderGames = (gamesToRender) => {
    return gamesToRender.map((game, index) => (
      <div key={game.id}>
        <button
          className={styles.primaryBtn}
          onClick={() => handleOpenModal(index)}
        >
          {convertDate(game.date.start)} /{' '}
          {game.teams.home.nickname} X{' '}
          {game.teams.visitors.nickname}
        </button>
        {game.isOpen && (
          <ModalWrapper
            setIsOpen={() =>
              handleCloseModal(index)
            }
            arena={game.arena.name}
            officials={game.officials}
            date={convertDate(game.date.start)}
            visitors={{
              team: game.teams.visitors,
              score: game.scores.visitors,
            }}
            home={{
              team: game.teams.home,
              score: game.scores.home,
            }}
          />
        )}
      </div>
    ));
  };

  const indexOfLastGame = currentPage * pageSize;
  const indexOfFirstGame =
    indexOfLastGame - pageSize;
  const currentGames =
    search !== ''
      ? result.slice(
          indexOfFirstGame,
          indexOfLastGame,
        )
      : games.slice(
          indexOfFirstGame,
          indexOfLastGame,
        );

  useEffect(() => {
    setMaxPages(
      Math.round(currentGames.length / pageSize),
    );
  }, [currentGames.length]);

  return (
    <>
      <div className={styles.gameSeasonBody}>
        <div className={styles.gamesBoard}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <SearchBar
              handleChange={handleChange}
              value={search}
            />
            <Button
              type="submit"
              text="Pesquisar jogos"
            >
              Pesquisar
            </Button>
          </form>

          {search !== ''
            ? renderGames(result)
            : renderGames(currentGames)}

          <div className={styles.pagination}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <MdOutlineArrowBackIos size="10px" />
            </button>
            <span>Página {currentPage}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === maxPages}
            >
              <MdOutlineArrowForwardIos size="10px" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
