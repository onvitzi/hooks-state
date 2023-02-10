# redux

Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

Redux helps you manage "global" state - state that is needed across many parts of your application.

![image](image/01-image.png)

### Three Principles
* ### Single source of truth
The global state of your application is stored in an object tree within a single store.

* ### State is read-only
The only way to change the state is to emit an action, an object describing what happened.

* ### Changes are made with pure functions
To specify how the state tree is transformed by actions, you write pure reducers.
