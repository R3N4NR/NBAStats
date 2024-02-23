import React from 'react';
import styles from './styles.module.scss';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const ModalWrapper = ({
  setIsOpen,
  arena,
  officials,
  date,
  visitors,
  home,
}) => {
  return (
    <>
      <div
        className={styles.darkBG}
        onClick={() => setIsOpen(false)}
      />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>
              {date}
            </h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
          >
            <RiCloseLine
              style={{ marginBottom: '-3px' }}
            />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.teams}>
              <div className={styles.team}>
                <h4>AWAY</h4>
                <img
                  src={visitors.team.logo}
                  alt="team-logo"
                />
                <Link
                  to={`/teams/${visitors.team.id}`}
                >
                  <span>
                    {visitors.team.nickname}
                  </span>
                  <span>
                    {visitors.score.points}
                  </span>
                </Link>
              </div>
              <h4>X</h4>
              <div className={styles.team}>
                <h4>HOME</h4>
                <img
                  src={home.team.logo}
                  alt="team-logo"
                />
                <Link
                  to={`/teams/${home.team.id}`}
                >
                  <span>
                    {home.team.nickname}
                  </span>
                  <span>{home.score.points}</span>
                </Link>
              </div>
            </div>
            <div className={styles.gameInfo}>
              <h3>Arena</h3>
              <span>{arena}</span>
              <h4>Officials</h4>
              {officials.map(
                (official, index) => (
                  <span key={index}>
                    {official}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//credits : https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
