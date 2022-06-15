import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import CheckedList from './CheckedList';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const CheckBox = ({
  handleSelectAirplane,
  handleSelectTime,
  AIRPLANE_LIST,
  AIRPLANE_TIME,
}) => {
  const [clickedTab, setClickedTab] = useState(true);

  return (
    <div>
      <CheckBoxContainer>
        <ButtonAlign>
          <SortAirplane>항공사</SortAirplane>
          <TabButton onClick={() => setClickedTab(!clickedTab)}>
            {clickedTab ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </TabButton>
        </ButtonAlign>
        <AirplaneList>
          {clickedTab &&
            AIRPLANE_LIST.map(({ id, airline, isChecked }) => (
              <ListAlign key={id}>
                <Label>
                  <CheckInput
                    type="checkbox"
                    key={id}
                    airline={airline}
                    onClick={() => handleSelectAirplane(id)}
                    defaultChecked={isChecked}
                  />
                  {airline}
                </Label>
              </ListAlign>
            ))}
        </AirplaneList>
        <SelectUl>
          <CheckedList
            handleSelectTime={handleSelectTime}
            AIRPLANE_TIME={AIRPLANE_TIME}
          />
        </SelectUl>
      </CheckBoxContainer>
    </div>
  );
};
const Align = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ButtonAlign = styled.div`
  margin-top: 8px;
  width: auto;
  ${props => props.theme.flex.flexBox('', 'center', 'space-between')}

  :hover {
    background-color: #eaecef;
  }
`;

const CheckBoxContainer = styled.div`
  width: 200px;
  height: auto;
  border-top: ${props => props.theme.borders.borderBox};
  border-bottom: ${props => props.theme.borders.borderBox};
  margin: 8px 16px 0 0;
`;

const SortAirplane = styled.div`
  margin: 16px 0;
`;

const TabButton = styled.button`
  border: none;
  background-color: transparent;
  &::hover {
    width: 200px;
    height: 32px;
    background-color: gray;
  }
`;

const AirplaneList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectUl = styled.ul`
  ${Align}
`;

const ListAlign = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 13px;
  color: #383d42;
  margin-top: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const CheckInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default CheckBox;
