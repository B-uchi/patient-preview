import "../style.css";
import "./fonts.css"
import SideBar from "./components/SideBar";
import PatientViewDetails from "./pages/PatientViewDetails";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">
        <PatientViewDetails />
      </div>
    </div>
  );
}

export default App;
