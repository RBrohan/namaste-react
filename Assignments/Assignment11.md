# What is prop drilling?

- Prop drilling occurs when you need to pass down data through multiple nested
  components to reach the ones that require the data. This practice can lead to a complex and tightly coupled component hierarchy, making it challenging to manage state and refactor your application.

# What is lifting the state up?

- Lifting up the state we make the state of the parent component as a single source of
  truth and pass the data of the parent in its children.

# What are Context Provider and context Consumer?

- The provider is used to create a context that can be consumed. The consumer is used to
  consume the nearest provided context. You can provide the same context many times through your application, and you can even provide the same context nested.

# If we don't pass a value to the provider does it take a default value?

- The defaultValue argument is only used when a component does not have a matching
  Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue
