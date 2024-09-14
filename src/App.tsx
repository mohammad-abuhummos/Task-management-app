import { Provider } from "react-redux"
import { store } from "./redux/store"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Provider store={store}>
        <h1>Waiting for app</h1>
        <ToastContainer />
      </Provider>
    </>
  )
}

export default App
