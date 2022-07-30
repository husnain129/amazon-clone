export const stars = (value: number) => {
  let stars = '';
  for (let i = 0; i < value; i++) {
    stars += '⭐';
  }
  return stars;
};
