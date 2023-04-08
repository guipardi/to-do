import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "../src/styles/themes/defaultTheme";
import { TasksProvider } from "./contexts/TasksContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TasksProvider>
          <Router />
        </TasksProvider>          
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
