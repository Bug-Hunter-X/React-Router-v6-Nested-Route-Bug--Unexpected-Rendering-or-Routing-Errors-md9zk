# React Router v6 Nested Route Bug
This repository demonstrates a common issue encountered when working with nested routes in React Router v6. The problem involves unexpected rendering behavior or routing errors stemming from path ambiguity or conflicts in nested route definitions.

## Description
The bug showcases a scenario where defining nested routes within a parent route leads to incorrect component rendering or unexpected navigation outcomes. This often happens when route paths are not carefully designed to avoid conflicts or ambiguity.

## How to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the unexpected behavior when navigating between routes, specifically focusing on the nested routes under `/contact`.

## Solution
The solution involves carefully reviewing and adjusting the route paths to ensure clarity and prevent conflicts.  The solution file (`bugSolution.js`) provides a corrected implementation, demonstrating best practices for defining nested routes in React Router v6.

## Technologies Used
- React
- React Router v6