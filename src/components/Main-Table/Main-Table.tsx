import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksForRedux';

import './Main-Table.css';

import IFile from '../../interfaces/IFile';
import { setAsideNavState } from '../../store/slices/asideNavSlice';

const MainTable = () => {
  const [files, setFiles] = useState<IFile[]>([]);

  const actualContent = useAppSelector((state) => state.data.actualContent);

  const isLoading = useAppSelector((state) => state.data.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (actualContent) {
      setFiles(actualContent.filter((dir: IFile) => dir.type === 'file'));
    }
  }, [actualContent]);

  return (
    <main className="main-table">
      <button
        className="main-table__nav-btn"
        onClick={() => {
          dispatch(setAsideNavState());
        }}
      >
        Nav
      </button>
      <table className="main-table__table">
        <tbody>
          <tr className="main-table__row title-row">
            <th className="main-table__cell">File Name</th>
            <th className="main-table__cell">Size</th>
            <th className="main-table__cell">Last Modification</th>
          </tr>
          {isLoading ? (
            <tr className="main-table__row">
              <td className="main-table__cell" colSpan={3}>
                <h2>Loading in progress...</h2>
              </td>
            </tr>
          ) : files.length === 0 ? (
            <tr className="main-table__row">
              <td className="main-table__cell" colSpan={3}>
                <h2>Files is not found</h2>
              </td>
            </tr>
          ) : (
            files.map((item: IFile) => {
              return (
                <tr key={item.name} className="main-table__row">
                  <td className="main-table__cell">{item.name}</td>
                  <td className="main-table__cell">{item.size}</td>
                  <td className="main-table__cell">{item.time}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </main>
  );
};

export default MainTable;
