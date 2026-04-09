import React from "react";
import TrainCard from "./TrainCard/TrainCard";
import "./Train.css";

import { CgGym } from "react-icons/cg";
function Train() {
  const pushA = [
    { name: "Supino Inclinado Smith", reps: "3 x 6-8" },
    { name: "Supino Reto Smith", reps: "3 x 8-10" },
    { name: "Crucifixo Máquina", reps: "2 x 10-12" },
    { name: "Desenvolvimento com Halter", reps: "4 x 8-10" },
    { name: "Elevação Lateral com Halter", reps: "4 x 10-12" },
    { name: "Tríceps Polia", reps: "3 x 10-12" },
    { name: "Tríceps Francês", reps: "3 x 10-12" },
  ];
  const pullA = [
    { name: "Pulldown c/ corda", reps: "3 x 8-10" },
    { name: "Remada articulada unilateral - pronada", reps: "3 x 8-10" },
    { name: "Remada serrote ou cavalinho - neutra", reps: "3 x 6-8" },
    { name: "Encolhimento no smith", reps: "3 x 10-12" },
    { name: "Rosca scott na máquina", reps: "3 x 10-12" },
    { name: "Rosca martelo c/ halter", reps: "3 x 10-12" },
    { name: "Abdominal de sua preferência", reps: "4 x 12-15" },
  ];
  return (
    <div className="container-train">
      <TrainCard
        icon={<CgGym />}
        title="Push A"
        iconRef={<CgGym />}
        treino={pushA}
      />
      <TrainCard
        icon={<CgGym />}
        title="Pull A"
        iconRef={<CgGym />}
        treino={pullA}
      />
    </div>
  );
}

export default Train;
