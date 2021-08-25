import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { membersState, memberTypes } from "../../atoms/Recoils_Member";

function Details(props : any) {

  const members = useRecoilValue<memberTypes[]>(membersState);
  
  const [member, setMember] = useState<memberTypes>();

  useEffect(() => {
    if (props.selectedId) {
      setMember(members.find(memberRecord => memberRecord.id === props.selectedId))
    } else {
      setMember(undefined);
    }
  }, [members, props.selectedId])

  return (
    <>
      <div className="col right">
        <div className="details">
          {
            member ?
            <ul className="info">
              <li>이름: {member.name}</li>
              <li>부서: {member.department}</li>
              <li>휴대폰: {member.phone}</li> 
              <li>메일: {member.mail}</li>
            </ul>
            :
            <p className="emptyset">정보가 없습니다.</p>
          }
        </div>
      </div>
    </>
  );  
}

export default Details;