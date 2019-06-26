import { TEXT_FORMAT } from '../constants/global';

export const TextFormat = (item, type) => {
  let answer = item;
  switch (type) {
    case TEXT_FORMAT.BOOLEAN:
      answer = String(item);
      break;
    default:
      answer = item;
  }
  return answer;
};
