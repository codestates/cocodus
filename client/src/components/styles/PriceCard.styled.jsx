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
`;

export const PlanTitle = styled.div`
  font-size: 1.23rem;
`;

export const FeatureListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.325rem;
`;

export const ActionButton = styled.div`
  flex: 0 0 auto;
  height: 40px;
  padding: 0 2rem;
  border: 0;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  margin-bottom: 2rem;
  border-radius: 50%;
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
