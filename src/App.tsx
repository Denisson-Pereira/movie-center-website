import { AuthProvider } from "./context"
import { RoutesApp } from "./routes"

function App() {

  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}

export default App
