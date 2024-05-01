export const cn = (classNames: unknown[]) => {
  return classNames
    .filter((classname) => {
      if (typeof classname === 'string') {
        return classname;
      }
    })
    .join(' ');
};
