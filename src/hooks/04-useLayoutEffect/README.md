# useLayoutEffect 
Is a version of useEffect that fires before the browser repaints the screen.

### Usage
Measuring layout before the browser repaints the screen.

### Parameters 
* setup: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. 

* optional dependencies: The list of all reactive values referenced inside of the setup code.

### Returns 
useLayoutEffect returns undefined.

### Caveats 
* So you can only call it at the top level of your component or your own Hooks.

* When Strict Mode is on, React will run one extra development-only setup+cleanup cycle before the first real setup.

* If some of your dependencies are objects or functions defined inside the component, there is a risk that they will cause the Effect to re-run more often than needed.

* Effects only run on the client. They don’t run during server rendering.

* When possible, prefer useEffect.




# What is the difference between useEffect and useLayoutEffect?
***useLayoutEffect*** runs synchronously immediately after React has fully updated the DOM after rendering. This can be useful if you need to retrieve a DOM element and access its dimensions or position on the screen.

***useEffect*** runs asynchronously after rendering, but does not ensure that the DOM has been updated. That is, if you need to retrieve an element from the DOM and access its dimensions or position on screen, you won't be able to do it with useEffect because you don't have the guarantee that the DOM has been updated.