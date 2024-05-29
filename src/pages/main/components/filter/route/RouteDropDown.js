import React, {useState } from "react";
import Dropdown1 from "./DropDown1";
import Dropdown2 from "./DropDown2";
import Dropdown3 from "./DropDown3";
import Dropdown4 from "./DropDown4";
import styled from "styled-components";


function RouteDropDown() {
    const [selectedReg, setSelectedReg] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null); // 새로운 state 추가
  
    return (
        <DropBox>
        <DropDownContainerRow>
        <Start>출발</Start>
        <Dropdown1 onSelect={(reg) => setSelectedReg(reg)} />
        <Dropdown2 selectedReg={selectedReg} onSelect={(value) => setSelectedValue(value)} /> {/* onSelect prop 추가 */}
        </DropDownContainerRow>
        <DropDownContainerRow>
        <Arrive>도착</Arrive>
        <Dropdown3 onSelect={(reg) => setSelectedReg(reg)} />
        <Dropdown4 selectedReg={selectedReg} onSelect={(value) => setSelectedValue(value)} /> {/* onSelect prop 추가 */}    
        </DropDownContainerRow>
        </DropBox>
    );
  };
  

export default RouteDropDown;

const DropBox = styled.div`
margin-top: 2rem;
`

const DropDownContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Start = styled.h1`
    width: 1.875rem;
    height: 1.34488rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const Arrive = styled.h1`
    width: 1.875rem;
    height: 1.34488rem;
    flex-shrink: 0;
    color: #000;
    font-family: "Gowun Dodum";
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;