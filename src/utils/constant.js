export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PHOTO_URL =
  "https://media.licdn.com/dms/image/D5603AQEwMPEYHXZzmA/profile-displayphoto-shrink_400_400/0/1698630644090?e=1704931200&v=beta&t=C4J1iDkZkLfmIZnkCvRc9nf_jtj28A2towRdfcrxQHE";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_BEARRER_KEY,
  },
};
export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const multiLang = [
  { identifier: "en", name: "English" },
  {
    identifier: "hin",
    name: "Hindi",
  },
  {
    identifier: "sp",
    name: "Spanish",
  },
];
