import { AppContainer, AppContent } from './styles'
import Title from './components/Title';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './globalStyles/theme';
import Menu from './components/Menu';
import GlobalStyle from './globalStyles/globalStyles';
import RoutesProvider from './routes/Routes';
import { useState } from 'react';

function App() {

  const [toggleMenu, setToggleMenu] = useState(true);
  
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <AppContainer className="App">
        <Title setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
        <AppContent>
          <Menu toggleMenu={toggleMenu}/>
          <RoutesProvider />
        </AppContent>
        {/* <button onClick={()=> new window.Notification("Cliquei no botão", {body: "body"})}>Teste</button> */}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
