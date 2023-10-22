import { useSelector } from "react-redux";
import "./App.css";
import { AppRouter } from "./components/AppRouter";
import IsLoading from "./components/IsLoading/IsLoading";

function App() {
  const loading = useSelector((state) => state.auth.isLoading);
  return <AppRouter />;
}

export default App;
