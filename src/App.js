import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Provider store={store}>
        <Counter/>
       </Provider>
      </header>
    </div>
  );
}

export default App;
