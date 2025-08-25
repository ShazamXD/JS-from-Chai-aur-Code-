// fetch() ko bdiya se pdhne ke liye mdn docs pr zaroor pde wha na smj aaye toh Lecture 41 dekh lo 

/* when fetch() is called it performs two functions simultaneously

- it handles API on web browsers/node
- it reserves memory space for data in private variables called resolve and reject these are not accessible to us 

network request is acknowledges then send to resolve if not then reject

if resolve then data is extracted and it gets stored in variable 'response'  (stores the data that server send)

NOTE: also if after network request "ERROR 404",etc appears then they will also store in resolve array not in reject array because
      server did response and displayed these messages. Reject happens only when network down ho, internet na ho, ya request bhejna hi possible na ho


FOR MORE DEPTH KNOWLEDGE CONSIDER MDN DOCS AND LECTURE 41 CHAI AUR CODE

*/