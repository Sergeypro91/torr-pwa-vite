export const defineReleaseDate = (releaseDate: string) => {
  return new Date(releaseDate).toLocaleDateString('ru-RU', {});
};
