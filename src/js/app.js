import '../scss/app.scss';

/* Imports */
import ImageAndText from '../components/ImageAndText/ImageAndText';
import ThreeUpComponent from '../components/3upComponent/3upComponent';
import Global from './global';

// Add a map for each component class
const classes = new Map(
  [
    ['ImageAndText', ImageAndText],
    ['ThreeUpComponent', ThreeUpComponent]
  ]
);

// Initialize Components
document.addEventListener(
  'DOMContentLoaded', () => {
    // All components
    classes.forEach(Module => new Module());

    // Load Global Scripts
    Global();
  }
);
