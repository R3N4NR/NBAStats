import styles from './styles.module.scss';
import { useRef, useEffect } from 'react';

const Dropdown = ({
  handleClick,
  isOpen,
  menu,
}) => {
  const dropdownRef = useRef(null);
  const handleClickOutsideRef = useRef(null);

  const handleMenuItemClick = (
    menuItemHandler,
  ) => {
    menuItemHandler();
    handleClick();
  };

  handleClickOutsideRef.current = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      handleClick();
    }
  };

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) =>
        handleClickOutsideRef.current(event);
      document.addEventListener(
        'mousedown',
        handleClickOutside,
      );
      return () => {
        document.removeEventListener(
          'mousedown',
          handleClickOutside,
        );
      };
    }
  }, [isOpen]);

  return (
    <div
      className={styles.dropdown}
      ref={dropdownRef}
    >
      <button
        className={styles.dropdownButton}
        onClick={handleClick}
      >
        Open
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {menu.map((menuItem, index) => (
            <li
              key={index}
              className={styles.menuItem}
              onClick={() =>
                handleMenuItemClick(
                  menuItem.props.onClick,
                )
              }
            >
              {menuItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
