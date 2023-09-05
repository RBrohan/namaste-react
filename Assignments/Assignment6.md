# What is a Microservice?

- Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.
  It’s a flexible and efficient approach to building and operating software.

# What is Monolith Architecture?

- A monolithic application is built as a single unit. Everything depends on each other. Updating anything in this architecture is a tedious task.

# What is the difference between Monolith and Microservice ?

- A monolithic application is built as a single unified unit while a microservices architecture is a collection of smaller, independently deployable services.

# Why do we need useEffect Hook?

- The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are:
  fetching data, timers.
  For examples - while fetching data, react does not know how much time will it take to fetch the data so it basically does not render anything on the screen which obviously is a bad user experience and also affects the rendering process. useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it is in.

# What is Optional Chaining?

- We use a question mark(?) operator. Instead of causing an error if a reference is undefined or null.
  this operator returns undefined. Or if the function does not exist then function calls return undefined.

# What is Shimmer UI?

- A shimmer screen acts as a wire-frame of the page, with placeholder boxes for text and images.
  A shimmer UI resembles the page’s actual UI, so users will understand how quickly the web or mobile app will load even
  before the content has shown up. It gives people an idea of what’s about to come and what’s happening (it's currently loading) when a page full of content/data takes more than 3 - 5 seconds to load. It provides a better ux.

# What is the difference between JS expression or JS statement?

- A JS expression is any valid code that resolves into a value and can be written whenever you would expect a value.
  A JS statement is a standalone unit of code that acts. It typically ends with a semicolon (;) to indicate the end of the statement. Statements can be used to declare variables, assign values to variables, call functions, control program flow, and more.

# What is conditional rendering? Explain with example.

- In React, conditional rendering is the process of displaying different content based on certain conditions or states.
  It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions.
  In this process, you can use conditional statements to decide what content should be rendered.

## Example

    function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return (
        <div>
        {isLoggedIn ? (
            <h1>Welcome back!</h1>
        ) : (
            <h1>Please sign up.</h1>
        )}
        </div>
    );
    }

# What is CORS?

- Cross Origin Resource Sharing - When we try to access something from different domain or origin we get a CORS error.

# What is async and await?

- There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”.
  The async keyword is used to declare that a particular function is asynchronous. The keyword await makes JavaScript wait until that promise settles and returns its result.

# What is the use of 'const json = await data.json();' in getRestaurant.

- The response object, returned by the await fetch(), is a generic placeholder for multiple data formats.
  Now to extract a JSON format we use .json(). The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

  const response = await fetch('/data');
  const result = await response.json();
