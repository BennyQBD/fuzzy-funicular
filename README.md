# Initial Readme!

### TODO:
- Redo these steps *from scratch* on a separate branch. Verify that they actually get the same result.

### Project setup steps
- Git repository
- Add initial README.md. Markdown is preferred format due to allowing readable stylized plain text and easy conversion to rendered formats.
- Add COPYING. Always remember *YOU* are the copyright holder no matter what license you use! That means you can change license at any time, or give different license terms to different people, etc. When in doubt, I recommend AGPL as default license for three reasons
  1) It's compatible with virtually every other free or open source license, which means there's minimal legal headache when considering whether you're legally able to use library X or example code Y.
  2) When talking to people, my experience is people generally want others to be able to use the code how they want, but they *don't* want others suing them, claiming credit for their work, or doing anything else that blatantly undermines their intention to openly share the code. To my determination, AGPL is a better match for these requirements than any other open source license.
  3) You can always change license later if you want. If you do change license however, it's better to change from a less permissive to a more permissive license than vice-versa.
  4) One exception: If you're making a very small piece of software (no more than a few hundred SLOC), then the permissive MIT license is a superior default choice.
  5) For more in depth consideration, here's a general list of recommended open source licenses from the Open Source Initiative: https://opensource.org/licenses/alphabetical
- Choose programming language: If the task obviously demands a specific language and no other will do, then use that language. Otherwise, when in doubt use TypeScript. It's broadly applicable to many application and usage areas since it's JavaScript-based, but more importantly according to Software Engineering research paper "A Large Scale Study of Programming Languages and Code Quality in Github" TypeScript is among the most productive and low-defect of all common programming languages by a notable margin. Any alternative language should need a pretty compelling case in it's favor to overcome that prior.



### Setting up a TypeScript Project
TODO: Do these any of these commands actually require npx?
1) Install node.js & npm
2) Install Visual Studio Code (Best editor for the vast majority of purposes. About 80% of the way there on nearly all meaningful fronts).
3) In the folder, run `npm init` Note the default index.js file is okay to leave. You don't need to use it unless you are sharing via npm.
4) Install TypeScript `npm install --save-dev typescript`
5) Install ESLint `npm install --save-dev eslint`
6) Initialize TypeScript `tsc --init`
7) Initialize ESLint `eslint --init`
8) In Visual Studio Code, open the folder the project is in to "import" it into VSCode
9) Ensure ESLint is installed as a plugin in VSCode
10) In VSCode settings.json, ensure ESLint is set to run automatically upon save.
```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": [
    "typescript"
]
```
11) Create a folder in the project called `src`
12) Create a file `main.ts`
13) Build the project by running `tsc` or `tsc -w` for continuous compilation on change
14) Run `node dist/main.ts` to execute the code
15) Update package.json with scripts `"build": "tsc", "start": "node dist/main.js"`
16) Install tsc-watch `npm install --save-dev tsc-watch`
17) Install unit testing tools `npm install nyc chai mocha ts-node @types/chai @types/mocha --save-dev`
18) Create test script in package.json `"test": "mocha -r ts-node/register src/**/*.spec.ts"`
19) Create coverage script in package.json `"coverage": "npx nyc npm run test"`
20) Update package.json with scripts
```
	"watch-test": "npx tsc-watch --onSuccess 'npm run coverage'",
	"watch-start": "npx tsc-watch --onSuccess 'npm start"
```

??) Start development by opening a console and running `npm run watch-test`
??) If done correctly, package.json should *only* have devDependencies, but no dependencies.


5) If using a UI Framework, recommend Preact: It's like React, except exceptionally tiny (3MB??). `npm install preact`
7) If you need to directly run ts files, install ts-node
8) If you're running in a web browser, use Parcel (as a GLOBAL NPM PACKAGE).





### Standards

- 2020-10-13 - Basic checklist definition of done, not thought out myself just copied from
  https://apiumhub.com/tech-blog-barcelona/definition-of-done-examples-software-projects/
    Produced code for presumed functionalities
    Assumptions of User Story met
    Project builds without errors
    Unit tests written and passing
    Project deployed on the test environment identical to production platform
    Tests on devices/browsers listed in the project assumptions passed
    Feature ok-ed by UX designer
    QA performed & issues resolved
    Feature is tested against acceptance criteria
    Feature ok-ed by Product Owner
    Refactoring completed
    Any configuration or build changes documented
    Documentation updated
    Peer Code Review performed
