import React, { useState } from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  const [isActive, setIsActive] = useState("all");
  return (
    <>
      <div className="buttons-flex">
        <button
          className={`button-white button-filter ${isActive === "all" && "active"}`}
          onClick={(event) => {
            setItem(Data);
            setIsActive("all");
          }}
        
        >
          Všechno
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
            className={`button-white button-filter ${isActive === Val && "active"}`}
              onClick={() => {
                filterItem(Val);
                setIsActive(Val);
              }}
              key={id}
              
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;