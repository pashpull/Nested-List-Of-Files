import { Provider } from 'react-redux';
import './App.css';
import AsideNav from './components/Aside-Nav/Aside-Nav';
import 'normalize.css';
import { store } from './store/store';

import MainTable from './components/Main-Table/Main-Table';

function App() {
  return (
    <Provider store={store}>
      <AsideNav />
      <MainTable />
    </Provider>
  );
}

export default App;
