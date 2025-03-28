import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from " axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CommentList from "../Comment/CommentList";
// import { StyledWrap, StyledTitle, StyledMap, StyledMoreButton } from "../Foods.styles";
/*
  const location = useLocation();
*/

const StyledMainImg = styled.img`
  width: 95%;
  height: 300px;
`;

const StyledDescription = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin: 20px 0px;
  padding 30px;
`;

const StyledOther = styled.div`
  font-size: 18px;
  text-align: center;
  margin: 15px 0px;
`;

const StyledMap = styled.div`
  width: 50%;
  height: 600px;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const FoodDetail = () => {
 const { id } = useParams();
 const { load, isLoad } = useState(false);
 // alert(id);
 const [food, setFood] = useState({
  title: "",
  img: "",
  description: "",
  usageTime: "",
  address: "",
  lat: "",
  lng: "",
 });
 const [content, setContent] = useState("");
 const [success, isSuccess] = useState(false); // 댓글 작성 성공시 스위치할 예정

 useEffect(() => {
  axios.get(`http://localhost/spring/busans/${id}`).then((result) => {
    console.log(result);
    setFood({
      title: response.MAIN_TITLE,
      img: response.MAIN_IMG_NORMAL,
      description: response.ITEMCNTNTS,
      usageTime: response.USAGE_DAY_WEEK_AND_TIME,
      address: response.ADDR1,
      lat: response.LAT,
      lng: response.LNG,
    })
    isLoad(true);
    // 1 MAIN_TITLE               : 가게이름
    // 2 MAIN_IMG_NORMAL          : 메인사진
    // 3 ITEMCTNTS                : 소개글
    // 4 USAGE_DAY_WEEK_AND_TIME  : 운영시간
    // 5 ADDR1                    : 주소
    // 6 LAT                      : 위도
    // 7 LNG                      : 경도
    if(food.lat){
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = { 
          center: new window.maps.LatLng(response.LAT, response.LNG), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
      };

      var map = new window.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      // 마커가 표시될 위치입니다 
      var markerPosition  = new window.maps.LatLng(response.LAT, response.LNG); 

      // 마커를 생성합니다
      var marker = new window.maps.Marker({
          position: markerPosition
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    }
  });
 }, [food.lat, isLoad]);

 const submitHandler = () => {
  e.preventDefault();

  if(content.trim() === ""){
    alert("내용을 입력해주세요");
    return;
  }
  /*
    정규표현식 활용~~
  */

  axios.post(`http://localhost/spring/busan/comments${id}`,{
    sqe: id,
    content: content,
  }).then((result) => {
    console.log(result);
    setContent("");
    isSuccess(!success);
  });
 };

 const contentHendler = e => {
  setContent(e.target.value);
 }

 if(!load){
  return (
    <StyledWrap>
      <StyledTitle>음식점을 조회중입니다.</StyledTitle>
    </StyledWrap>
  );
 }

 const navi = useNavigate();

 return(
    <>
      <StyledWrap>
        <StyledTitl>{food.title}</StyledTitl>
        <StyledMainImg>src={food.img}</StyledMainImg>
        <StyledDescription>{food.description}</StyledDescription>
        <StyledOther>{food.address}</StyledOther>
        <StyledOther>{food.usageTime}</StyledOther>
        <StyledMap id="map"></StyledMap>
        <StyledMoreButton onClick={() => navi(-1)}>뒤로가기</StyledMoreButton>
      </StyledWrap>
      <div style={{ width: "50%", margin: "auto", height: "600px" }}>
        <form onSubmit={submitHandler}>
          <input type="text" onChange={contentHendler} placeholder="후기를 남겨주세요" value={content}/>
          <button>후기 남기기</button>
        </form>
      </div>
      <CommentList id={id} success={success} />
    </>
 )

    return <>안녕 나는 상세보기 페이지야</>;
};

export default FoodDetail;