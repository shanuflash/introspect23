let images = [];
for (let i = 2; i < 153; i++) {
  if (i !== 3)
    images.push({
      id: i,
      src: "../" + i + ".png",
    });
}

export default images;
