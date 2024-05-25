import styled from "styled-components";

const InfoBox = ({content}) => {
    return(
        <Box>
            <Content>{content}</Content>
        </Box>
    );
};

export default InfoBox;

const Box = styled.div`
width: 20.625rem;
height: 25.875rem;
padding: 1.75rem 1.5rem 1.75rem 1.5rem;
margin: 0rem 2rem 0rem 2rem;
flex-shrink: 0;
background: #D9F0FC;
border-radius: 1rem;
border: 3px solid #164863;

`

const Content = styled.div`
width: 16.98763rem;
height: 22.417rem;
transform: rotate(0.075deg);
flex-shrink: 0;
margin-top: 1.75rem;
color: #000;
text-align: center;
font-family: "Gowun Batang", serif;
font-size: 1.375rem;
font-style: normal;
font-weight: 700;
line-height: normal;
white-space: pre-line;


`