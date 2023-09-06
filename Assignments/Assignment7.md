# What are various ways to add images into our app. Explain with examples.

- Following are the ways to add images in our app.

1. Use the import keyword - This ensures that when the project is built,
   webpack will move the images into the build folder and provide you with correct paths.
   Example -
   IMPORTING - import house from "./house.jpg"
   USING - <img src={house} width={200} height={200}/>

2. Use the require keyword
   Example - No importing
   USING - <img src={require('./house.jpg)} alt="House img"/>

3. Import SVGs directly as a React component
   Example -
   IMPORTING - import {ReactComponent as Logo} from "./logo.svg"
   USING - <Logo />

4. Load images directly from the network
   Example - No importing
   USING - <img src="https://square.jpg" />

# What would happen if we do console.log(useState());

- useState() returns an array of 2 elements. First is undefined and second is a function.

# How will useEffect behave if we don't add a dependency array?

- Every time our component renders, useEffect will be called if dependency array is not provided.
  Adding an empty dependency array, useEffect will be called on initial render. And if we pass something in dependency array then it will render only when that dependency or state variable changes or updates.

# What is SPA?

- In Single Page Application, we can route from one page to another without pages being
  re-loaded .There is only a single html page with root id and everything else is a component.

# What is difference between Client Side Routing and Server Side Routing?

- In server-side routing what usually happens when you are entering a URL for the first time or
  you want to change the page, maybe you click on the about us section or the navbar, the browser immediately detects that change in the URL then the browser makes an HTTP request to the server then the server re-renders the HTML into the application, now this can be very expensive and would require time-based on the internet speed and some other factors.

  In client side routing we don't need to go through all these stages, although when we first load the application that is input the web address the full react app is being rendered from the server, but after that when you want to change pages, maybe you click on the navbar the browser watches for change in the URL and immediately it detects change in the URL it uses the HTML5 history API to fetch the page that has already been loaded in when the application was first loaded in and returns it to the browser, and how react router knows which particular page the user is making reference to is by going off to the set of configuration which would have a couple of URLs and components that would render to the root of those URLs, so when we click on the navbar react router goes on to search for the URL and its matching component and then that component is being rendered with a javascript function call.
