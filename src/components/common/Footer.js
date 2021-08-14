import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  padding: 1rem 2rem;
  margin-top: 2rem;
  border-top: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
  justify-content: center;
`;

// const StoreName = styled.div`
//   font-weight: bold;
//   font-size: 1.5rem;
//   padding: 1rem;
// `;

const StoreDesciption = styled.div`
  color: gray;
  & + &:before {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    content: '\\7C';
  }
`;

const Footer = () => {
  const data = [
    "회사명 : 주식회사 강남산업",
    "대표전화 : 032-572-2428",
    "FAX : 032-574-5121",
    "EMAIL : 0325722428@naver.com",
    "사업자등록번호 : 137-86-45244",
    "주소 : 인천광역시 서구 길주로 34 / 인천 서구 석남동 222-9",
    "COPYRIGHT © 2016 (주)강남산업",
    "ALL RIGHTS RESERVED",
  ];
  return (
    <FooterBlock>
        {data.map((elem, index) => (
          <StoreDesciption key={index}>
            {elem}
          </StoreDesciption>
        ))}
    </FooterBlock>
  );
};

export default Footer;