import ContactList from "./ContactList";
import SearchBox from "./SerachBox";

function SearchAndList(props : any) {
  return (
    <>
      <div className="col left">
        <SearchBox/>
        <ContactList setSelectedId={props.setSelectedId} />
      </div>
    </>
  );  
}

export default SearchAndList;