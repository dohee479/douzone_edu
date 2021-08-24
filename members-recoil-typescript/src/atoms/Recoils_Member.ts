import { atom, selector } from "recoil";

export interface memberTypes {
  id: number,
  name: string,
  department: string,
  phone: string,
  mail: string
}

export const membersState = atom<memberTypes[]>({
  key: 'membersState',
  default: [
    {
      id: 0,
      name: "박시현",
      department: "헬스케어솔루션사업본부",
      phone: "010-1111-1111",
      mail: "박시현@wehago.com"
    },
    {
      id: 1,
      name: "윤서영",
      department: "헬스케어솔루션사업본부",
      phone: "010-2222-2222",
      mail: "윤서영@wehago.com"
    },
    {
      id: 2,
      name: "이종현",
      department: "헬스케어솔루션사업본부",
      phone: "010-3333-3333",
      mail: "이종현@wehago.com"
    },
    {
      id: 3,
      name: "임도희",
      department: "헬스케어솔루션사업본부",
      phone: "010-4444-4444",
      mail: "임도희@wehago.com"
    },
    {
      id: 4,
      name: "조민상",
      department: "헬스케어솔루션사업본부",
      phone: "010-5555-5555",
      mail: "조민상@wehago.com"
    }
  ]
});

export const keywordState = atom<string>({
  key: 'keywordState',
  default: '',
});

export const searchedMembersState = selector({
  key: 'searchedMembersState',
  get: 
    ({get}) => {
    const keyword = get(keywordState);
    const list = get(membersState);
    return list.filter(item => item.name.includes(keyword));
  }
});