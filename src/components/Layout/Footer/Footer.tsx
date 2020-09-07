import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "./elements";

const query = graphql`
  query Footer {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

interface QueryResult {
  site: {
    siteMetadata: {
      author: string;
    };
  };
}

export const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { author }
    }
  }: QueryResult = useStaticQuery(query);

  return (
    <Container>
      <p>This site serves as a self-promotional creative portfolio for {` ${author}`} and as such all content displayed herein constitutes fair use under applicable law. All trademarks and rights are retained by their respective owners. {` © ${new Date().getFullYear()} ${author}`}.</p>
    </Container>
  );
};
