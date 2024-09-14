import { Provider } from "react-redux"
import { store } from "./redux/store"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages";

function App() {

  return (
    <>
      <Provider store={store}>
        <HomePage />
        <ToastContainer />
      </Provider>
    </>
  )
}

export default App
