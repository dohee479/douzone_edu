import React from "react";
import { useSetRecoilState } from "recoil";
import { keywordState } from "../../atoms/Recoils_Member";
// import { searchedMembersState } from "../../atoms/Recoils_Member";

function SearchBox(props : any) {

  // const [keyword, setKeyword] = useState<string>('');
  const setKeywordState = useSetRecoilState(keywordState);
  // const setSearchedMembers = useRecoilState(searchedMembersState);

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordState(event.target.value);
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