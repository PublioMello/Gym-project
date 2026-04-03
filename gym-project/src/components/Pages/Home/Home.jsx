import React from "react";
import Card from "../Card/Card";
import WaterCard from "../Card/WaterCard/WaterCard";
import "./Home.css";
import { GiWeightScale } from "react-icons/gi";
import { LiaPercentageSolid } from "react-icons/lia";
function Home() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h3>Progresso</h3>
      </div>

      <div className="grid">
        <Card
          title="Peso"
          value="79.7"
          unit="kg"
          change="+ 0.7kg"
          isPositive={true}
          icon=<GiWeightScale />
        />

        <Card
          title="Gordura"
          value="22.2"
          unit="%"
          change="- 5.4%"
          isPositive={false}
          icon=<LiaPercentageSolid />
        />
        <WaterCard />
      </div>
    </div>
  );
}

export default Home;
