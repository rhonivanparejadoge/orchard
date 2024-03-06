export function $(selector, context = document) { // For single selection
  return context.querySelector(selector);
}

export function $$(selector, context = document) { // For multiple selection
  return [...context.querySelectorAll(selector)];
}
