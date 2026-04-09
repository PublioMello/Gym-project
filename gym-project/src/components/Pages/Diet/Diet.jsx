import React from "react";
import "./Diet.css";
import PrescptionCard from "./PrescptionCard/PrescptionCard";
import RefCard from "./RefCard/RefCard";
import { LuClipboardCheck } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

function Diet() {
  return (
    <div className="container-diet">
      <PrescptionCard
        div
        icon=<LuClipboardCheck />
        title="Prescrições Gerais"
        info="Começo do planejamento dia 06/04"
      />
      <h2>Refeições</h2>

      <RefCard
        div
        icon=<IoFastFoodOutline />
        title="Cafe da manhã"
        iconRef=<FaRegCircleCheck />
        refs={[
          "5 Ovos inteiro",
          "50g Queijo Azul",
          "100g Fruta",
          "Café Preto sem açucar",
        ]}
      />
      <RefCard
        div
        icon=<IoFastFoodOutline />
        title="Almoco"
        iconRef=<FaRegCircleCheck />
        refs={[
          "5 Ovos inteiro",
          "50g Queijo Azul",
          "100g Fruta",
          "Café Preto sem açucar",
        ]}
      />
    </div>
  );
}

export default Diet;
