import React, { useState, useMemo } from "react";
import { statesData } from "./data";
import FilterDropdown from "./components/FilterDropdown";
import PieChart from "./components/PieChart";
import MapView from "./components/MapView";
import LineChart from "./components/LineChart";
import "./styles.css";

const App: React.FC = () => {
  const [selectedState, setSelectedState] = useState(statesData[0]);
  const [isStateSelected, setIsStateSelected] = useState(false);

  // Calculate overall statistics
  const overallData = {
    totalCases: statesData.reduce((sum, state) => sum + state.totalCases, 0),
    activeCases: statesData.reduce((sum, state) => sum + state.activeCases, 0),
    recovered: statesData.reduce((sum, state) => sum + state.recovered, 0),
    deaths: statesData.reduce((sum, state) => sum + state.deaths, 0),
  };

  const handleStateChange = (state: any) => {
    setSelectedState(state);
    setIsStateSelected(true);
  };

  const overallHistory = useMemo(() => {
    const historyMap: { [date: string]: any } = {};
    statesData.forEach((state) => {
      state.history.forEach(
        ({ date, totalCases, activeCases, recovered, deaths }) => {
          if (!historyMap[date]) {
            historyMap[date] = {
              date,
              totalCases: 0,
              activeCases: 0,
              recovered: 0,
              deaths: 0,
            };
          }
          historyMap[date].totalCases += totalCases;
          historyMap[date].activeCases += activeCases;
          historyMap[date].recovered += recovered;
          historyMap[date].deaths += deaths;
        }
      );
    });
    return Object.values(historyMap);
  }, [statesData]);

  return (
    <div>
      <h1>COVID-19 Statistics in India</h1>
      <FilterDropdown
        states={statesData}
        onChange={handleStateChange}
        placeholder={isStateSelected ? "Select a State" : "Select the State"}
      />

      {!isStateSelected ? (
        <div className="overall-data">
          <h2>Overall COVID-19 Data</h2>
          <PieChart data={overallData} />
          <LineChart data={overallHistory} />
          <MapView data={statesData} />
        </div>
      ) : (
        <div className="state-data">
          <h2>{selectedState.name} COVID-19 Data</h2>
          <PieChart data={selectedState} />
          <LineChart data={selectedState.history} />
          <MapView data={statesData} />
        </div>
      )}
    </div>
  );
};

export default App;
