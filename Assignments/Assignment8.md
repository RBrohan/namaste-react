# How do you create nested routes react-router-dom configuration?

- Below is the example of creating nested routes, To use the createBrowserRouter we first have to
  import it from "react-router-dom" and then we have to provide the appRouter configuration to RouterProvider component as shown below.

  const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <AppLayout />,

        children: [
            {
            path: "/",
            element: <Body />,
            },
            {
            path: "/about",
            element: <About />,
            },
            {
            path: "/contact",
            element: <Contact />,
            },
            {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,

  },
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);

# Read about createHashRouter and createMemoryRouter

- createHashRouter
  This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

- createMemoryRouter
  Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

# Order of lifecycle methods called in class based component?

- There are 3 lifecycle methods.
  Mounting , Updating, Unmounting

Mounting has 2 phases - Render Phase and Commit Phase.
In render phase the constructor is called whenever an instance of class is created. And then the
component renders initially. Before commit phase react uses a reconciliation algo which has a diff algorithm to figure out all the updates in virtual DOM. After that comes the commit phase where the Original DOM is then updated and then component is mounted with (componentDidMount method).

Updating - This methods occurs subsequently whenever there's an update in the state of the component. As soon as the state is updated the components re-renders. Then actual DOM begins to update and the component gets updated with (componentDidUpdate method)

Unmounting - This methods occurs whenever the component is removed from the page. (routing to another component) (componentWillUnmount method) is used to do so.

# Why do we use componentDidMount?

- The componentDidMount() method allows us to execute the React code when
  the component is already placed in the DOM (Document Object Model).
  This method is called during the Mounting phase of the React Life-cycle i.e
  after the component is rendered. All the AJAX requests and the DOM or state updates should be coded in the componentDidMount() method block. We can also set up all the major
  subscriptions here but to avoid any performance issues, always remember to
  unsubscribe them in the componentWillUnmount() method.

# Why do we use componentWillUnmount?

- Whenever we want to destroy/unmount any component we use componentWillUnmount() to perform
  all the cleanup functions. This method is called during the Unmounting phase of the React Life-cycle i.e before the component gets unmounted. All the cleanups such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount() should be coded in the componentWillUnmount() method block.

  - Example

        class EventListener extends from React.Component{
        componentDidMount(){
        this.addEventListener("resize", this.handleResize)
        }

        componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize)
        }

        const handleResize = () => {
        console.log("Window resize")
        }

        render(){
        return (
        <p> Component with event listener </p>
        )
        }
        }

# Why do we use super(props) in constructor?

-

# Why can't we have the callback function of useEffect async?

-

# How to Redirect a User After Login in React

- useNavigate hook from react-route-dom.
  const navigate = useNavigate();
  navigate("/dashboard")
