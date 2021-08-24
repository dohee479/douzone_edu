import { useRecoilValue } from "recoil";
import { membersState } from "../../atoms/Recoils_Member";
import ContactListItem from "./ContactListItem";

function ContactList(props : any) {

  const members = useRecoilValue(membersState);

  return (
    <>
      <div className="contact-list">
        <ul>
          {
            members.map((member, index) => 
            <ContactListItem key={index} name={member.name} />)
          }
        </ul>
      </div>
    </>
  );  
}

export default ContactList;