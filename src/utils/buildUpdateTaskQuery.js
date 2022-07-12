export const buildUpdateTaskQuery = (infosToUpdate) => {
  const keys = Object.keys(infosToUpdate);

  const builtQuery = keys
    .map((key, i) => {
      return `"${key}" = $${i + 2}`;
    })
    .join(', ');

  return builtQuery;
};
