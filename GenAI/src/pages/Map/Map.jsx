import { useContext, useEffect } from "react";
import PieChart from "../../components/PieChart/PieChart";
import ToolList from "../../components/ToolList/ToolList";
import "./Map.css";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const Map = () => {
  const { updateState } = useContext(GlobalContext);
  useEffect(() => {
    updateState("theme", "light");
  }, []); // Now really empty to ensure it runs only once

  return (
    <div className="mapPage">
      <PieChart />
      <ToolList />
    </div>
  );
};

export default Map;
