/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Header } from "../components/Header";
import { VideoListCard } from "../components/VideoListCard";

export const HomePage = (props) => {
  return (
    <>
      <Header pageTitle={"Home Page"} />
      <main>
        <div
          css={css`
            @media (max-width: 768px) {
              text-align: center;
            }
            padding-bottom: 4rem;
          `}
        >
          <VideoListCard />
        </div>
      </main>
    </>
  );
};
