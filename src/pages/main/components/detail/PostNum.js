import React from "react";
import styled from "styled-components";

const PostNumber = ({id}) => {
    const formattedPostnum = `게시글 번호 : ${id}`;

    return(
        <Container>
            <PostNum>{formattedPostnum}</PostNum>
        </Container>
    );
};

const Container = styled.div`

`;

const PostNum = styled.div`
    width: 16.4375rem;
    height: 2rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Batang";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export default PostNumber