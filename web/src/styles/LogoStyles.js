import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  display: inline-block;
  max-width: 200px;
  svg {
    font-size: 4rem;
    path {
      stroke: white !important;
    }
  }
`;
