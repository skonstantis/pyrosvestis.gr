/* Author: Sotiris Konstantis */

let resolveDataLoaded;
let rejectDataLoaded;

const dataLoadedPromise = new Promise((resolve, reject) => {
  resolveDataLoaded = resolve;
  rejectDataLoaded = reject;
});

export const setDataLoaded = (value) => {
  if (value) {
    resolveDataLoaded(value);
  }
};

export { dataLoadedPromise };
