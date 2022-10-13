import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MeetMatt from "../components/MeetMatt";

function about() {
  return (
    <div>
      <Header />
      <div className="h-screen">
        <MeetMatt />
      </div>

      <Footer />
    </div>
  );
}

export default about;
