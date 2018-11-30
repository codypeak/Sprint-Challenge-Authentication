<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?  when a user logs in a session can be created by a server to continually verify the user's identity as long as the session lasts.  it does this by passing a cookie or token between the client and server when requests are made as long as the session lasts. 

2. What does bcrypt do to help us store passwords in a secure manner.  it creates a one way hash to securely store passwords.  it also can slow down password cracking by slowing hashing speeds. 

3. What does bcrypt do to slow down attackers?  when it slows down hashing speed, the algorithm is slowed down so less password guesses can be made in a given period of time, which makes brute force attacks less viable. 

4. What are the three parts of the JSON Web Token?  header, payload, signature
