const PROTOCOL = process.env.BASE_API_PROTOCOL ?? '';
const URL = process.env.BASE_API_URL ?? '';
const PORT = process.env.BASE_API_PORT ?? '';
const ROUTE = process.env.IMAGE_API_ROUTE ?? '';

export const IMAGE_API_URL =
  process.env.TMDB_IMAGE_API ?? `${PROTOCOL}://${URL}:${PORT}/${ROUTE}`;
