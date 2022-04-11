/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { dummyMusic } from "../data/dummyMusic";

export const VideoListCard = () => {
  const videoUrls = dummyMusic(); //to replace with an api call
  console.log(videoUrls);
  return (
    <>
      {videoUrls.map((video, index) => (
        <>
          <iframe
            css={css`
              margin-left: 1rem;
              padding-top: 1rem;
              @media (max-width: 768px) {
                margin-left: 0rem;
              }
            `}
            src={video.url}
            frameborder="0"
            width={350}
            height={200}
            key={index}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </>
      ))}
    </>
  );
};
