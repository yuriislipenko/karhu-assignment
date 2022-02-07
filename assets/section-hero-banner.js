if ('hero-banner' in Shopify.theme.sections.registered) {
  const sections = document.querySelectorAll('.hero-banner');

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
    bannerContainer: '.hero-banner',
    buttonToBottom: '.hero-banner__arrow',
  };

  function scrollToBottom(bannerContainer) {
    let sectionHeight = bannerContainer.clientHeight;

    window.scrollTo({
      top: sectionHeight,
      behavior: "smooth"
    });
  };

  const load = () => {
    const bannerContainers = document.querySelectorAll(selectors.bannerContainer);

    bannerContainers.forEach(bannerContainer => {
      let buttonToBottom = bannerContainer.querySelector(selectors.buttonToBottom);

      buttonToBottom?.addEventListener('click', event => {
        event.preventDefault();
        scrollToBottom(bannerContainer);
      });
    });
  };

  Shopify.theme.sections.register('hero-banner');

  load();
}
