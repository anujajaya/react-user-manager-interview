import './App.css';
import UserDetails from './components/userDetails';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserDetails />
      </Provider>
    </div>
  );
}

export default App;
