import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/hooksForRedux';
import './Main-Table.css';

const MainTable = () => {
  const [files, setFiles] = useState([]);

  const data = useAppSelector((state) => state.data.data);
  const actualListName = useAppSelector((state) => state.data.actualListName);
  const isLoading = useAppSelector((state) => state.data.isLoading);

  const sort = (arr: any, targetName: string) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === targetName) {
        setFiles(
          arr[i].contents.filter((item: any) => {
            return item.type === 'file';
          })
        );
      } else if (arr[i].type === 'directory') {
        sort(arr[i].contents, targetName);
      }
    }
  };

  useEffect(() => {
    if (!isLoading) {
      sort(data, actualListName);
    }
  }, [isLoading, actualListName]);

  return (
    <main className="main-table">
      {!isLoading &&
        files.map((item: any) => {
          return <h2 key={item.name}>{item.name}</h2>;
        })}
    </main>
  );
};

export default MainTable;
