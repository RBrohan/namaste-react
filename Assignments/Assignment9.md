# When and why do we need lazy?

- Lazy loading is a design pattern for optimizing web and mobile apps.
  Also known as On Demand Loading (When the user is going to that component then only that component will load). It is a new function in react that lets you load react components lazily through code splitting without help from any additional libraries. Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later.

  We know after bundling all our code goes into one single JS file and that file is passed
  to the browser so when our project becomes huge the size of that file also increases.
  Due to which our application becomes slow. So to solve this we use code Splitting.
  The large bundle is split to multiple smaller modules/bundle/chunks and then they are dynamically loaded which means the most important chunks are loaded first and rest are loaded lazily.

  Example -

        import { lazy } from 'react';
        const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

  Lazy takes a callback function in which we use import method that takes the path of the component that we need to render.

# What is suspense?

- Suspense is a component required by the lazy function basically used to wrap lazy components.
  Multiple lazy components can be wrapped with the suspense component. It takes a fallback property that accepts the react elements you want to render as the lazy component is being loaded.

        <Suspense fallback={<div>Loading...</div>}>
        <MarkdownPreview />
        </Suspense>

# Reason of error - A component suspended while responding to synchronous input. This will cause the UIto be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

- After making the component lazy it will definitely take some time to come to the browser.
  React being very fast tries to render the component even before it's code is loaded. Since it doesn't found the component it suspends the rendering process and throws this error. And to handle that state we use SUSPENSE.

# Pros and cons of code splitting pattern.

- Increases the performance by making our app faster , better user experience, light weight,
  optimized . If you choose too many split points, you may end up with too many small chunks that increase the overhead of network requests and reduce the benefits of caching so many loading indicators on slow network.

# When and why do we need suspense?

- Suspense basically shows a fallback screen or we can say a loading indicator between the
  time stamp from where the component's code is loaded till it is fully rendered. We can pass a shimmer UI. In order to show example use throttling.
