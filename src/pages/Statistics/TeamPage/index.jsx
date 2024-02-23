import styles from './styles.module.scss';
import { Helmet } from 'react-helmet';
import Dropdown from '../../../components/DropDown/DropDown';
import { useState, useEffect } from 'react';
import { loadData } from '../../../services/api';

export const Statistics = () => {
  const [open, setOpen] = useState(false);
  const [menuItem, setMenuItem] = useState([]);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuItem = (item) => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadData('/seasons');
      console.log(data.response);
      setMenuItem(data.response);
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>NBA - Statistics</title>
      </Helmet>

      <div className={styles.statisticsBody}>
        <div className={styles.statisticsBoard}>
          <Dropdown
            handleClick={handleOpen}
            isOpen={open}
            menu={menuItem.map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  handleMenuItem(index)
                }
              >
                {item}
              </button>
            ))}
          />
        </div>
      </div>
    </>
  );
};
