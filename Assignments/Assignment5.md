# What is the difference between Named Export, Default Export and \* as export?

- Export default returns only a single value or default value.
- When we want to export multiple values from a single file we use Named exports and We can have only one Default export per file.
- When we want to export everything from the file we use _ and also give a namespace (_ as myModule)

# What is the importance of config.js file?

- Config file is short form for Configuration file which contains a list of initial parameters and settings your project will need to get started.
  It could be anything, like a connection string to the database URL in different development environments, language settings,
  user settings, etc.

# What are React Hooks?

- React hooks are normal Javascript functions that enables us to use React functionalities like state and lifecycle features
  without using classes.. We can't call them inside loops or conditions. They should always be declared at the top level.

# Why do we need a useState Hook?

- We can't use normal javascript variables in react because react does not re-render after updating the values of normal
  variables. React uses state variables which are provided by useState hook. This hook returns an array with 2 values -
  an initial state and the function to update that initial state. Once the value is updated it triggers re-render of the component which is not possible in normal javascript variables. The useState hook takes a default value as an initial parameter.
