# Accessibility

## Browser Tools

- Firefox has a accessibility tab built into the browser which allows you to check your websites pages, however this could be tedious for large websites/ web apps.

- Lighthouse ( most browsers ) Allows you to generate a report that identify's and fix common problems that affect your sit's performance, accessibility , and user experience.

---

# Accessibility Tools Built for React

## eslint-plugin-jsx-a11y

You can use this tool for linting accessibility issues on JSX elements in your React projects. You can use it in conjunction with tools such as eslint for linting your project for accessibility standards right in your text editor.

Since it is distributed via npm, you can install it by running the command below in your project:

```terminal
# using npm as package manager

npm install eslint-plugin-jsx-a11y --save-dev

# using yarn as package manager

yarn add eslint-plugin-jsx-a11y --dev

```

Any React project which you've created using create-react-app comes with this tool already configured – but it has only a subset of the configurable accessibility rules enabled by default.

You can enable additional rules by creating an .eslintrc configuration file in your project and adding the following code to it. The code below activates the recommended rules:

```terminal
  "extends": ["react-app", "plugin:jsx-a11y/recommended"],
  "plugins": ["jsx-a11y"]
}

```

If you want to flag accessibility issues in a custom React project, you need to install eslint and add "jsx-a11y" to the plugins field of your .eslintrc configuration file.

It will then flag accessibility issues that it can identify programmatically and warn you right in your text editor depending on your configuration.

```terminal
{  "plugins": [    "jsx-a11y"  ]}
```

## Axe accessibility linter ( VS CODE EXTENSION )

Axe accessibility linter is a Visual Studio Code extension that you can use for linting React, HTML, Vue, and Markdown for some common accessibility defects.

It checks for accessibility issues in .js, .jsx, .ts, .tsx, .vue, .html, .htm, .md and .markdown files.

You don’t need configuration to start using axe accessibility linter after installation. You install it from VS code marketplace and it automatically starts linting compatible files for accessibility defects out of the box without the need for additional configuration.

For a complete list of rules used by axe accessibility linter, check the extension page on VS Code marketplace.

---

# Conclusion

Using tools such as eslint-plugin-jsx-a11y, axe accessibility linter, and axe-core-react in your project will go a long way in helping you develop more accessible and inclusive products using React.

Though they come in handy, the tools mentioned here will only flag a certain percentage of accessibility defects – mainly those that are possible to detect programmatically.

So it's really important to integrate automated testing, manual testing, and actual user testing in your development because automated testing alone may not be able to detect even 50 percent of accessibility issues in your project.

Accessibility: Found a plugin that can be added to your react projects that works with ESlint.

Plugin name: eslint-plugin-jsx-a11y

You can configure accessibility rules and it will flag issues in development.

For extra checks on accessibility, we can use lighthouse in our browsers (chrome, brave) to generate reports on our pages which cover accessibility/SEO among other useful information.

Firefox browser unfortunately doesn't have the lighthouse feature mentioned above, it does however have an accessibility feature in the dev tools which provides a means to access important information exposed to assistive technologies on the current page via the accessibility tree, allowing you to check what’s missing or otherwise needs attention.

I wouldn't recommend this though as it can be tedious to check each individual page, plus we would have to wait till the pages are deployed live before checking.

Conclusion: I think adding this plugin along with whichever UI Kit we decide to choose will help ensure we score high when it comes to accessibility.

- theme
  