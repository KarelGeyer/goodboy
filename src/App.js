import './App.css';
import Layout from './layout/Layout';
import { ThemeProvider } from 'styled-components';
import Theme from './layout/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Layout></Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
