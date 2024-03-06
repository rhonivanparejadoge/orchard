import '../scss/app.scss';

/* Imports */
import ImageAndTexts from "../components/ImageAndTexts/ImageAndTexts";

// Add a map for each component class
const classes = new Map(
  [
  ]
);

// Initialize Components
document.addEventListener(
  'DOMContentLoaded', () => {
    // All components
    classes.forEach(Module => new Module());
  }
);
