import { graphql, useStaticQuery } from 'gatsby';

interface IGetEducationResponse {
  title: string;
  study: string;
  details: string;
  startDate: Date;
  endDate: Date;
  visible: boolean;
}

export const GetAbout = () => {
  const about: IGetEducationResponse = useStaticQuery(
    graphql`
      query {
        allSanityEducation {
          nodes {
            title
          }
        }
      }
    `
  );
  return about;
};
