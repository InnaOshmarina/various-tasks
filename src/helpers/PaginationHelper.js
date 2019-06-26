export const getPageCount = (itemCount, limit) => Math.ceil(itemCount / limit);

export const getRangeStart = (currentPage, pageRange) => {
  const start = currentPage - pageRange;

  return start > 0 ? start : 1;
};

export const getRangeEnd = (currentPage, totalPages, pageRange) => {
  const end = currentPage + pageRange;

  return end < totalPages ? end : totalPages;
};

export const getRangeArray = (currentPage, totalPages, pageRange = 3) => {
  const rangeStart = getRangeStart(currentPage, pageRange);
  const rangeEnd = getRangeEnd(currentPage, totalPages, pageRange);
  const answer = [];
  for (let i = rangeStart; i <= rangeEnd; i += 1) {
    answer.push(i);
  }

  return answer;
};
