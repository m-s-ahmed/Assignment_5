<!-- Question-01 -->

1. getElementById()
   it select unique element with the given id.
   it always returns a single element or null if not found.

2. getElementByClassName()
   it selects all with the given same class name.
   it returns like live html collection.

3. querySelector()
   it selects the first element that matches with css selector.

4. querySelectorAll()
   it selects all element that matches with css selector.

<!-- Question-02 -->

we can create an element with document.createElement and then insert it into the DOM using various methods like appendChild, prepend or insertBefore.

<!-- Question-03 -->

when an event occurs on an element , it bubbles up through its ancestors in the DOM.it first trigger on the target element, then moves upward to parent elements until it reaches document.

<!-- Question-04 -->

we attach a single event listener to a parent element and handle events based on the event.target

<!-- Question-05 -->

1. preventDefault()
   it stops the default action of an element.
2. stopPropagation()
   stops the event from bubbling up.
