import { AuthProvider } from "./context"
import { ThemeProvider } from "./context/themeContext"
import { RoutesApp } from "./routes/index.routes"
import { GlobalStyle } from "./themes/globalStyles"

function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
