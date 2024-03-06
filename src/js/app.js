import '../scss/app.scss';

/* Imports */
import ImageAndText from '../components/ImageAndText/ImageAndText';

// Add a map for each component class
const classes = new Map(
  [
    ['ImageAndText', ImageAndText],
  ]
);

// Initialize Components
document.addEventListener(
  'DOMContentLoaded', () => {
    // All components
    classes.forEach(Module => new Module());
  }
);
