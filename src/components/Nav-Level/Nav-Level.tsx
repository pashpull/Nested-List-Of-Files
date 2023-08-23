import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooksForRedux';
import {
  setActualContent,
  setActualListName,
} from '../../store/slices/dataSlice';

import './Nav-Level.css';

import IFile from '../../interfaces/IFile';
import IDirectory from '../../interfaces/IDirectory';

interface NavLevelProps {
  list: Array<IFile | IDirectory>;
  title: string;
  type: string;
}

const NavLevel = ({ list, title, type }: NavLevelProps) => {
  // открыта или закрыта ветка
  const [levelState, setLevelState] = useState(false);

  // название открытой ветки
  const actualListName = useAppSelector((state) => state.data.actualListName);

  const dispatch = useAppDispatch();

  // обратотчик нажатия на заголовок ветки
  const levelHandler = (e: any) => {
    e.stopPropagation();
    dispatch(setActualListName(title));
    dispatch(
      setActualContent(
        list.filter((file: IFile | IDirectory) => file.type === 'file')
      )
    );
    setLevelState(!levelState);
  };

  // проверка наличия вложенных папок
  const nestedDirectories = list.some((item) => item.type === 'directory');

  // класс для выделения цветом заголовка активной ветки
  const titleClassName = `nav-level__title${
    title === actualListName ? ' nav-level__title_active' : ''
  }`;

  // класс для поворота маркера списка при открытии ветки
  const arrowClassName = `nav-level__arrow${
    levelState ? ' nav-level__arrow_active' : ''
  }`;

  return (
    type === 'directory' && (
      <li className="nav-level">
        {nestedDirectories && <span className={arrowClassName}></span>}
        <h3 className={titleClassName} onClick={levelHandler}>
          {title}
        </h3>
        {levelState && (
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
        )}
      </li>
    )
  );
};

export default NavLevel;
