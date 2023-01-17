import { CssBaseline } from "@mui/material";
import { colorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";


function App()
{
  const [theme, colorMode] = useMode()

  return (<colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <div className="app">
      </div>
    </ThemeProvider>
  </colorModeContext.Provider>
  );
}

export default App;
