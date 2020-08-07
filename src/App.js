import React, { useState } from "react";
import "./styles.css";
import {
  PositarMan,
  PositarWoman,
  PositarNeutral,
  SkinColors,
  HairColors
} from "./Positar";
import { Button } from "@material-ui/core";

export default function App() {
  const [currentSkinColorIndex, setCurrentSkinColorIndex] = useState(0);
  const [currentHairColorIndex, setCurrentHairColorIndex] = useState(0);

  const changeSkinColor = () => {
    let newColor = currentSkinColorIndex + 1;
    console.log("skin color index " + newColor);
    if (newColor < SkinColors.length) setCurrentSkinColorIndex(newColor);
    else setCurrentSkinColorIndex(0);
  };

  const changeHairColor = () => {
    let newColor = currentHairColorIndex + 1;
    console.log("hair color index " + newColor);
    if (newColor < HairColors.length) setCurrentHairColorIndex(newColor);
    else setCurrentHairColorIndex(0);
  };

  return (
    <div className="App">
      <Button
        variant="contained"
        style={{ margin: "4px 8px" }}
        onClick={changeSkinColor}
      >
        Change Skin Colors
      </Button>
      <Button
        variant="contained"
        style={{ margin: "4px 8px" }}
        onClick={changeHairColor}
      >
        Change Hair Colors
      </Button>
      <PositarMan
        SkinColor={SkinColors[currentSkinColorIndex]}
        HairColor={HairColors[currentHairColorIndex]}
      />
      <PositarWoman
        SkinColor={SkinColors[currentSkinColorIndex]}
        HairColor={HairColors[currentHairColorIndex]}
      />
      <PositarNeutral
        SkinColor={SkinColors[currentSkinColorIndex]}
        HairColor={HairColors[currentHairColorIndex]}
      />
    </div>
  );
}
