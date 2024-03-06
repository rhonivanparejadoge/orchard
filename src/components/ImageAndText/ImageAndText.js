import { $ } from '../../js/helpers/selectors';

let SELECTOR = '.image-and-text';

class ImageAndText {
  constructor() {
    if (! $(SELECTOR)) {
      return false;
    }

    //Your code below here
    console.log('test')
  }
}

export default ImageAndText;
