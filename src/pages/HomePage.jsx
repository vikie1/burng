/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Header } from "../components/Header";
import { VideoListCard } from "../components/VideoListCard";
import { dummyMusic } from "../data/dummyMusic";
import { useUrl } from "../data/urls";
import { useFetch } from "../hooks/useFetch";

export const HomePage = (props) => {
  const videoUrls = dummyMusic(); //to replace with an api call
  const { data } = useFetch(useUrl('music'));
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
          <VideoListCard videoUrls={(data && data.length > 0) ? data : videoUrls}/>
        </div>
      </main>
    </>
  );
};
