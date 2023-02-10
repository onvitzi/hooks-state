# useRef 

is a React Hook that lets you reference a value that’s not needed for rendering.

### Usage
* Referencing a value with a ref
* Manipulating the DOM with a ref
* Avoiding recreating the ref contents



 ### Parameters 
initialValue: The value you want the ref object’s current property to be initially.

### Returns 
useRef returns an object with a single property:

* current: Initially, it’s set to the initialValue you have passed. You can later set it to something else.

### Caveats 
* You can mutate the ref.current property. 
* When you change the ref.current property, React does not re-render your component.
* Do not write or read ref.current during rendering, except for initialization.