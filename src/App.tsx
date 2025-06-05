import { Card1, Card2, ErrorBoundary } from "./components/errorbound"

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Card1/>

      </ErrorBoundary>
      <Card2/>
    </div>
  )
}

export default App
