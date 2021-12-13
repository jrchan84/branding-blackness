import styled from 'styled-components';

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `
}

export const Grid = styled.div`

`;

export const Row = styled.div`
  padding: 5px;
  border: 5px solid green;
  display: flex;
`;

export const Col = styled.div`
  padding: 5px;
  border: 5px solid blue;
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`
    display: none;
    `)};
`;
