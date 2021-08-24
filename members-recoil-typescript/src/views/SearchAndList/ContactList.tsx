import { useRecoilValue } from "recoil";
import { searchedMembersState } from "../../atoms/Recoils_Member";
import ContactListItem from "./ContactListItem";

function ContactList(props : any) {

  const members = useRecoilValue(searchedMembersState);

  return (
    <>
      <div className="contact-list">
        <ul>
          {
            members.map((member, index) => 
            <ContactListItem key={member.id} member={member} setSelectedId={props.setSelectedId}/>)
          }
        </ul>
      </div>
    </>
  );  
}

export default ContactList;