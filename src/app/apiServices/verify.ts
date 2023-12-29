import Cookies from "universal-cookie";

const cookies = new Cookies();
let member_data: any = null;

if (cookies.get("access_token")) {
  const memebrDataJson: any = localStorage.getItem("member_data")
    ? localStorage.getItem("member_data")
    : null;
    member_data = memebrDataJson? JSON.parse(memebrDataJson) : null
}else{localStorage.removeItem("member_data")
}

console.log("== verify ==");
console.log(member_data);

export const verifyMemberData = member_data ? member_data : null

 /// second variant
// const cookie = new Cookie();

// if (!cookie.get("access_token")) {
//   localStorage.removeItem("member_data");
// }


