# What is npm?

- It is a database of all the external packages. It contains
  command-line tools to install those packages and manage their dependencies.

# What is 'parcel/webpack'? Why do we need it?

- Parcel/Webpack is a bundler. It is power-packed with all the good features
  like optimization, minification, compression of code. It does Hot Module Replacement/Reloading, caching, image optimization and much more. Using a bundler like Parcel is useful for optimizing the experience for both the user and developer.

# What is .parcel-cache?

- When we create a build using parcel build command, It stores information about the project
  in this folder so that when it rebuilds, it doesn't have to re-parse and
  re-analyze everything from scratch.

# What is npx?

- npx is a new command line interface (CLI) tool that allows developers to execute any Javascript Package available on the NPM registry without even installing it and run it in the current working directory.

# Difference between devDependencies vs dependencies?

- Packages required by your application in production are dependencies.
  While packages that are only needed for development and testing are devDependencies.

# What is Tree Shaking?

- Removal of unused code from app is called tree Shaking. Helps in increasing performance.

# What is Hot Module Replacement?

- It just replaces the updated code only and doesn't refresh the whole page while
  the application is running. This can significantly speed up development.

# 5 superpowers of parcel and describe any 3.

- Superpowers are image optimization, code splitting, Hot Module Replacement,
  Tree Shaking and Error handling.

- Retain application state which is lost during a full reload.
- Save valuable development time by only updating what's changed.
- Removal of unused code which results in faster development.

# What is '.gitignore'? What should we add and not add in it?

- The .gitignore file tells Git which files to ignore when pushing our project or code
  to the GitHub repository. gitignore is located in the root directory of our repo.
  Node modules, folders created by parcel or webpack , .env file for security purpose when we don't want
  other developers to use it.

# Difference between package.json and package.lock.json.

- package.json is a versioning file used to install multiple packages in our project.
  It contains metadata/configuration about the project and also the functional dependencies that is
  required by the application.
- package.lock.json - To install exact latest version of any package/dependencies into our
  project we need to save this file on github.

# What are node modules? Is it ok to push them on git?

- Our project need some dependencies and those dependencies need further more dependencies
  to run the code. Therefore node modules are basically these dependencies or we can call them packages
  as well. All the main packages which we need in our project are written in package.json file.
  node-modules folder contains generated code which is fetched by npm and will be used in our project and so we don't need to push it to git because we can generate it as and when needed.

# What is the dist folder?

- dist folder is created by parcel bundler. Whenever we run our app in dev mode , Parcel  
  compresses all our JS code into one js file, css code into one css file.

# what is browsersList?

- It tells whether the app is compatible with the browser or not. It tasks an array of browsers.
  Example - Will definitely work on the below mentioned versions
  ["Last 2 chrome Versions",
  "Last 2 firefox versions"]

# Caret and tilda

- The syntax of the npm version looks like the following.
  Major.Minor.Patch

Tilde (~) notation:
It is used to match the most recent patch version.
Tilde ~ notation freezes the major version and minor version.
As we know patch updates are bug fixes that’s why we can say ~ notation allows us to
automatically accept bug fixes.
Example: The ~1.2.0 will update all the future patch updates. We have to write just ~1.2.0 and
all the next patch update dependencies. For example, 1.2.1, 1.2.2, 1.2.5……………1.2.x.
Note: Patch updates are very small security changes in a package that is why the ~version is
approximately equivalent to the version.

Caret (^) notation:
It is used for automatically updating the minor updates along with patch updates.
Example: The ^1.2.4 will update all the future Minor and patch updates, for example, ^1.2.4 will automatically
change the dependency to 1.x.x if any update occurs.
Using caret notation it is important to look at our code regularly if it is compatible
with the newest version or not.
