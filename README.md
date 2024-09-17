# Task Management App

a Task Management Application using React, based on the
provided UX/UI design in Figma. The application should allow users to create, edit, delete,
and organize tasks into categories. Users should also be able to mark tasks as complete
and filter tasks by their completion status or category.

## Node version

```plaintext
v20.14.0
```
## Env

```plaintext
VITE_ENCRYPT_KEY= 
```

## Installation and Run

```plaintext
npm install

npm run dev

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

1.Storage Capacity
  IndexedDB allows you to store larger amounts of data than localStorage. 
2.Transactions
  IndexedDB supports transactions, which ensures data integrity and consistency when performing multiple operations.


### Database 

