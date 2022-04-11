/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Header = ({ pageTitle }) => {
  return (
    <>
      <title>{pageTitle} | "Burn G"</title>
      <header
        css={css`
          width: 100%;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        `}
      >
        <h1>Burn G Records</h1>
      </header>
    </>
  );
};
