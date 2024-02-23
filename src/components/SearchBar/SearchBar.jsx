import styles from './styles.module.scss';

export const SearchBar = ({
  handleChange,
  value,
  placeholder,
}) => {
  return (
    <div className={styles.formInput}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
