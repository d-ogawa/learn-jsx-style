/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { styled } from "@emotion/styled";

export const Emotion = () => {
  const ContainerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const TitleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });
  const ButtonStyle = css`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: #46cdcf;
      color: #fff;
      cursor: pointer;
    }
  `;
  return (
    <div css={ContainerStyle}>
      <p css={TitleStyle}>- Emotion -</p>
      <button css={ButtonStyle}>FIGHT!!</button>
    </div>
  );
};

// const SButton = styled.button`
//   background-color: #abedd8;
//   border: none;
//   padding: 8px;
//   border-radius: 8px;
//   &:hover {
//     background-color: #46cdcf;
//     color: #fff;
//     cursor: pointer;
//   }
// `;
