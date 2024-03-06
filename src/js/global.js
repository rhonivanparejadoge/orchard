import { $, $$ } from './helpers/selectors';

const Global = () => {
  const isInViewport =  elem => {
    const distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.bottom - 400 <= (window.innerHeight || document.documentElement.clientHeight)
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

  //Handle All anchor links
  $$('a').forEach(link => {
    link.addEventListener('click', e => {
      console.log("Current Element: ", e.currentTarget)
    })
  })

}

export default Global;
