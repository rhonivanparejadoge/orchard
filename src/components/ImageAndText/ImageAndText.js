import { $ } from '../../js/helpers/selectors';
import GLightbox from 'glightbox';

let SELECTOR = '.image-and-text';

class ImageAndText {
  constructor() {
    if (! $(SELECTOR)) {
      return false;
    }

    //Your code below here
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }
}

export default ImageAndText;
