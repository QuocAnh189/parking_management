import { useState } from "react";

import { RFIDReaderInput } from "rfid-reader-input";

const RFID = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    filter: isHover ? "drop-shadow(0 0 5em #617874ee)" : "",
  };

  //RFIDReaderInput State
  const [serialCard, setSerialcard] = useState("");
  const [openCardReaderWindow, setOpenCardReaderWindow] =
    useState<boolean>(false);

  function handleOpenRFID() {
    setOpenCardReaderWindow(true);
  }

  function handleCloseRFID() {
    setOpenCardReaderWindow(false);
  }

  return (
    <>
      <div>
        <RFIDReaderInput
          isOpen={openCardReaderWindow}
          onRequestClose={handleCloseRFID}
          handleCodeCardRFID={setSerialcard}
        />
        <a
          href="https://github.com/DIGOARTHUR/rfid-reader-input"
          target="_blank"
        >
          <img
            src="https://github.com/DIGOARTHUR/rfid-reader-input/assets/59892368/a6367195-e847-4157-bffb-5932d73bd076"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={boxStyle}
            alt="React logo"
          />
        </a>
      </div>
      <h1>{serialCard ? serialCard : "‹ RFIDReaderInput 	/›"}</h1>
      <div className="card">
        <button onClick={handleOpenRFID}>Open RFIDReaderInput</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test
        </p>
      </div>
      <p className="read-the-docs">
        Click on the RFIDReaderInput logo to learn more
      </p>
    </>
  );
};

export default RFID;
