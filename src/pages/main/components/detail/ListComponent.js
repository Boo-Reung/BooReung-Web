import React from "react";
import styled from "styled-components";

const ListComponent = () => {
    return(
        <Container>
            <Title/>
            <RowContainer>
                <Type/>
                <ClientGender/>
            </RowContainer>
            <Route></Route> {/* json에서 key값이 출발지는 dept 도착지는 dest */}
            <CarpoolDate/>
        </Container>

    );
};

export default ListComponent
