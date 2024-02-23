import styles from './styles.module.scss';

export const StatsTable = () => {
  return (
    <>
      <div className={styles.tableHeader}>
        <div className={styles.column}>Nome</div>
        <div className={styles.column}>Idade</div>
        <div className={styles.column}>
          Altura
        </div>
        <div className={styles.column}>Peso</div>
        <div className={styles.column}>
          College
        </div>
      </div>
    </>
  );
};
