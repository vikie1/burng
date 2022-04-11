/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import searchIcon from "./../resources/image/24px.svg";

export const Header = ({ pageTitle }) => {
  return (
    <>
      <title>{pageTitle} | "Burn G"</title>
      <header
        css={css`
          width: 100%;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 1rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          @media (max-width: 500px) {
            display: block;
            text-align: center;
          }
        `}
      >
        <a
          href="/"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <h1>Burn G Records</h1>
        </a>
        <div
          css={css`
            display: flex;
            align-items: center;
            border: 1px solid lightgrey;
            margin-right: 5px;
            border-radius: 5px;
          `}
        >
          <input
            type="search"
            css={css`
              padding: 5px;
              border: none;
              outline: none;
              flex: 1 1 auto;
            `}
          />
          <img
            src={searchIcon}
            css={css`
              padding: 5px;
            `}
            alt="A searchIcon"
          />
        </div>
      </header>
    </>
  );
};
