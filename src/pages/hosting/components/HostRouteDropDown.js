import React, { useState } from "react";
import HostDropdown1 from "./HostDropDown1";
import HostDropdown2 from "./HostDropDown2";
import HostDropdown3 from "./HostDropDown3";
import HostDropdown4 from "./HostDropDown4";
import styled from "styled-components";

function HostRouteDropDown({ updateDeptSelection, updateDestSelection }) { // updateDestSelection을 추가
  const [selectedReg, setSelectedReg] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleDeptSelect = (value) => {
    setSelectedValue(value);
    updateDeptSelection(value); // 선택된 값을 부모 컴포넌트로 전달
  };

  const handleDestSelect = (value) => {
    setSelectedValue(value);
    updateDestSelection(value); // 선택된 값을 부모 컴포넌트로 전달
  };

  return (
    <DropBox>
      <DropDownContainerRow>
        <Start>출발</Start>
        <HostDropdown1 onSelect={(reg) => setSelectedReg(reg)} />
        <HostDropdown2 selectedReg={selectedReg} onSelect={handleDeptSelect} />
      </DropDownContainerRow>
      <DropDownContainerRow>
        <Arrive>도착</Arrive>
        <HostDropdown3 onSelect={(reg) => setSelectedReg(reg)} />
        <HostDropdown4
          selectedReg={selectedReg}
          onSelect={handleDestSelect} // 여기를 수정하여 handleDestSelect를 사용합니다.
        />
      </DropDownContainerRow>
    </DropBox>
  );
}

export default HostRouteDropDown;

const DropBox = styled.div`
  margin-top: 2rem;
`;

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

