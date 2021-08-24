import Details from "../Details";
import SearchAndList from "../SearchAndList";
import Subject from "../Subject";

function ContactInformation(props : any) {
  return (
    <>
      <div className="container">
        <Subject/>
        <div className="contact-wrap">
          <SearchAndList/>
          <Details/>
        </div>
      </div>
    </>
  );  
}

export default ContactInformation;