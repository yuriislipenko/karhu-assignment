if ('collections-slider' in Shopify.theme.sections.registered) {
  const sections = document.querySelectorAll('.collections-slider');

  sections.forEach((section, index) => {
    if (index !== 0) {
      const linkTag = section.querySelector('link');
      const scriptTag = section.querySelector('script');

      linkTag.remove();
      scriptTag.remove();
    }
  });
} else {
  const selectors = {
    sliderContainer: '.collections-slider__wrapper',
    sliderItem: '.collections-slider__item',
    buttonToLeft: '.collections-slider__arrow--left',
    buttonToRight: '.collections-slider__arrow--right',
    hiddenButton: 'collections-slider__arrow--hidden'
  };

  function scrollToLeft(selectors, sliderContainer, buttonToLeft, buttonToRight) {
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

  function scrollToRight(selectors, sliderContainer, buttonToLeft, buttonToRight) {
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

  const load = () => {
    const sliderContainers = document.querySelectorAll(selectors.sliderContainer);

    sliderContainers.forEach(sliderContainer => {
      let buttonToLeft = sliderContainer.querySelector(selectors.buttonToLeft),
          buttonToRight = sliderContainer.querySelector(selectors.buttonToRight);

      buttonToLeft?.addEventListener('click', event => {
        event.preventDefault();
        scrollToLeft(selectors, sliderContainer, buttonToLeft, buttonToRight);
      });

      buttonToRight?.addEventListener('click', event => {
        event.preventDefault();
        scrollToRight(selectors, sliderContainer, buttonToLeft, buttonToRight);
      });
    });
  };

  Shopify.theme.sections.register('collections-slider');

  load();
}
