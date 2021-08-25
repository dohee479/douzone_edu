import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { membersState, memberTypes, searchResultsState } from "../../atoms/Recoils_Member";

function SearchBox(props : any) {

  const members = useRecoilValue<memberTypes[]>(membersState);
  const setSearchResults = useSetRecoilState<memberTypes[]>(searchResultsState);

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchResults(members.filter(member => member.name.includes(event.target.value)));
    props.setSelectedId("");
  }

  return (
    <>
      <div className="search-box">
        <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." onChange={search}/>
      </div>
    </>
  );  
}

export default SearchBox;