import { graphql, useStaticQuery } from 'gatsby';

export const useHomeContent = () => {
  const { allHomeContentCsv: { nodes } } = useStaticQuery(graphql`
    query {
      allHomeContentCsv {
        nodes {
          title
          subtitle
          slug
          backgroungPicture
          isInMenu
        }
      }
    }
  `);

  return nodes;
};

export default useHomeContent;