
import styled from "styled-components";

const Select = ({ options, selectedOption, onOptionClick }) => {
  return (
    <SelectWrapper>
      <ButtonContainer>
        {options.map(option => (
          <OptionButton
            key={option}
            active={selectedOption === option}
            onClick={() => onOptionClick(option)}
          >
            {option}
            {selectedOption === option && <OptionText>✔</OptionText>}
          </OptionButton>
        ))}
      </ButtonContainer>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 0.88rem;
`;

const OptionButton = styled.button`
  width: 164px;
  height: 61px;
  flex-shrink: 0;
  border: 1px solid #9BBEC8;
  border-radius: 10px;
  background: rgba(210, 236, 250, 0.00);
  cursor: pointer;
  color: #000000;

  ${props => props.active && `
    background-color: #003E5F;
    color: #ffffff;
  `}

  &:hover {
    background-color: #003E5F;
    color: #ffffff;
  }
`;

const OptionText = styled.span`
  margin-left: 10px;
`;

export default Select;
