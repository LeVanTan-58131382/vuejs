export function generateRandomPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() >= 0.5) {
          resolve()
        } else {
          reject(new Error('Oops'))
        }
      }, 2000);
    });
  }