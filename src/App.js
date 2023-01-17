import { CssBaseline } from "@mui/material";
import { colorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import Topbar from "./scenes/global/Topbar";


function App()
{
  const [theme, colorMode] = useMode()

  return (<colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <Topbar />
        </main>
      </div>
    </ThemeProvider>
  </colorModeContext.Provider>
  );
}

export default App;
