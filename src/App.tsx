import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './router';
import GlobalStyle from './styles/global.styles';
import theme from './theme';
import GlobalContextProvider from './contexts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContextProvider>
        <Router />
      </GlobalContextProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
