import React from "react";
import styled, { css } from "styled-components";

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 3rem 0 2rem;
  border-radius: 0.05rem;
  color: #71b0c5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;
export const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DivContainer = styled.div`
  padding: 10px;
  padding-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const PlanTitle = styled.div`
  font-size: 1.23rem;
`;

export const FeatureListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.325rem;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 2.4em; /*라인수에서 라인 하이트 곱하기한 값: 총 높이*/
  width: 25em;
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  margin-bottom: 2rem;

  margin-right: 10px;
`;

export const BackgroundSqure = styled.div`
  position: absolute;
  z-index: 3;
  top: 52%;
  left: 0%;
  width: 200%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
`;

export const Align = styled.div`
  display: flex;
  align-items: center;
`;

export const StackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const DateAndLocationContainer = styled.div`
  padding-right: 10px;
`;
