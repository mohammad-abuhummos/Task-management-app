# Task Management App

a Task Management Application using React, based on the
provided UX/UI design in Figma. The application should allow users to create, edit, delete,
and organize tasks into categories. Users should also be able to mark tasks as complete
and filter tasks by their completion status or category.

## Node version

```plaintext
v20.14.0
```

If you’re using nvm, just type

```bash
nvm use
```

## Env

```bash
//key:"550e8400-e29b-41d4-a716-446655440000"
VITE_ENCRYPT_KEY=
```

## Installation and Run

```bash
npm install

npm run dev
```

## Testing

I used Jest, Vitest and React Testing Library for unit and integration testing.

### Running Tests

To run the test suite:

```bash
npm run test
```

## Project Structure

For this project, I used a combination of Layered Structure and Feature-Based Structure:

Layered Structure: This approach organizes the code into different layers based on concerns, ensuring a clean and maintainable architecture.
Feature-Based Structure for components: This method organizes components by features or modules, which is ideal for scalable applications that have multiple independent features.

```plaintext
App
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── db/
│   ├── redux/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── .eslintrc.ts
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```

## Documentation

### Packages

```plaintext

idb
redux
react-redux
react-toastify
redux-thunk

```

### Database

For the database, I used IndexedDB for the following reasons:

- Storage Capacity:
  IndexedDB allows you to store larger amounts of data than localStorage.

- Transactions
  IndexedDB supports transactions, which ensures data integrity and consistency when performing multiple operations.

### Global state management

For global state management, I used Redux for the following reasons:

- Even in small projects, managing the applications state can become complicated as it grows. Redux helps centralize the state in a single store, making it easier to manage and debug.
- Starting with Redux in a small project prepares your app for future scalability. As your project grows, Reduxs structure will support larger and more complex state management needs.
- Sharing state across multiple components becomes much simpler with Redux, avoiding issues of prop drilling or inconsistent state.
- Redux enforces a strict pattern that ensures state updates are predictable and follow clear rules. This helps in maintaining a clear flow of data even in smaller applications.

### Encryption algorithm

For the encryption algorithm i used Caesar Cipher

#### How It Works

The Caesar cipher is a substitution cipher in which every letter in the plaintext is shifted down or up the alphabet a few places, determined by a key.

Encryption Function: caesarEncrypt

```plaintext
Input:
  data - string to encrypt
  key - string to generate shift value (the length of the string is used as a shift value).
Steps:
  Calculate the shift value as the length of the key.
  Loop through each character of data.
  Convert each character's Unicode value (using charCodeAt), add the shift value, and convert it back to a string (using String.fromCharCode).
  Return the encrypted string.
```

Decryption Function: caesarDecrypt

```plaintext
Input:
  encryptedData - string to decrypt
  key - string to generate shift value (the length of the string is used as a shift value).
Steps:
  for every character, it gets its Unicode value using charCodeAt(i) returning the Unicode value of the character at index i.
  It then subtracts the shift value-the length of the key-from this Unicode value, effectively "shifting" the character backward that many positions in the Unicode table.
  The new Unicode value is reversed back into a character by using the String.fromCharCode(); this returns the character for the new Unicode value.
  Return the Decrypted string.
```
