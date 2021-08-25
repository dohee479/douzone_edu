import { useRecoilValue } from "recoil";
import { memberTypes, searchResultsState } from "../../atoms/Recoils_Member";
import ContactListItem from "./ContactListItem";

function ContactList(props : any) {

  const members = useRecoilValue<memberTypes[]>(searchResultsState);

  return (
    <>
      <div className="contact-list">
        <ul>
          {
            members.map(member => 
            <ContactListItem key={member.id} member={member} setSelectedId={props.setSelectedId}/>)
          }
        </ul>
      </div>
    </>
  );  
}

export default ContactList;