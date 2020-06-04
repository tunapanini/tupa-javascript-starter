export function getNearestSmallers(space, lefthand = false) {
  const stack = [];
  const defaultIndex = lefthand ? -1 : space.length;
  const result = Array(space.length).fill(defaultIndex);

  for (let i = 0; i < space.length; i++) {
    const currentIndex = lefthand ? space.length - 1 - i : i;
    while (
      stack.length > 0 &&
      stack[stack.length - 1].value > space[currentIndex]
    ) {
      result[stack.pop().index] = currentIndex;
    }
    stack.push({
      index: currentIndex,
      value: space[currentIndex],
    });
  }

  return result;
}
export const dsa = [
  // 0: N
  (space, x) => {
    const lns = getNearestSmallers(space, true);
    const rns = getNearestSmallers(space);

    let result;
    for (let i = 0; i < space.length; i++) {
      const mx = rns[i] - lns[i] - 1;
      if (x <= mx) {
        if (!result || result < space[i]) {
          result = space[i];
        }
      }
    }
    return result;
  },
  // 1: (N-X)X
  // (space, x) => {
  //   let result;
  //   for (let i = 0; i <= space.length - x; i++) {
  //     let min = space[i];
  //     for (let j = 0; j < x; j++) {
  //       if (min > space[i + j]) {
  //         min = space[i + j];
  //       }
  //     }
  //     if (!result || result < min) {
  //       result = min;
  //     }
  //   }
  //   return result;
  // },
  // (space, x) => {
  //   const segMin = [];
  //   for (let i = 0; i < space.length; i++) {
  //     const seg = space.slice(i, i + x);
  //     const min = Math.min(...seg);
  //     segMin.push(min);
  //   }
  //   const result = Math.max(...segMin);
  //   return result;
  // },
];
