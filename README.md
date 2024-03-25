## Testing My Store Contact Form and Dress Search Feature with NightwatchJS and Mocha-Auth-User API Routes with SuperTest

[![CircleCI](https://circleci.com/gh/fady-ibrahim96/Siemens-QA-Task.svg?style=svg)](https://app.circleci.com/pipelines/github/fady-ibrahim96/Siemens-QA-Task)

## Overview

This README provides guidance on testing the My Store website using NightwatchJS for UI testing and Mocha-Auth-User API routes with SuperTest for API testing. It covers the setup and execution of tests for the contact form and dress search feature.

## 1) My Store UI Testing with NightwatchJS

NightwatchJS is a powerful browser automation framework that allows writing automated tests in JavaScript. The codebase utilizes the page objects model for better test organization and maintenance.

### Prerequisites

1. Node.js and npm installed on your machine.
2. Access to the My Store website.

### Setup

1. Clone the repository to your local machine.
2. Install all required packages by running:
   npm install
3. To test the contact form, execute the following command:
   npx nightwatch nightwatch/tests/contactUsTest.js
4. To test the dress search feature, run:
   npx nightwatch nightwatch/tests/searchDressTest.js
