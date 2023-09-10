# Explore all the ways of writing css.

- We can write css with traditional css and css pre-processors like sass/scss.

# How do we configure tailwind?

- We can give basic configuration in our tailwind.config.js like the example given below

  Example-

        /** @type {import('tailwindcss').Config} \*/
        module.exports = {
        content: ["./src/**/\*.{html,js}"],
        theme: {
        extend: {},
        },
        plugins: [],
        };

# In tailwind.config.js, what does all the keys mean(content,theme,extend,plugins)?

- content - The content section of your tailwind.config.js file is where you configure the paths
  to all of your HTML templates, JavaScript components, and any other source files that contain Tailwind class names.

  theme - The theme section of your tailwind.config.js file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.

  extend - if you’d like to extend the default spacing scale, you can do so using the theme.extend.spacing section of your tailwind.config.js

  plugin - Plugins let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS. To get started with your first plugin, import Tailwind’s plugin function from tailwindcss/plugin. Then inside your plugins array, call the imported plugin function with an anonymous function as the first argument.

# Why do we have .postcssrc file?

- When using parcel, the .postcssrc is used to read tailwind classes.
