// AJAX 요청을 보내서 응답을 받아올 것
// 요번 타임 주제 => 유저 정보 ==> 회원들의 정보
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 400px;
  hegith: 140px;
  border: 1px solid lightgray;
  display: inline-block;
  margin: 40px;
  background-color: ${(props) => (props.color ? props.color : "white")};
`;

const MemberInfo = (props) => {
  console.log(props);
  const { memberId, memberName, email, color} = props.member;
  // console.log(memberId, memberName, email);
  return (
  <>
      <StyledDiv color={color}>
        <h4>아이디 : {memberId}</h4>
        <strong>이름 : {memberName}</strong>
        <p>이메일 : {email}</p>
      </StyledDiv>
  </>)
}

const Chapter02 = () => {
  const response = [
    {
      memberId: "admin",
      memberName: "짱구",
      email: "jjang9@kh.com",
      color: "lightyellow",
    },
    {
      memberId: "user01",
      memberName: "철수",
      email: "ironwater@kh.com",
      color: "lightblue",
    },
    {
      memberId: "user02",
      memberName: "유리",
      email: "glass@kh.com",
    },
  ];

  return(
    <>
      {response.map((e, i) => (<MemberInfo member={e} key={e.memberId} />))}

      {/*
      <MemberInfo {...response[0]} />
      <MemberInfo {...response[1]} />
      <MemberInfo {...response[2]} />
      */}
      {/*
      <StyledDiv>
        <h4>아이디 : {response[0].memberId}</h4>
        <strong>이름 : {response[0].memberName}</strong>
        <p>이메일 : {response[0].email}</p>
      </StyledDiv>
      <StyledDiv>
        <h4>아이디 : {response[1].memberId}</h4>
        <strong>이름 : {response[1].memberName}</strong>
        <p>이메일 : {response[1].email}</p>
      </StyledDiv>
      <StyledDiv>
        <h4>아이디 : {response[2].memberId}</h4>
        <strong>이름 : {response[2].memberName}</strong>
        <p>이메일 : {response[2].email}</p>
      </StyledDiv>
      */}
    </>
  );

};

export default Chapter02;