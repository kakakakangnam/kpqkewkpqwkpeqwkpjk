import React from 'react';
import styled from 'styled-components';
import Firedoor from './Firedoor';
import Banner from '../common/Banner';

const FiredoorListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Firedoors = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const CategoryWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: gray;
  height: 5rem;
`;

const FiredoorList = () => {
  const titles = [
    "KNF_174A", "KNF_301", "KNF_68", "KNF_308", "KNF_65", 
    "KNF_67", "KNF_63", "KNF_09", "KNF_111A", "KNF_109B", 
    "KNF_124A", "KNF_124B", "KNF_180", "KNF_304A", "KNF_304B",
    "KNF_304C", "WS_112A", "FSD_84", "FSD_85", "FSD_87",
    "WS_119A", "WS_123", "WS_119B", "KNS_50", "WS_181",
    "KN_301", "KNM_12", "KNM_10", "FSD_72", "KNF_124C",
    "FSD_82", "KNM_07", "W_184", "W_183", "W_166",
    "W_164", "W_167", "W_190", "W_165", "W_154",
    "W_188", "W_133", "W_151", "W_146", "KNB_05",
    "W_155", "KN_4131", "W_150", "KN_4130", "KN_0800",
    "KN_0801", "KN_0802", "KNC_58", "KNB_02", "KNB_04",
    "KN_121", "KN_122", "KN_123", "KN_124", "KN_126",
    "KN_127", "KN_128", "KN_131", "KN_133", "KN_140",
  ];
  return (
    <FiredoorListBlock>
      <Banner />
      <CategoryWrapper>방화문</CategoryWrapper>
      <Firedoors>
        {titles.map((title, index) => (
          <Firedoor title={title} key={index}/>
        ))}
      </Firedoors>
    </FiredoorListBlock>
  );
};

export default FiredoorList;