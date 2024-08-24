// const BackgroundColorPicker = ({ currentColor, onColorChange }) => (
//   <div>
//     <ChromePicker color={currentColor} onChangeComplete={onColorChange} />
//   </div>
// )
// export default BackgroundColorPicker
import React, { useState } from "react"
import { ChromePicker } from "react-color"
import { SketchPicker } from "react-color"

const BackgroundColorPicker = ({ currentColor, onColorChange }) => {
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div>
      <h3 className="mb-2 leading-6 text-white sm:text-[14px] lg:text-[15px] 2xl:text-[16px]">
        Select Text Color:
      </h3>
      <button
        onClick={() => setShowColorPicker(!showColorPicker)}
        style={{
          backgroundColor: currentColor,
          width: "30px",
          height: "30px",
          border: "2px solid white",
          cursor: "pointer",
          position: "relative",
          borderRadius: "5px",
        }}
      />
      {showColorPicker && (
        <div className="absolute">
          <ChromePicker color={currentColor} onChangeComplete={onColorChange} />
        </div>
      )}
    </div>
  )
}

export default BackgroundColorPicker
