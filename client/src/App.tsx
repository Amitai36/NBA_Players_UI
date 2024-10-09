import { useGetAllPlayers } from "./hooks/useFetching";
import Home from "./pages/Home";
import CreateTheme from "./styles/CreateTheme"

function App() {
  const { data } = useGetAllPlayers()
  console.log(data)
  return (
    <CreateTheme>
      <Home />
    </CreateTheme>
  )
}

export default App
