import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as variable from './Variables';

const StyledHeaderBlock = styled.div`
  width: 100%;
  height: 5rem;
  background: white;
  border-bottom: 1px solid lightgray;
`;

const MainHeaderWrapper = styled.div`
  margin: 0 auto;
  height: 5rem;
  display: flex;
  max-width: 1440px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  // line-height: 5rem;
  // font-size: 1.5rem;
  // font-weight: bold;
  // color: black;
  // text-decoration: none;
  // &:hover {
  //   color: gray;
  // }
`;

const Categories = styled.ul`
  margin-left: 10rem;
  font-size: 1rem;
  @media (max-width: 1120px) {
    margin-left: 7rem;
    font-size: 0.9rem;
  }
  @media (max-width: 840px) {
    margin-left: 5rem;
    font-size: 0.8rem;
  }
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Category = styled.li`
  width: 10rem;
  font-size: 1rem;
  @media (max-width: 1120px) {
    width: 7rem;
    font-size: 0.9rem;
  }
  @media (max-width: 840px) {
    width: 5rem;
    font-size: 0.8rem;
  }
  line-height: 3rem;
  text-align: center;
  color: gray;
  display: block;
  z-index: 100;
  &:hover {
    color: blue;
    font-weight: bold;
  }
`;

const SubMenus = styled.ul`
  width: 10rem;
  font-size: 1rem;
  font-weight: normal;
  @media (max-width: 1120px) {
    width: 7rem;
    font-size: 0.9rem;
  }
  @media (max-width: 840px) {
    width: 5rem;
    font-size: 0.8rem;
  }
  padding: 0;
  position: absolute;
  background: white;
  transition: 0.5s;
  display: none;
  
  ${Category}:hover & {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const SubMenu = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: gray;
  &:hover {
    font-weight: bold;
  }
  ${SubMenus} & {
    border-bottom: 1px solid gainsboro;
  }
`;

const Header = () => {
  return (
    <div>
      <StyledHeaderBlock>
        <MainHeaderWrapper>
          <Logo to='/'>
            <img src="/images/index/Logo.jpg" alt="홈"/>
          </Logo>
          <Categories>
            {/* <Category>회사 소개
              <SubMenus>
                <SubMenu>인사말</SubMenu>
                <SubMenu>연혁</SubMenu>
                <SubMenu>보유 설비</SubMenu>
              </SubMenus>
            </Category> */}
            <Category>방화문
              <SubMenus>
                {/* <SubMenu to='/firedoor/index'>방화문 소개</SubMenu> */}
                <SubMenu to='/firedoor'>제품 종류</SubMenu>
              </SubMenus>
            </Category>
            <Category>스텐부속
              <SubMenus>
                {Object.keys(variable.stainless).map((e, index) => (
                    <SubMenu key={index} to={'/stainless/' + e}>{variable.stainless[e]}</SubMenu>
                  ))}
              </SubMenus>
            </Category>
            <Category>샷시부속
              <SubMenus>
                {Object.keys(variable.sash).map((e, index) => (
                    <SubMenu key={index} to={'/sash/' + e}>{variable.sash[e]}</SubMenu>
                  ))}
              </SubMenus>
            </Category>
            <Category>
                <SubMenu to='/lexan'>렉산</SubMenu>
            </Category>
            <Category>
                <SubMenu to='/document'>자료실</SubMenu>
            </Category>
            <Category>
              <SubMenu to='/location'>오시는 길</SubMenu>
            </Category>
          </Categories>
        </MainHeaderWrapper>
      </StyledHeaderBlock>
    </div>
  );
};

export default Header;
