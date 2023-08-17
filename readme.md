# **Telephone Form with Validation**

## Introduction

A project for interview testing process.

## Technologies used:

- Bootstrap 5 + Vanilla Js (No Jquery).
- CSS using SASS

## What did I do

### Telephone Form

![Telephone Form](/images/telephone-phone.png)
**Validate telephone**

User must enter a valid phone number to submit the form:

- Phone number must have at least 7 characters
- The first character must be **+** or **0**
- The remaining characters must be numbers

**Valid phone:**

- Start with **+**
  ![valid-phone-start-plus](/images/valid-phone-start-plus.png)

- Start with **0**
  ![valid-phone-start-0](/images/valid-phone-start-0.png)

**Invalid phone**

- Empty
  ![required-phone](/images/required-phone.png)

- Not start with **+** or **0**
  ![invalid-phone](/images/invalid-phone.png)
  **Once User logged in**

## Installation & Configuration:

### Overview

- You can open index.html file and view form

### Development

To start Development, you need to follow these steps:

- Instal [Node.js](./readme/https://nodejs.org/en)
- Clone source
- cd to source folder, install dependencies by running command:
  ```
  npm install
  ```
- After install dependencies, start dev (this command will help you to watch and build scss to css):

  ```
  npm run start
  ```

  You can config $primary color in [\_variable.scss](/assets/scss/_variables.scss) file.

## Troubleshooting:

- Make sure you have installed Node.js
