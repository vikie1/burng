import { css } from "@emotion/react";

export const Header = ({ pageTitle }) => {
  return (
    <>
      <title>"Burn G" | {pageTitle}</title>
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
