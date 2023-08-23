import { Provider } from 'react-redux';
import './App.css';
import AsideNav from './components/Aside-Nav/Aside-Nav';
import 'normalize.css';
import { store } from './store/store';
import { HashRouter } from 'react-router-dom';
import MainTable from './components/Main-Table/Main-Table';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AsideNav />
        <MainTable />
      </HashRouter>
    </Provider>
  );
}

export default App;
