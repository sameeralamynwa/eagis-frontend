export const fakeApiCall = (delay: number = 2000): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // No actual response
    }, delay);
  });
};
