import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksForRedux';
import { dataRequest } from '../../store/slices/dataSlice';

import './Aside-Nav.css';

import NavLevel from '../Nav-Level/Nav-Level';

const AsideNav = () => {
  const asideNavIsOpen = useAppSelector((state) => state.asideNav.isOpen);
  const data = useAppSelector((state) => state.data.data);
  const isLoading = useAppSelector((state) => state.data.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // активация запроса данных
    dispatch(dataRequest());
  }, []);

  const asideNavClassName = `aside-nav${
    asideNavIsOpen ? ' aside-nav_active' : ''
  }`;

  return (
    <aside className={asideNavClassName}>
      <ul className="aside-nav__nav-list">
        {isLoading ? (
          <li>Loading in progress...</li>
        ) : (
          data && (
            <NavLevel list={data.contents} title={data.name} type={data.type} />
          )
        )}
      </ul>
    </aside>
  );
};

export default AsideNav;
