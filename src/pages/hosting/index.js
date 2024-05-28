import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar"
import CommonButton from "../../components/CommonButtonHY"
import HostingPage from "./components/title";

const Hosting = () => {
  const navigate = useNavigate();
  const [postNumber, setPostNumber] = useState(0);

  useEffect(() => {
    // 이전에 저장된 게시글 번호 가져오기
    const savedPostNumber = localStorage.getItem("postNumber");
    if (savedPostNumber) {
      setPostNumber(parseInt(savedPostNumber));
    }
  }, []);

  const handleInfoComplete = () => {
    // 새로운 게시글이 추가될 때마다 게시글 번호 증가
    setPostNumber((prevNumber) => prevNumber + 1);
    // localStorage에 새로운 게시글 번호 저장
    localStorage.setItem("postNumber", postNumber + 1);
    // '/list' 페이지로 이동
    navigate("/list");
  };


    return (
        <Container>
            <ContentWrapper>

            <AppBarWrapper>
                <AppBar />
            </AppBarWrapper>

            <PostNumber>게시글 번호: {postNumber}</PostNumber>

              <HostingPage/>
           
            </ContentWrapper>

            <ButtonWrapper>
            <CommonButton text = {'정보 입력 완료'} onClick={handleInfoComplete} />
            </ButtonWrapper>

         </Container>
    );
};


const Container = styled.div`
  width: 390px;
  height: 1750px;
  background-color: #F6FCFF;
  display: flex;
  flex-direction: column;
  align-items:center;
  positon: relative;
  overflow-x: hidden;
  overflow-y: auto;
  margin: auto;
`;
const ContentWrapper = styled.div`
  width : 100%;
  max-width: 800px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  padding: 0rem 0rem 1rem 0rem;
  margin-bottom: 1rem;
`;

const AppBarWrapper =styled.div`
 width: 100%
 flex-shrink:0;
`;

const PostNumber = styled.h1`
width: 100%
height: 2rem;
flex-shrink: 0;
font-size: 1.375rem;
margin:0.4rem 0;
padding: 1rem 0rem 0rem 1rem;
color: #000;
font-family: "Gowun Batang";
`


const ButtonWrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 2rem;
  justify-content: center;
`;


export default Hosting;