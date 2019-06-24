export const setArray = (lowEnd, highEnd) => {
  const array = [];
  while (lowEnd <= highEnd) {
    // eslint-disable-next-line no-param-reassign
    array.push(lowEnd++);
  }
  return array;
};

export const getPageCount = (itemCount, limit) => Math.ceil(itemCount / limit);
