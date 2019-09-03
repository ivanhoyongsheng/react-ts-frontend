Simple React frontend with TypeScript.

required: local nodejs/npm installation

Bootstrapped via [Create React App](https://github.com/facebook/create-react-app).

One step run command:

```
npm i && npm run start
```

Libraries:
* react
* typescript
* semantic-ui

Images fetched dynamically with Unsplash API.

Unlike the change password modal, the login screen does not have any specific
handling, just a button that redirects user to marketplace after logging in.

Mock service in place to swap out APIs as soon as they are ready. Fake timeout
of 1000ms. Currently doesn't have any specific error handling.

Uses React Hooks in some places, maybe unnecessarily (ChangePasswordModal might
be better as a class)

This is my first time actually utilizing semantic-ui, previously I have heard
of it but have not used it in a project.


