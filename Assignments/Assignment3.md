# What is JSX?

- Jsx is HTML like syntax that lets you write HTML in React. Jsx is React.createElement which in turn is a javascript object that becomes HTML element when we render it onto the DOM. React code can be written using React.createElement but it becomes too complex for large scale apps that's why jsx came into existence.

# Superpowers of JSX?

- JSX helps us in keeping our code simple. It makes it easier to read and understand the structure of our components or code.
  With JSX we can write faster application in React.

# Role of "type" attribute in script tag? What options can I use there?

- The "type" attribute specifies the type of script and it has the default value of text.
  Script type="module" : It indicates that the file type is a module.
  Script type="module" : It indicates that the file is following ECMASCRIPT/ES6 standards.

# {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent> <TitleComponent/>} in JSX?

- {TitleComponent} : This means that {TitleComponent} is a variable that returns React elements.
- {<TitleComponent />} : This means that it is a Functional component which is just a normal javascript function that
  returns some JSX.
- {<TitleComponent></TitleComponent>} : This is equivalent to {<TitleComponent/>} when the component does not have any Child
  Component. The opening and closing tags are used to include Child component.
