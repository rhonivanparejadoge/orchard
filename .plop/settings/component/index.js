module.exports = {
  description: 'Creates a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?'
    }
  ],
  actions: [
    // Scripts
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.js',
      templateFile: 'templates/component/script.js.hbs'
    },
    // styles
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
      templateFile: 'templates/component/module.scss.hbs'
    },
  ]
};
