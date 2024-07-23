/* Author: Sotiris Konstantis */

let resolveDataLoaded;
let rejectDataLoaded;
let isResolved = false;

const dataLoadedPromise = new Promise((resolve, reject) => {
  resolveDataLoaded = (value) => {
    if (!isResolved) {
      isResolved = true;
      resolve(value);
    }
  };
  rejectDataLoaded = reject;
});

export const setDataLoaded = (value) => {
  if (resolveDataLoaded) {
    resolveDataLoaded(value);
  }
};

export const getDataLoadedPromise = () => dataLoadedPromise;