# TEST DRIVEN DEVELOPMENT (TDD)

- Write tests before writing code
  - Then write code according to "spec" set by tests
- "red-green" testing
  - Tests fail before code is written

## Why TDD?

- Makes a huge difference in how it feels to write tests
  - part of the coding process, not a "chore" to do at the end
  - More efficient,
    - You can re-run tests "for free" after changes instead of running your app to see if the app works the way you think it does.

# Types of Tests

- Unit tests
  - Tests one unit of code in isolation
- Integration tests
  - How multiple units work together
- Function Tests
  - Tests a particular function of software
- Acceptance / End-to-end (E2E) Tests
  - Use actual browser and server ( Cypress, Selenium )

# Functional Testing vs Unit Testing

[Detailed comparison](https://www.simform.com/blog/unit-testing-vs-functional-testing/)

## Unit Testing

Unit Tests makes up the largest section of the pyramid, forming a solid base. Unit tests are easy to create and run and hence they require a low cost. Because no. of unit tests are high, Developers use different unit testing tools to automate them based on the programming language and framework they use.

Unit testing is a software testing method by which individual units of code are tested in isolation. The purpose of unit testing is to isolate the smallest testable parts of an API and verify that they function properly in isolation. A unit test can verify different behavioral aspects of the system under test(SUT), but mainly it verifies that the SUT produces the correct results.

From the developer’s perspective, the purpose of unit testing is to create a robust codebase with a minimal cost. Another important purpose of unit tests is to provide documentation for high-level testing, i.e. Integration testing and Functional testing.

## Functional Testing

In functional testing, a tester isn’t concerned with the actual code, rather he/she need to verify the output based on given the user requirements with the expected output.

The prime objective of Functional testing is to check the functionalities of the system. Functional tests check the entire application, its hardware, and networking infrastructure, from the front end UI to the back-end database systems. In that sense, functional tests are also a form of integration testing, ensuring that different components are working together as expected.

Unlike unit tests, the functional tests don’t tell you what is broken or where to locate the failure in the code base. They just tell you something is broken. That something could be the test, the browser, or a race condition. There is no way to tell because functional tests, by definition of being end-to-end, test everything.

### Comparison table

| **Criteria/Factors** | **Unit Testing**                       | **Functional Testing**                             |
| -------------------- | -------------------------------------- | -------------------------------------------------- |
| Definition & purpose | Testing the units code in isolation    | Testing the functionality as per user requirements |
| Complexity           | Easy to write and execute              | More complex compared to unit tests                |
| Testing techniques   | White box testing                      | black box testing                                  |
| Major attention      | Individual modules or units            | Entire application functionality                   |
| No. of test cases    | Higher any other testing               | Lower than unit and integration                    |
| Error/Issues covered | Code branches, Edge cases              | Software / App functionality                       |
| Cost and Maintenance | Low                                    | High                                               |
| Programming language | Usually done with same coding language | No need of same programming language               |
| Test coverage        | No of lines of code                    | No of requirements covered                         |
| Changes              | Changes frequently                     | Low rate of changes                                |
| Ideally written      | Starting of the development            | When feature has been built                        |
| Written by           | Developers                             | Testers                                            |
| Automation           | Must be automated                      | Both manual and automation testing                 |

## Improving software quality

### Unit Testing

By writing a test to drive your newly written code, you essentially capture that work. If in, say, six months you or another programmer breaks the code, you can use that test to fix the code. This is how unit-tests protect against regressions.

Defects in objects are identified nearly immediately, so there is less re-work and re-test dependency on other code.

Complex applications have just too many variables to thoroughly test in a practical way.

Breaking them down into manageable unit tests is cheaper to develop and maintain.

It generates a good bug report which could answer these 4 questions:

- **Which component is under test?**
- **What is the expected behavior?**
- **What was the actual result?**
- **What is the expected result?**

### Functional Testing

It ensures the whole app or system works as expected. Typically have thorough tests for “happy paths” — ensuring the critical app capabilities, such as user logins, signups, purchase workflows, and all the critical user workflows all behave as expected.

There are many types of functional testing and each has its own benefits. For example, Integration testing checks that all the integration are working together. Smoke testing checks the critical features of the build and saves time and reduce regressions.

System testing validates the entire software/app in the context of real user scenarios. End-to-End tests increase test coverage and reduce the risk associated with integrating new code into an application.

### When to perform?

Unit tests aren’t a replacement for functional testing. But they are the solid foundation on which the rest of your testing process should be built.

The best practice is that you should start writing your tests when you start writing your code. Test Driven Development (TDD) is a popular software development practice which advocates writing tests before the code.

Over time you will see the benefits of writing unit-tests. One example, you can refactor your code and the unit-tests will tell you if you broke anything.

Integration testing comes after the unit testing and it is a type of functional testing. In that way, functional testing starts when two modules interact with each other. After that, testers perform functional testing on the feature. You might use a unit test to test an individual function and an integration test to check how two parts play nice together. Functional tests are on a whole another level. While you can have hundreds of unit tests, you usually want to have only a small amount of functional tests.
