import styled from "styled-components";

import SVG from "react-inlinesvg";

export const ThemeSwitchWrapper = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`;

export const Moon = styled(SVG)<{ color: string }>`
  & path {
    fill: ${(props) => props.color};
  }
`;

export const Sun = styled(SVG)<{ color: string }>`
  & path {
    fill: ${(props) => props.color};
  }
`;
