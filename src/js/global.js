const Global = () => {
  const isInViewport =  elem => {
    const distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const findMe = document.querySelectorAll('.animating');
  const scrollAnimationHandler = () => {
    // add event on scroll
    findMe.forEach(element => {
      //for each .thisisatest
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("isVisible");
      }
    });
  }

  scrollAnimationHandler();

  window.addEventListener('scroll', scrollAnimationHandler, false);
}

export default Global;
