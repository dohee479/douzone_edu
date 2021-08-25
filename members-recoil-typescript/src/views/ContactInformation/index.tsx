import { useState } from "react";
import Details from "../Details";
import SearchAndList from "../SearchAndList";
import Subject from "../Subject";

function ContactInformation(props : any) {

  // member 이름
  const [selectedId, setSelectedId] = useState<number>();

  return (
    <>
      <div className="container">
        <Subject/>
        <div className="contact-wrap">
          <SearchAndList setSelectedId={setSelectedId}/>
          <Details selectedId={selectedId} />
        </div>
      </div>
    </>
  );  
}

export default ContactInformation;