/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Header } from "../components/Header";
import { VideoListCard } from "../components/VideoListCard";
import { dummyMusic } from "../data/dummyMusic";

export const HomePage = (props) => {
  const videoUrls = dummyMusic(); //to replace with an api call
  return (
    <>
      <Header pageTitle={"Home Page"} videoUrls={videoUrls} />
      <main>
        <div
          css={css`
            @media (max-width: 768px) {
              text-align: center;
            }
            padding-bottom: 4rem;
          `}
        >
          <VideoListCard videoUrls={videoUrls}/>
        </div>
      </main>
    </>
  );
};
