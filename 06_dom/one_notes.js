/* 1. textContent

 Returns all text inside an element (including hidden text).

 Ignores HTML tags.

 Safer for inserting plain text (doesn’t parse HTML).

 element.textContent = "Hello";

 2. innerHTML

 Returns/sets the HTML code inside an element (includes tags).

 Can insert HTML dynamically.

 Not safe for untrusted input (XSS risk).

 element.innerHTML = "<b>Hello</b>";

 3. innerText

 Returns visible text only (ignores hidden text via CSS).

 Respects styles like display: none and line breaks.

 element.innerText = "Hello";

 4. querySelector()

 Selects the first matching element using a CSS selector.

 Returns a single element or null if not found.

 document.querySelector(".className"); // this is how classes are selected by using '.' and ids are selected by '#'

 5. querySelectorAll()

 Selects all matching elements using a CSS selector.

 Returns a NodeList (can use forEach()).

 document.querySelectorAll("p");

 6. NodeList

 A collection of nodes (elements, text nodes, etc.).

 Can be static (doesn’t auto-update) or live (rare).

 Supports forEach() but not all array methods.

 But it can be converted to array for it's properties by Array.from(NodeList)

 document.querySelectorAll("div"); // NodeList

 7. HTMLCollection

 A live collection of HTML elements (auto-updates when DOM changes).

 Returned by methods like getElementsByTagName() or getElementsByClassName() and getElementById()

 No forEach() (need to convert to array first).

 Can converted to array by 'Array.from(HTMLCollection)'

 document.getElementsByTagName("p");  HTMLCollection
 

 element.style.color = "green"
 element.style.backgroundColor = "green"
 element.style.padding = '10px'

 by this you change css properties of the elements or all the elements of class and id by just storing them in a variable and then replace element by 
 variable name

 */