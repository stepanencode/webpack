export function getMotivationalPictures() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockedResponse = [
        'images/pictures/mountains.webp',
        'images/pictures/flowers.webp',
        'images/pictures/squirrel.webp',
        'images/pictures/vase.webp',
      ];
      resolve(mockedResponse);
    }, 700);
  });
}
