function range(start, end, step) {
  list = [];
  for (let i = start; i <= end; i += step) {
    if (start === undefined || end === undefined || step === undefined) {
      return [];
      if (start > end) {
        return [];
        if (step <=0) {
          return [];
        } 
      }
    }
    list.push(i);
  } 
  return list;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));