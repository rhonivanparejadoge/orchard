import '../scss/app.scss';

/* Imports */

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
