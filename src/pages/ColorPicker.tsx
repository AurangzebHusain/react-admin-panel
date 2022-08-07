import React from "react";
import { Header } from "../components";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

export interface CurrentValue {
  hex: string;
  rgba: string;
}

export interface PreviousValue {
  hex: string;
  rgba: string;
}

export interface RootObject {
  currentValue: CurrentValue;
  previousValue: PreviousValue;
  value: string;
  name: string;
}

const change = (args: RootObject) => {
  console.log(args);
  document.getElementById("preview")!.style.backgroundColor =
    args.currentValue.hex;
};
const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title={"Editor"} category={"App"} />
      <div className="text-center">
        <div id="preview"></div>
        <div className="flex justify-center items center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            ></ColorPickerComponent>
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            ></ColorPickerComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
