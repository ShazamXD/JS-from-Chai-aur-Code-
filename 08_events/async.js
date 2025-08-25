// Javascript by default is a synchronous and single threaded language  

/* Blocking Code

 Definition: Code that stops the execution of further instructions until the current task finishes.
 Think of it like standing in a queue: you can’t move until the person ahead of you is done.

 In JS, examples of blocking operations:
 alert("Hello") → stops everything until you click OK
 while(true) {} → infinite loop blocks the thread
 Reading/writing big files synchronously

 👉 Example:

 console.log("Start");
 alert("This is blocking!"); // You must close this before next line executes
 console.log("End");

 Output sequence:

 "Start"
 [Alert popup] (nothing else runs until you close it)
 "End"

 


 Non-Blocking Code

 Definition: Code that does not stop execution; it delegates the task and continues with other code.
 JavaScript is single-threaded, so it relies on callbacks, promises, async/await, and the event loop to handle non-blocking tasks.

 Non-blocking examples:
 setTimeout()
 setInterval()
 fetch() (AJAX, APIs)

 👉 Example:

 console.log("Start");
 setTimeout(() => {
   console.log("Inside setTimeout (non-blocking)");
 }, 2000);
 console.log("End");

 Output sequence:
"Start"
"End"
"Inside setTimeout (non-blocking)" (after 2 seconds, handled asynchronously)

 */

/*

📒 Notes on Async & Sync in JavaScript (prefer video no 37 for better understanding)
1. JavaScript Engine
Memory Heap → Stores variables & functions.
Call Stack → Executes code line by line (synchronous).
Example: function calls are pushed to the stack, executed, and popped off.

2. Synchronous Code (Blocking)
Runs directly in the Call Stack.
Example:
console.log("A");
console.log("B");
Output → A B (in order, blocking each other).

3. Asynchronous Code (Non-Blocking)
JS itself is single-threaded, but async behavior is achieved using Web APIs (provided by the browser/Node.js).
Examples of Web APIs:
setTimeout, setInterval
fetch (AJAX calls)
DOM events

4. How Async Works
When async functions (setTimeout, fetch, etc.) are called → they are registered in the Web API environment.
The Web API holds them until they’re ready (like after a timer or network response).
Once ready → the callback (CB) is sent to the appropriate queue.

5. Queues
Task Queue (Callback Queue) → Stores callbacks from setTimeout, setInterval, DOM events.
Microtask Queue (Higher Priority) → Stores resolved Promises (.then(), await)
This queue is always checked first before the normal Task Queue.

6. Event Loop
The Event Loop continuously checks:
👉 Is the Call Stack empty?
If yes → take the next callback from Microtask Queue (first) or normal Task Queue, and push it into the stack for execution.

7. Execution Flow Example
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

Step-by-step:
1 → Call Stack → executes immediately.
setTimeout → sent to Web API, callback placed in Task Queue.
Promise.resolve → result placed in Microtask Queue (higher priority)
4 → executes immediately.
Event Loop: Call Stack empty → executes Microtask (3) first.
Then executes Task Queue callback (2).

Final Output:
1
4
3
2

🔑 Key Takeaways
Call Stack runs sync code first.
Web APIs handle async tasks in the background.
Microtask Queue (Promises/async-await) has higher priority than Task Queue.
Event Loop ensures smooth execution by coordinating between stack & queues.
*/