import styled from 'styled-components';

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `
}

export const CGrid = styled.div`

`;

export const CRow = styled.div`
  display: flex;
`;

export const CCol = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
    `)};
`;
