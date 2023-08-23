import { useState } from 'react';

import './Nav-Level.css';
import { useDispatch } from 'react-redux';
import { setActualListName } from '../../store/slices/dataSlice';
import { useAppSelector } from '../../hooks/hooksForRedux';

interface NavLevelProps {
  list: Array<any>;
  title: string;
  type: string;
}

const NavLevel = ({ list, title, type }: NavLevelProps) => {
  const [levelState, setLevelState] = useState(false);

  const actualListName = useAppSelector((state) => state.data.actualListName);

  const dispatch = useDispatch();

  const levelHandler = (e: any) => {
    e.stopPropagation();
    dispatch(setActualListName(title));
    setLevelState(!levelState);
  };

  const levelClassName = `nav-level${levelState ? ' nav-level_active' : ''}`;

  const titleClassName = `${title === actualListName ? ' open' : ''}`;

  return (
    type === 'directory' && (
      <li className={levelClassName} onClick={levelHandler}>
        <h3 className={titleClassName}>{title}</h3>
        <ul className="nav-level__list">
          {list.map((item) => {
            if (item.type === 'directory') {
              return (
                <NavLevel
                  key={item.name}
                  list={item.contents}
                  title={item.name}
                  type={item.type}
                />
              );
            }
          })}
        </ul>
      </li>
    )
  );
};

export default NavLevel;
