/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Header } from "../components/Header";
import { VideoListCard } from "../components/VideoListCard";
import { dummyMusic } from "../data/dummyMusic";
import { useUrl } from "../data/urls";
import { useFetch } from "../hooks/useFetch";
import { useScript } from "../hooks/useScript";

export const HomePage = (props) => {
  const videoUrls = dummyMusic(); //to replace with an api call
  const { data } = useFetch(useUrl("music"));
  const ytScriptCode = `<div>
  <script src="https://apis.google.com/js/platform.js"></script>

<div class="g-ytsubscribe" data-channelid="UCX_DdS7_VRG_EahwZAzytBQ" data-layout="default" data-count="default"></div>
  </div>`;
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
          <VideoListCard
            videoUrls={data && data.length > 0 ? data : videoUrls}
          />
        </div>
      </main>
      <div css={css`position: fixed;
      width: max-content;
      bottom: 15px;
      right: 10px;`}>
        <div>{useScript("https://apis.google.com/js/platform.js")}</div>
        <div
          class="g-ytsubscribe"
          data-channelid="UCX_DdS7_VRG_EahwZAzytBQ"
          data-layout="full"
          data-theme="light"
          data-count="default"
        ></div>
        <div css={css`padding: 10px;`}>{useScript("https://apis.google.com/js/platform.js")}</div>
        <div
          class="g-ytsubscribe"
          data-channelid="UCwphTi43eiDFhC-QFMFLJMA"
          data-layout="full"
          data-theme="light"
          data-count="default"
        ></div>
      </div>
    </>
  );
};
