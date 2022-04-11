/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const VideoListCard = ({videoUrls}) => {
  return (
    <>
      {videoUrls.map((video, index) => (
        <>
          <iframe
            css={css`
              margin-left: 1rem;
              margin-top: 1rem;
              background-image: linear-gradient(270deg, lightgrey, grey, lightgrey, grey);
              @media (max-width: 768px) {
                margin-left: 0rem;
              }
              background-size: 600% 600%;
              animation: changeColor 3s ease infinite;
              @keyframes changeColor {
                0% {
                  background-position: 0% 50;
                }

                50% {
                  background-position: 100% 50;
                }

                100% {
                  background-position: 0% 50;
                }
              }
            `}
            src={video.url + "?modestbranding=1&&rel=0"}
            frameborder="0"
            width={350}
            height={200}
            key={index}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          ></iframe>
        </>
      ))}
    </>
  );
};
