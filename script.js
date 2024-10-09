const slider = document.querySelector(".productCard__photo");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const images = slider.querySelectorAll(".productCard__photo-img");

const initSlider = () => {
  if (images.length === 1) {
    arrowLeft.classList.add("hidden");
    arrowRight.classList.add("hidden");
  }
};

// Устанавливаем порядок для изображений при первой загрузке
images.forEach((image, index) => {
  image.style.order = index;
});

let getBigImage = () => slider.querySelector(".big");

let setBigImage = (newBigImage) => {
  currentBigImage = getBigImage();
  currentBigImage.style.order = newBigImage.style.order;
  currentBigImage.classList.remove("big");
  newBigImage.classList.add("big");
  newBigImage.style.order = 0;
};

// Функция для переключения изображений по стрелкам
const moveImage = (prevOrNext) => {
  let bigImage = getBigImage();
  // Получаем все изображения и определяем текущий индекс большого изображения
  const imagesArray = Array.from(images);
  let orderIndex = imagesArray.indexOf(bigImage);
  // Определяем новый индекс в зависимости от направления
  if (prevOrNext === "prev") {
    if (orderIndex === 0) {
      orderIndex = imagesArray.length - 1; // Переход к последнему изображению
    } else {
      orderIndex--;
    }
  } else {
    if (orderIndex === imagesArray.length - 1) {
      orderIndex = 0; // Переход к первому изображению
    } else {
      orderIndex++;
    }
  }
  // Получаем целевое изображение по новому индексу
  let targetImage = imagesArray[orderIndex];
  // Обновляем изображения
  if (targetImage) {
    setBigImage(targetImage);
  }
  // console.log(orderIndex);
};
// Переключение с помощью превью
images.forEach((image) => {
  image.addEventListener("click", (event) => setBigImage(event.currentTarget));
});

arrowLeft.addEventListener("click", () => moveImage("prev"));
arrowRight.addEventListener("click", () => moveImage("next"));

initSlider();
