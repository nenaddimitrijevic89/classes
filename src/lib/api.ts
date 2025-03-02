import axios from "axios";

export const STRAPI_API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  timeout: 30000,
  headers: {},
});

export const getCategories = async () => {
  const response = await STRAPI_API.get("/categories?populate=*");

  return response.data;
};

export const getClasses = async () => {
  const response = await STRAPI_API.get("/classes");

  return response.data;
};

export const getAllClasses = async () => {
  const response = await STRAPI_API.get(
    "/classes?pagination[limit]=-1&populate=*&sort=title:asc"
  );

  return response.data;
};

export const getGyms = async () => {
  const response = await STRAPI_API.get("/gyms");

  return response.data;
};

// export const getTimetables = async () => {
//   const response = await STRAPI_API.get("/timetables");
//   console.log(response, "timetables");
//   return response.data;
// };

// export const getCategoryBySlug = async (slug: string) => {
//   const response = await STRAPI_API.get(
//     `/categories?filters[slug][$eq]=${slug}&populate=*`
//   );
//   console.log(response, "category");
//   return response.data;
// };

export const getClassesByCategory = async (categorySlug: string) => {
  const response = await STRAPI_API.get(
    `/classes?filters[categories][slug][$eq]=${categorySlug}&populate=*`
  );

  return response.data;
};

export const getClassBySlug = async (slug: string) => {
  const response = await STRAPI_API.get(
    `/classes?filters[slug][$eq]=${slug}&populate=*`
  );

  return response.data;
};
