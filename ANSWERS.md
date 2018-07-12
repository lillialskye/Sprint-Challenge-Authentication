<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
middleware-application the is the go between the database and application

Sessions- are a way to persist data across requests where eash user/device has a unique session. For example a shopping cart.

bcrypt-is a way to hash passwords using salting

JWT-JSON Web Token- creates unique tokens based on claims example admin. Used to pass identity of authenticated users between an identity provider and a service provider

2.  What does bcrypt do in order to prevent attacks?
It salts the passwords based on rounds. Usually 8-12 rounds otherwise it becomes too slow. It usually truncates the first 72 bytes. The algorithm initializes with 18 32-bit subkeys

3.  What are the three parts of the JSON Web Token?

    header, payload, signature

