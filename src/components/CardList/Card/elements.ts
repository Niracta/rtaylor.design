import styled, { css } from "styled-components";
import Img from "gatsby-image";
import { Link } from "../../Core";

export const Container = styled.li(
  () => css`
    position: relative;
    display: grid;
    width: 100%;
    min-width: 30rem;
    height: 100%;
    max-height: 30rem;
    overflow: hidden;
  `
);

export const Overlay = styled(Link)(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: none;
    color: ${theme.colors.white};
    text-decoration: none;

    &:focus {
      outline: none;
    }

    &:hover,
    &:focus {
      &:before {
        opacity: 0.4;
      }

      h3,
      span {
        opacity: 1;
      }
    }

    &::before {
      z-index: 100;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: ${theme.colors.secondary.normal};
      opacity: 0;
      transition: opacity 0.5s;
    }
  `
);

export const Preview = styled(Img)(
  () => css`
    object-fit: cover;
    object-position: center center;
  `
);

export const Title = styled.h3(
  ({ theme }) => css`
    z-index: 200;
    margin: 0;
    margin-bottom: 1rem;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.body};
    opacity: 0;
    transition: opacity 0.5s;
  `
);

export const Client = styled.span(
  ({ theme }) => css`
    z-index: 200;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.tiny};
    opacity: 0;
    transition: opacity 0.5s;
  `
);
