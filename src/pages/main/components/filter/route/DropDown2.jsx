import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px; /* 고정된 너비 설정 */
`;

const ToggleButton = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 0.625rem;
  border: 1px solid #9BBEC8;
  background-color: #f0f0f0;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%; /* 부모 요소와 같은 너비로 설정 */
  max-height: 200px; /* 고정된 높이 설정 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 표시 */
  z-index: 1;
`;

const MenuItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown2 = ({ selectedReg, onSelect }) => {
  const StationList = [
    { num: '001', reg: '판교, 서현 거점 노선', value: '판교역북편' },
    { num: '002', reg: '판교, 서현 거점 노선', value: '이매촌한신' },
    { num: '003', reg: '경기광주역', value: '경기광주역 1번출구 택시승강장' },
    { num: '007', reg: '캠퍼스간', value: '백년관 앞' },
    { num: '008', reg: '캠퍼스간', value: '기숙사 사거리 앞' },
    { num: '009', reg: '캠퍼스간', value: '인문경상관' },
    { num: '010', reg: '캠퍼스간', value: '지석묘 앞' },
    { num: '011', reg: '캠퍼스간', value: '외대사거리 앞' },
    { num: '012', reg: '캠퍼스간', value: '서울캠퍼스 본관' },
    { num: '013', reg: '이문, 망우, 남양주 노선', value: '서울캠퍼스 본관' },
    { num: '014', reg: '이문, 망우, 남양주 노선', value: '망우역 건너편 큰맘할매순대국' },
    { num: '015', reg: '이문, 망우, 남양주 노선', value: '도농역 동화고 정문 앞 버스정류장' },
    { num: '016', reg: '이문, 망우, 남양주 노선', value: '양정역 버스정류장' },
    { num: '017', reg: '이문, 망우, 남양주 노선', value: '한국애니메이션고교 건너편 버스정류장' },
    { num: '018', reg: '이문, 돌곶이 노선', value: '서울캠퍼스 본관' },
    { num: '019', reg: '이문, 돌곶이 노선', value: '6호선 돌곶이역 5번출구 앞' },
    { num: '020', reg: '이문, 돌곶이 노선', value: '6호선 석계역 4번출구' },
    { num: '021', reg: '이문, 돌곶이 노선', value: '6호선 태릉입구역 7번출구' },
    { num: '022', reg: '이문, 돌곶이 노선', value: '양정역 버스정류장' },
    { num: '023', reg: '노원, 구리 노선', value: '노원역 4번 출구' },
    { num: '024', reg: '노원, 구리 노선', value: '구리롯데백화점' },
    { num: '025', reg: '광화문 노선', value: '광화문역 1번출구' },
    { num: '026', reg: '광화문 노선', value: '경복궁역 6번출구' },
    { num: '027', reg: '신길 노선', value: '1호선 신길역 1,2번출구' },
    { num: '028', reg: '삼성 수서 노선', value: '삼성역 3번출구' },
    { num: '029', reg: '삼성 수서 노선', value: '대치동 은마아파트 강남나무병원 앞' },
    { num: '030', reg: '삼성 수서 노선', value: '수서역 1-1번출구 서울의료원셔틀버스정류장' },
    { num: '031', reg: '강남역 노선', value: '양재역' },
    { num: '032', reg: '강남역 노선', value: '강남역' },
    { num: '033', reg: '잠실, 천호, 하남 노선', value: '잠실역 10번출구' },
    { num: '034', reg: '잠실, 천호, 하남 노선', value: '천호역 6,7번 출구 사이' },
    { num: '035', reg: '잠실, 천호, 하남 노선', value: '강동세무서 버스정류장' },
    { num: '036', reg: '잠실, 천호, 하남 노선', value: '둔촌고등학교' },
    { num: '037', reg: '잠실, 천호, 하남 노선', value: '강동자이아파트' },
    { num: '038', reg: '잠실, 천호, 하남 노선', value: '상일초등학교' },
    { num: '039', reg: '잠실, 천호, 하남 노선', value: '하남시청' },
    { num: '040', reg: '일산 노선', value: '마두역 4번출구' },
    { num: '041', reg: '일산 노선', value: '대곡역' },
    { num: '042', reg: '일산 노선', value: '고양경찰서' },
    { num: '043', reg: '일산 노선', value: '디지털미디어시티역' },
    { num: '044', reg: '부평 노선', value: '큰맘할매순대국 부평북부역점' },
    { num: '045', reg: '범계 노선', value: '범계역 1번출구' },
    { num: '046', reg: '안산 노선', value: '안산중앙역 1번출구' },
    { num: '047', reg: '수원 노선', value: '수원역 9번출구' },
    { num: '048', reg: '수원 노선', value: '장안공원 정류장' },
    { num: '049', reg: '수원 노선', value: '우만주공 4단지 앞 정류장' },
    { num: '050', reg: '수지 노선', value: '수지지역난방공사 앞 정류장' },
    { num: '051', reg: '수지 노선', value: '수지구청' },
    { num: '052', reg: '수지 노선', value: '풍덕천삼거리정류장 용인포은아트홀' },
    { num: '053', reg: '수지 노선', value: '한신아파트 정류장' },
    { num: '054', reg: '수지 노선', value: '동부아파트 정류장' },
    { num: '055', reg: '신갈 노선', value: '신갈굴다리 정류장' },
    { num: '056', reg: '신갈 노선', value: '상갈파출소 앞' },
    { num: '057', reg: '신갈 노선', value: '기흥역' },
    { num: '058', reg: '신갈 노선', value: '강남대역' },
    { num: '059', reg: '신갈 노선', value: '쌍용아파트 앞' },
    { num: '060', reg: '신갈 노선', value: '코업호텔 앞' },
    { num: '061', reg: '신갈 노선', value: '명지대 입구' },
    { num: '062', reg: '신갈 노선', value: '용인터미널' },
    { num: '063', reg: '신갈 노선', value: '송담대역' },
    { num: '064', reg: '신갈 노선', value: '유림동 정류장' }
  ];
  const filteredValues = StationList.filter((item) => item.reg === selectedReg);
  const [selectedValue, setSelectedValue] = useState('');
  const [menuVisible, setMenuVisible] = useState(false); // 초기값은 false로 설정하여 메뉴가 숨겨져 있는 상태

  const handleValueSelect = (value) => {
    setSelectedValue(value); // 선택된 값을 상태로 설정
    onSelect(value); // 선택된 값을 부모 컴포넌트로 전달
    setMenuVisible(false); // 값을 선택한 후에는 메뉴를 숨김
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // 메뉴의 가시성을 토글
  };

  return (
    <DropdownContainer>
      <ToggleButton onClick={toggleMenu}>
        <span style={{ whiteSpace: 'pre-wrap' }}>{selectedValue || '정류장을\n선택하세요'}</span>
        <span>{'⌄'}</span>
      </ToggleButton>
      <DropdownMenu show={menuVisible}>
        {filteredValues.map((item) => (
          <MenuItem
            key={item.num}
            onClick={() => handleValueSelect(item.value)}
          >
            {item.value}
          </MenuItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown2;
