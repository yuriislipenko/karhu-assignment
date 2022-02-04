(function () {
  const selectors = {
    bannerContainer: '.hero-banner',
    buttonToBottom: '.hero-banner__arrow',
  };

  const bannerContainer = document.querySelector(selectors.bannerContainer),
        buttonToBottom = document.querySelector(selectors.buttonToBottom);

  buttonToBottom?.addEventListener('click', event => {
    event.preventDefault();
    scrollToBottom(bannerContainer);
  });

  function scrollToBottom(bannerContainer) {
    let sectionHeight = bannerContainer.clientHeight;

    window.scrollTo({
      top: sectionHeight,
      behavior: "smooth"
    });
  };
}());
