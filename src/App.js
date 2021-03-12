import './App.css';
import Layout from './layout/Layout';
import { ThemeProvider } from 'styled-components';
import Theme from './layout/Theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <div className="App">
          <Layout></Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
