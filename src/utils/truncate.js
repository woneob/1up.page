
export const truncate = (text, max = 160) =>
  text.length > max ? text.slice(0, max - 3) + '...' : text;
