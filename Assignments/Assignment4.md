# Is JSX mandatory for React?

- No JSX is not mandatory for React, We can also write React using React.createElement but because it becomes too complex in
  large scale applications but JSX makes it easier to write React applications.

# Is ES6 mandatory for React?

- No ES6 is not mandatory for React, because React components can also be written using create-react-class module but because
  it becomes too complex and for performance optimizations, code readability in large scale applications, It is preferred to use ES6.

# How can I write comments in JSX?

- We can write comments in JSX by enclosing the line with curly braces like shown. {/_ comments _/}

# What is <React.Fragment></React.Fragment> & <></>?

- Both are same. When we don't want to add another container/wrapper in the DOM we use fragments.They
  are used to group elements together without affecting DOM. This useful when rendering multiple child components in a single parent component.

# What is Virtual DOM?

- It is a copy of original DOM. And original DOM is just object representation
  of HTML elements(UI) grouped together. The virtual DOM is only a virtual representation of the DOM. Every time the state of our application changes, the virtual DOM gets updated instead of the real DOM.

# What is Reconciliation in react?

- We know DOM manipulation is very expensive. Reconciliation is a process where react compares the
  state of previous virtual dom with the new virtual dom and then updates only that part in
  original dom where the state has been changed. React becomes faster because of this process.

# What is React Fibre?

- It is a re-implementation of older versions of the React reconciler. Introduced from React 16, Fiber Reconciler is the new reconciliation algorithm in React.

# Why do we need keys in react?

- Keys are basically used when we render a list. Suppose we have a list of cards without keys and we have changed the state of few cards.
  (changing the background color) I will reorder those cards. Since cards does not have keys react will treat them same and after reordering
  it will change the state of other cards. (React will compare both the old and new virtual dom and when it doesn't find keys it will unmount the
  old list , mount a new list and then renders it without exactly knowing the cards whose state has been changed.)

# Can we use index as keys?

- Yes we can but it is a bad practice. React recommends that we should do not use indexes as keys,
  since it could impact performance negatively and could lead to some unstable component behavior.
  When we do not have external id's React uses index as keys.

# What are props in react?

- Props are properties that a functional component accepts i.e they are being passed from parent to child component.

# What is Config driven UI?

- Controlling UI based on data given by backend is known as Config Driven UI.
