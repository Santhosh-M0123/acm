import "./App.css";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Update from "./components/Update";
import Layout from "./Layout/Layout";
function App() {
  return (
    <div className="app">
      <ToastContainer position="top-center"/>
      {/* <Update /> */}
      <Layout />
    </div>
  );
}

export default App;
