import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { membersState, memberTypes, searchResultsState } from "../../atoms/Recoils_Member";

function SearchBox(props : any) {

  const members = useRecoilValue<memberTypes[]>(membersState);
  const setSearchResults = useSetRecoilState<memberTypes[]>(searchResultsState);

  const search = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    setSearchResults(members.filter(member => member.name.includes(value)));
    props.setSelectedId("");
  };

  const showForm = () => {
    // props.setDivision('add');
    props.setDivision('update');
  }

  return (
    <>
      <div className="search-box">
        <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." onChange={search} />
        <button className="btn" onClick={showForm}>추가</button>
      </div>
    </>
  );  
}

export default SearchBox;