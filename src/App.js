import './App.css';
import Layout from './layout/Layout';
import { ThemeProvider } from 'styled-components';
import Theme from './layout/Theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Router>
          <div className="App">
            <Layout></Layout>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
