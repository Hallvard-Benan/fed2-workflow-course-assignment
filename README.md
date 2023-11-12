[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/8ndPp79U)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12225718&assignment_repo_type=AssignmentRepo)

# React + Vite

[![Cypress Tests](https://github.com/Hallvard-Benan/fed2-workflow-course-assignment/actions/workflows/e2e-testing.js.yml/badge.svg?branch=workflow)](https://github.com/Hallvard-Benan/fed2-workflow-course-assignment/actions/workflows/e2e-testing.js.yml)

[![Unit Tests](https://github.com/Hallvard-Benan/fed2-workflow-course-assignment/actions/workflows/unit-testing.js.yml/badge.svg?branch=workflow)](https://github.com/Hallvard-Benan/fed2-workflow-course-assignment/actions/workflows/unit-testing.js.yml)

## Updates

Integrated testing, with Cypress end-to-end-testing and Vitest for Unit-tests.

Commands to run the tests:
-Vitest: npx vitest run
-Cypress: npx cypress run

## Report

Group:
Hallvard, Mikaela

This project is forked off of our previous assignment. Following the assignment instructions, we faced some challenges, especially with setting up eslint and prettier. Our biggest issue was finding helpful documentation, and correctly versioned packages. Configuring commit hooks using Husky caused a bit of trouble too. The first time we installed Husky, we got an older version, so we had to redo it a couple of times until it worked. A lot of time was spent trying to figure out why things weren’t working, despite following documentation steps exactly.
Configuring the project with Vitest and Cypress caused similar issues, however, writing the tests was a bigger challenge. Even though we followed Cypress's instructions, running tests wasn't straightforward, and we struggled a bit.
Writing unit tests with Vitest required a lot of troubleshooting, in order to deal with our specific use case.
After many failed attempts, a lot of troubleshooting, and getting some help, we eventually figured out how to run the tests successfully.
Throughout the assignment, we worked together at school, collaborating on most of the steps.

Unit tests are written using Vitest with @testing-library/react. The following tests are covered:
Login function fetches and stores a token in browser storage.
Logout function clears token from local storage.

End-to-end tests are written with cypress. the following tests are covered:
The user can log in and access their profile
the user cannot submit the login form with invalid credentials and is shown a message.
the user can log out with the logout button.

Commit hooks for eslint and prettier are setup on a separate branch called workflow-formatting.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
