import { CssBaseline } from "@mui/material";
import { colorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/dashboard/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";


function App()
{
  const [theme, colorMode] = useMode()

  return (<colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/team" element={<Team />} /> */}
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            {/* <Route path="/invoices" element={<Invoices />} /> */}
            {/* <Route path="/bar" element={<Bar />} /> */}
            {/* <Route path="/line" element={<Line />} /> */}
            {/* <Route path="/form" element={<Form />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/geography" element={<Geography />} /> */}
            {/* <Route path="/calendar" element={<Calendar />} /> */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </colorModeContext.Provider>
  );
}

export default App;
