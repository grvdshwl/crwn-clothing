import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleDiv = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ItemsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const CollectionItemDiv = styled.div`
  margin-bottom: 30px;
`;
