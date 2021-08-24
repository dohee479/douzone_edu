import { useState } from "react";
import { useRecoilValue } from "recoil";
import { membersState } from "../../atoms/Recoils_Member";

function ContactListItem(props : any) {

  return (
    <>
      <li>
        <button type="button">{props.name}</button>
      </li>
    </>
  );  
}

export default ContactListItem;