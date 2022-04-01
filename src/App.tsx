import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import GlobalStyle from './styles/global.styles';
import theme from './theme';
import GlobalContextProvider from './contexts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <GlobalContextProvider>
          <Router />
        </GlobalContextProvider>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
