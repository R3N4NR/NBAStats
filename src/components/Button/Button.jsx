import styles from './styles.module.scss';

export const Button = ({ text, type }) => {
  return (
    <div className={styles.formButton}>
      <button type={type}>{text}</button>
    </div>
  );
};
