# StrongTyping

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[Typescript]  is one of the best ways to ensure strong typing in JS. Others being Flow(Fb) and some lesser known like st-js and scala.js that make it mandatory to declare types.

As the codebase gets large and our production is plagued by runtime errors like 'Cannot read property x of undefined'(Let's be honest. We have all got this error in our production environment at some point of time) , it becomes a necessity to enforce strong typing.
Almost all the forefront tech companies are using it. FB came up with flow. MS wooed the FOSS world with typescript, the current favourite. 

In this demo project, we can find
  - Examples that show us the pros and cons of using types in JS.
  - Basic intro to types
  - Migrating the existing codebase to typebase

# Let's begin

  - Here is the refresher intro to typescript. [Typescript in 5 minutes]
  - Intro to basic types that are supported in TS can be found [here].
  
# Code Migration !!!
Hope you are done with the above links. So now comes the question. How do we migrate to TS?

> For a start, this can be a uphill task,
especially if our code spans across multiple ES standards.

Babbel can help us with this, but transpilers can add an overhead. The general method is to go one by one and renaming the files to .ts . Then we can do a compilation  *tsc --pretty* to check and eliminate the legit errors one by one.

The official  [Migration Guide] can be found here.

### Linters
The official TS linter has been oos by [Palantir]. However, almost all the modern IDEs support plugins for TSLint , which can make life easier for someone diving straight into TS from JS.
Here is the [VSCode] linter link

**Hope you found this little guide useful**
    
   [Typescript]:<https://github.com/Microsoft/TypeScript>
   [Typescript in 5 minutes]:<https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html>
   [Migration Guide]: <https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html>
   [here]: <https://www.typescriptlang.org/docs/handbook/basic-types.html>
   [Palantir]: <https://github.com/palantir/tslint>
   [VSCode]: <https://marketplace.visualstudio.com/items?itemName=eg2.tslint>
