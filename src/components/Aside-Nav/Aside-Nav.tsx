import { useEffect } from 'react';
import NavLevel from '../Nav-Level/Nav-Level';

import './Aside-Nav.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksForRedux';
import { dataRequest } from '../../store/slices/dataSlice';

const AsideNav = () => {
  const data = useAppSelector((state) => state.data.data)[0];
  const isLoading = useAppSelector((state) => state.data.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataRequest());
  }, []);

  return (
    <aside className="aside-nav">
      <nav className="aside-nav__nav">
        <ul className="aside-nav__nav-list">
          {!isLoading && (
            <NavLevel list={data.contents} title={data.name} type={data.type} />
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default AsideNav;
