import TodoWrapper from "./Components/TodoWrapper";
import { getLocalStorage, setLocalStorage } from "./hook/localStorageUtils";
import initialData from "./assets/data.json";

// Initialize local storage with initial data
const LOCAL_STORAGE_KEY = "todos";
const storedData = getLocalStorage(LOCAL_STORAGE_KEY);
if (!storedData.length) {
  setLocalStorage(LOCAL_STORAGE_KEY, initialData);
}

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
