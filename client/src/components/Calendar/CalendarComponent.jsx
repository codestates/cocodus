import React, { useState, useEffect } from "react";
import Select from "react-select";
import styled from "styled-components";
import { postData } from "../../Store/postData-zustand";
import { registerStore } from "../../Store/Register-zustand";
function CalendarComponent(props) {
  const { year, hour, minute, chgYear, chgHour, chgMin } = registerStore();
  const { specificdata } = postData();
  useEffect(() => {
    if (specificdata.length) {
      let temp = specificdata[0].jsonfile.date.split(" ");
      chgYear(
        temp[0] +
          " " +
          (temp[1].length > 2 ? temp[1] : "0" + temp[1]) +
          " " +
          temp[2]
      );
      chgHour(temp[3] === "오전" ? temp[4] : +temp[4].split("시")[0] + 12);
      if (temp[5]) {
        chgMin(
          temp[5].split("분")[0].length === 1
            ? "0" + temp[5].split("분")[0]
            : temp[5].split("분")[0]
        );
      }
    }
  }, []);
  // 당일로부터 14일 이후까지만의 날짜를 Select의 값으로 전해주기위함
  let dateOptions = [];
  for (let i = 0; i < 14; i++) {
    let obj = {};
    let today = new Date();
    let dates = new Date(today.setDate(today.getDate() + i));
    let year = dates.getFullYear();
    let month = dates.getMonth() + 1;
    let date = dates.getDate();
    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    let fulldate = `${year}년 ${month}월 ${date}일`;
    obj.value = fulldate;
    obj.label = fulldate;
    dateOptions.push(obj);
  }

  let timeOptions = [];
  for (let i = 0; i < 24; i++) {
    let obj = {};
    if (i < 10) {
      i = `0${i}`;
    }
    obj.value = i;
    obj.label = i;
    timeOptions.push(obj);
  }

  let minuteOptions = [{ value: "00", label: "00" }];
  for (let i = 5; i < 60; i = i + 5) {
    let obj = {};
    if (i === 5) {
      obj.value = `0${i}`;
      obj.label = `0${i}`;
    } else {
      obj.value = `${i}`;
      obj.label = `${i}`;
    }
    minuteOptions.push(obj);
  }

  //React-select style
  const customStyles = (value) => ({
    control: (provided, state) => ({
      ...provided,
      alignItems: "baseline",
      backgroundColor: value ? "gray" : "white",
      border: "1px solid #ced4da",
      borderRadius: "10px",
    }),
  });

  const yearChange = (value) => {
    chgYear(value.value);
  };
  const hourChange = (value) => {
    chgHour(value.value);
  };
  const minuteChange = (value) => {
    chgMin(value.value);
    // console.log(value.value);
  };
  return (
    <FlexBox>
      <Div right="1rem">날짜</Div>
      <SelectTag
        className="date-selectbox"
        options={dateOptions}
        value={dateOptions.find((op) => {
          return op.value === year;
        })}
        onChange={yearChange}
        placeholder="0000-00-00"
        styles={customStyles}
        right="1rem"
      />

      <Select
        className="time-selectbox"
        options={timeOptions}
        value={timeOptions.find((op) => {
          return op.value === hour;
        })}
        onChange={hourChange}
        placeholder="00"
        styles={customStyles}
      />
      <Div left="0.25rem" right="0.75rem">
        시
      </Div>
      <Select
        className="minute-selectbox"
        options={minuteOptions}
        value={minuteOptions.find((op) => {
          return op.value === minute;
        })}
        onChange={minuteChange}
        placeholder="00"
        styles={customStyles}
      />
      <Div left="0.25rem">분</Div>
    </FlexBox>
  );
}

export const FlexBox = styled.div`
  display: flex;
`;

export const Div = styled.div`
  margin-right: ${(props) => props.right};
  margin-left: ${(props) => props.left};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  padding: 0.25rem;
`;

export const SelectTag = styled(Select)`
  margin-right: ${(props) => props.right};
`;

export default CalendarComponent;
