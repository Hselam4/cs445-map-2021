# JS Engine Optimize
# Question: write a paper about how JS engine optimize JavaScript code
In the Code Execution Phase, JavaScript being a single thread language again runs through the code line by line and updates the values of function and variables which are stored in the Memory Allocation Phase in the Memory Component.
JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user
# The V8 Engine and JavaScript Optimization
V8 is Google’s engine for compiling our JavaScript. Firefox has it’s own engine called 
SpiderMonkey, it’s quite similar to V8 but there are differences. 
We will be discussing the V8 engine in this article.
 A couple of facts about the V8 engine:
      Written in C++ and used in Chrome and Node.js (and the newest release of Microsoft Edge)
      Implements ECMAScript as specified in ECMA-262
# The JavaScript Journey
![javascript_journey](javascript_journey.png)

*fig1: JS journey diagram*
In this article we’ll discuss how the JavaScript code gets parsed and how to get as much of your JavaScript to the 
Optimizing Compiler as possible. The Optimizing Compiler (aka **Turbofan**) takes our JavaScript code and 
converts it to high performance Machine Code, so the more code we can give it the faster our application will be. 
As a side note, the interpreter in Chrome is called **Ignition.**
# JavaScript’s object model
When it comes to objects, V8 under the hood has a type system to differentiate your objects.
For example, how do JavaScript engines implement the JavaScript object model, and which tricks do they use to speed up accessing 
properties on JavaScript objects? As it turns out, all major engines implement this very similarly.

