(function () {
  const selectors = {
    sliderContainer: '.collections-slider__wrapper',
    sliderItem: '.collections-slider__item',
    buttonToLeft: '.collections-slider__arrow--left',
    buttonToRight: '.collections-slider__arrow--right',
    hiddenButton: 'collections-slider__arrow--hidden'
  };

  const sliderContainer = document.querySelector(selectors.sliderContainer),
        buttonToLeft = document.querySelector(selectors.buttonToLeft),
        buttonToRight = document.querySelector(selectors.buttonToRight);

  buttonToLeft?.addEventListener('click', event => {
    event.preventDefault();
    scrollToLeft();
  });

  buttonToRight?.addEventListener('click', event => {
    event.preventDefault();
    scrollToRight();
  });

  function scrollToLeft() {
    let itemGap = +sliderContainer.dataset.sliderItemGap,
        itemWidth = sliderContainer.querySelector(selectors.sliderItem).clientWidth + itemGap,
        slideScrollPosition = sliderContainer.scrollLeft - itemWidth;

    sliderContainer.scrollTo({
      left: slideScrollPosition,
    });

    buttonToRight.classList.remove(selectors.hiddenButton);

    if (slideScrollPosition <= 0) {
      buttonToLeft.classList.add(selectors.hiddenButton);
    }
  };

  function scrollToRight() {
    let itemGap = +sliderContainer.dataset.sliderItemGap,
        itemWidth = sliderContainer.querySelector(selectors.sliderItem).clientWidth + itemGap,
        slideScrollPosition = sliderContainer.scrollLeft + itemWidth;

    sliderContainer.scrollTo({
      left: slideScrollPosition,
    });

    buttonToLeft.classList.remove(selectors.hiddenButton);

    if (slideScrollPosition >= (sliderContainer.scrollWidth - window.innerWidth)) {
      buttonToRight.classList.add(selectors.hiddenButton);
    }
  };
}());
