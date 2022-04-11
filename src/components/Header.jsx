/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import searchIcon from "./../resources/image/24px.svg";

export const Header = ({ pageTitle, videoUrls }) => {

  // Run this method when a search bar option is clicked
  const handleOptionClick = (video) => {
      console.log(video)
  }
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
            margin: auto 5px;
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
            id="musicSearchItems"
            list="musicSearch"
          />
          <img
            src={searchIcon}
            css={css`
              padding: 5px;
              cursor: pointer;
            `}
            alt="A searchIcon"
          />
          <datalist id="musicSearch">
          {videoUrls.map((video, index) => (
            <option value={video.name} key={index} onClick={e => handleOptionClick(video)}></option>
          ))}
          </datalist>
        </div>
      </header>
    </>
  );
};
