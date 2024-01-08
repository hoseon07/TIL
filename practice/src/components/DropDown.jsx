import React, {useState} from "react";

const DrowDown = () => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView)
  }

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false)
    }, 200);
  }

  return (
    <div className="container" onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <button>Dropdown Menu{isDropdownView ? "R" : "E"}</button>
      </label>
      {isDropdownView && <Dropdown />}
    </div>
  )
}

export default DrowDown