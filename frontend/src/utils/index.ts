export const getSectionTitle = (path: string) => {
  if (path.match(/^\/products\/\d+-[a-zA-Z0-9-]+$/)) {
    return "Detail";
  } else {
    return "Default Title";
  }
};

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
