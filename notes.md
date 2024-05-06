## Some key points I learnt:

### .prettierrc :

- Prettier is an opinionated code formatter.
- Install it using [command](https://prettier.io/docs/en/install)
- You can configure Prettier via a "prettier" key in your package.json file.
- Basic Configuration:

```
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

### .prettierignore :

- Use .prettierignore to ignore (i.e. not reformat) certain files and folders completely.
- To exclude files from formatting, create a .prettierignore file in the root of your project.
- like env and config files.

### How to use MongoDB Atlas:

1. Create an acount on atlas.
2. Create profile
3. Create a new project
4. You need an IP address to handle the request.
5. Username and password.
6. URL to connect the db.

=> `You can check all your dependencies and packages in package.json file.`

=> `Whenever making a connection with database, Use try n catch method or use promise and async await to handle errors in more meaningful way.`

=> `DB are mostly in other contenents hence it takes time to make a connection. Using better error handlers will make you more productive in handling databases.`

=> ` While updating or changing env variables.Server auto-restart will not work,have to do it manually.`

### CORS:

- Cross-origin resource sharing (CORS) is an extension of the same-origin policy.
- You need it for authorized resource sharing with external third parties.
- For example, you need CORS when you want to pull data from external APIs that are public or authorized.

**Note:** Nodejs API error [Read more](https://nodejs.org/api/errors.html)

### Refresh Token:

- A refresh token is a special token that is used to obtain more **access tokens.**

- This allows you to have short-lived **access tokens** without having to collect credentials every time one expires.

## bcrypt :

- A library to help you hash your passwords.

### jwt:

- JSON Web Token(Bearer Token).
- A compact and self-contained way for securely transmitting information between parties as a JSON object.
- Here are some scenarios where JSON Web Tokens are useful:
- **Authorization:** This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.
- **Information Exchange:** JSON Web Tokens are a good way of securely transmitting information between parties.

### mongoose-aggregate-paginate-v2 :

- A cursor based custom aggregate pagination library for Mongoose with customizable labels.
- **Installation:**

```
npm install mongoose-aggregate-paginate-v2
```

- [Read More](https://www.npmjs.com/package/mongoose-aggregate-paginate-v2)

### multer :

- Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

- Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

**NOTE:** Multer will not process any form which is not multipart (multipart/form-data).

- [Read More](https://github.com/expressjs/multer)

### Cloudinary :

- its an sdk. Used as service to upload file.

### fs(File System):

- The built-in Node. js file system module helps us store, access, and manage data on our operating system.

- Common use for the File System module:

  1.Read files

  2.Create files

  3.Update files

  4.Delete files

  5.Rename files

  - [Read More](https://nodejs.org/api/fs.html#file-system)
