import { css } from "@emotion/react";

export const cardContainer = css`
  display: flex;
  padding: 2rem 0;

  img {
    width: 500px;
    height: 300px;
    border-radius: 5px;
  }

  iframe {
    width: 500px;
    height: 300px;
    border-radius: 5px;
  }

  .details {
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 40%;
  }
`;
