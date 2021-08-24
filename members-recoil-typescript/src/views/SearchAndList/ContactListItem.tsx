function ContactListItem(props : any) {

  const changeId = (id : number) => {
    props.setSelectedId(id);
  }

  return (
    <>
      <li>
        <button type="button" onClick={() => changeId(props.member.id)}>{props.member.name}</button>
      </li>
    </>
  );  
}

export default ContactListItem;