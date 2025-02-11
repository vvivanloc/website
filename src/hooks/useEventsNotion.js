import { graphql, useStaticQuery } from 'gatsby';

export const useEventsNotion = () => {
  const { allNotionDatabase: { nodes } } = useStaticQuery(graphql`
    query { 
      allNotionDatabase(filter: {title: {eq: "meetups_full"}}) {
        nodes {
          childrenNotionPage {
            title
            childrenMarkdwonDescriptionFromNotion {
              childrenMarkdownRemark {
                htmlAst
              }
            }
            properties {
              Date {
                date {
                  start
                }
              }
              Status {
                select {
                  name
                }
              }
              meetupLink {
                url
              }
              meetupid {
                number
              }
              place {
                rich_text {
                  text {
                    content
                  }
                }
              }
              description {
                rich_text {
                  plain_text
                }
              }
              videoLink {
                url
              }
            }
            childMarkdwonDescriptionFromNotion {
              childrenMarkdownRemark {
                htmlAst
              }
            }
          }
        }
      }
    }
  `);

  const [{ childrenNotionPage }] = nodes;

  return childrenNotionPage.map(({ title, childrenMarkdwonDescriptionFromNotion, properties }) => ({
    meetupid: properties.meetupid?.number,
    title,
    status: properties.Status?.select?.name,
    descriptionRawString: properties.description?.rich_text?.map(({ plain_text }) => plain_text).join(''),
    descriptionHtmlAst: childrenMarkdwonDescriptionFromNotion[0]?.childrenMarkdownRemark[0]?.htmlAst,
    date: properties.Date?.date?.start,
    meetupLink: properties.meetupLink?.url,
    videoLink: properties.videoLink?.url,
  }));
};

export default useEventsNotion;