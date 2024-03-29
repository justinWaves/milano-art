import React from "react";
import { useState } from "react";

import Header from "../components/Header";
import MeetMatt from "../components/MeetMatt";
import ContactScreen from "../components/ContactScreen";

function about() {
  const [isContactScreenOpen, setIsContactScreenOpen] = useState(false);

  const toggleContactMenu = () => {
    setIsContactScreenOpen(!isContactScreenOpen);
  };

  return (
    <div>
      {isContactScreenOpen ? (
        <ContactScreen handleClose={toggleContactMenu} />
      ) : (
        <></>
      )}

      <Header openContact={toggleContactMenu} />
      <div className="h-screen">
        <MeetMatt />
      </div>
    </div>
  );
}

export default about;
