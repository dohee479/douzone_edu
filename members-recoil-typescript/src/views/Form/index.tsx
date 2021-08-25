import { useSetRecoilState } from "recoil";
import { membersState, memberTypes } from "../../atoms/Recoils_Member";

let id : number = 6;
const getId = () => {
  return id++;
}

function Form(props : any) {

  const setMembers = useSetRecoilState<memberTypes[]>(membersState);

  const addMember = () => {

  }

  return (
    <>
    <div className="col right">
      <div className="details">
        <ul className="edit">
          <li>
            이름 : <input name="name"/>
          </li>
          <li>
            부서 : <input name="department" />
          </li>
          <li>
            휴대폰 : <input name="phone"/>
          </li>
          <li>
            메일 : <input name="mail"/>
          </li>
          <button className="saveButton" onClick={addMember}>
            저장
          </button>
        </ul>
      </div>
    </div>
    </>
  );  
}

export default Form;