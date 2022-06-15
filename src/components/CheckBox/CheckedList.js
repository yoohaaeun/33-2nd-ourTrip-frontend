import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const CheckedList = ({ handleSelectTime, AIRPLANE_TIME }) => {
  const [clickedTab, setClickedTab] = useState(true);

  return (
    <BoxAlign>
      <TimeBoxAlign>
        <ButtonAlign>
          <TextDepartTime>출발 시간</TextDepartTime>
          <TabButton onClick={() => setClickedTab(!clickedTab)}>
            {clickedTab ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </TabButton>
        </ButtonAlign>
        {clickedTab &&
          AIRPLANE_TIME.map(({ id, timefilter }) => (
            <ListAlign key={id}>
              <Label>
                <CheckInput
                  type="checkbox"
                  key={id}
                  onClick={() => handleSelectTime(id)}
                />
                {timefilter}
              </Label>
            </ListAlign>
          ))}
      </TimeBoxAlign>
    </BoxAlign>
  );
};

const BoxAlign = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0;
`;

const TimeBoxAlign = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0;
  padding-top: 14px;
  border-top: ${props => props.theme.borders.borderBox};
`;

const ButtonAlign = styled.div`
  margin-top: 8px;
  width: auto;
  ${props => props.theme.flex.flexBox('', 'center', 'space-between')}

  :hover {
    background-color: #eaecef;
  }
`;

const TextDepartTime = styled.div`
  margin: 8px 0;
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
  /* accent-color: #4b97e6; */

  &:hover {
    cursor: pointer;
  }
`;

export default CheckedList;
