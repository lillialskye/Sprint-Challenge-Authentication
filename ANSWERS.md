<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
middleware-application the is the go between in the api

Sessions- are a way to persist data across requests where eash user/device has a unique session

bcrypt-is a way to hash passwords using salting

JWT-JSON Web Token- creates unique tokens based on claims example admin. Used to pass identity of authenticated users between an identity provider and a service provider

2.  What does bcrypt do in order to prevent attacks?
it salts the passwords based on rounds. Usually 8-12 rounds otherwise it becomes too slow

3.  What are the three parts of the JSON Web Token?

    header, payload, signature

