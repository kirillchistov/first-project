import type { Phase, Skill } from './types.ts'

export const engineeringSkills: Skill[] = [
  {
    id: 'html-css-a11y',
    title: 'HTML, CSS, and accessibility',
    summary: 'Use the platform: structure, layout, labels, and keyboard focus.',
    phase: 'Foundations',
    tracks: ['engineering'],
    weeks: 2,
    why: 'The browser already knows how headings, forms, and focus work. React does not replace that. Inaccessible markup is a broken flow, and fullstack work starts by being fluent in the page itself.',
    goodEnough: [
      'You can build a small page with real headings, landmarks, and a labeled form, without a component library.',
      'The layout still reads at a narrow width using normal document flow.',
      'You can tab through it, and every control has an accessible name.',
    ],
    practice:
      'Build a one-page office-hours signup in plain HTML and CSS. It needs a heading structure, a form with labels, an error that is text, and a layout that works at 360px and at 1100px. No framework.',
    stack: ['HTML', 'CSS'],
    resources: [
      {
        label: 'MDN: Learn HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content',
      },
      {
        label: 'MDN: Learn accessibility',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility',
      },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    summary: 'Transform data, talk to the network, and read a stack trace.',
    phase: 'Foundations',
    tracks: ['engineering'],
    weeks: 3,
    why: 'TypeScript and React are JavaScript with opinions. If functions, arrays, objects, and async are shaky, every later topic becomes a hunt for syntax.',
    goodEnough: [
      'You can transform a list of objects with map, filter, and reduce and explain each step.',
      'You can fetch JSON, handle a failure, and show the result.',
      'You can read a stack trace and find the function you wrote.',
    ],
    practice:
      'Build a small list in the browser: add an item, mark it done, and filter the view. Keep it in memory. Then load the initial items with fetch. When the request fails, show a sentence.',
    stack: ['JavaScript'],
    resources: [
      {
        label: 'MDN: JavaScript guide',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      },
      {
        label: 'MDN: Using Fetch',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
      },
    ],
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    summary: 'Make the shape of the data explicit, and keep strict mode on.',
    phase: 'Foundations',
    tracks: ['engineering', 'founder'],
    weeks: 2,
    why: 'Types are a design tool. They make a task, a user, or an API response explicit so the next change fails at compile time instead of in someone’s browser. The code you will be hired to change is already typed.',
    goodEnough: [
      'You can type arguments and return values, including a union and an optional field, and explain each one.',
      'You treat server JSON as untrusted until a function narrows it.',
      'Strict mode is on, and you are not using any to skip an error you understand.',
    ],
    practice:
      'Rebuild the list in TypeScript. Define a Task type. Type the filter as "all" | "open" | "done". Parse fetched JSON in a function that returns the tasks or an error, and make the caller handle both.',
    stack: ['TypeScript'],
    resources: [
      {
        label: 'TypeScript handbook: in 5 minutes',
        url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
      },
      {
        label: 'TypeScript handbook: narrowing',
        url: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html',
      },
    ],
  },
  {
    id: 'git',
    title: 'Git and code review',
    summary: 'Ship small commits, a branch, and a pull request someone can read.',
    phase: 'Foundations',
    tracks: ['engineering'],
    weeks: 1,
    why: 'A job is a shared history. Small commits and a pull request are how you show the work and how you survive a mistake. Review is part of the skill, not a gate someone else owns.',
    goodEnough: [
      'You can branch, commit in slices that each make sense, and open a pull request that says why.',
      'You can read a diff and comment on behavior.',
      'You can undo a local mistake without deleting the repository.',
    ],
    practice:
      'Put the TypeScript list in a repository. Make three commits that could each be reviewed alone. Open a pull request and write five lines on what changed and what you left out. Review an old commit of your own as if you were a teammate.',
    stack: ['Git', 'GitHub'],
    resources: [
      {
        label: 'Pro Git',
        url: 'https://git-scm.com/book/en/v2',
      },
      {
        label: 'GitHub: About pull requests',
        url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests',
      },
    ],
  },
  {
    id: 'react',
    title: 'React',
    summary: 'Decide what state exists, who owns it, and what is derived.',
    phase: 'Frontend',
    tracks: ['engineering', 'founder'],
    weeks: 3,
    why: 'React is the interface layer most product teams will ask you to use. The skill is not JSX. It is deciding what state exists, who owns it, and what is computed during render so the screen cannot drift from the data.',
    goodEnough: [
      'You can split a screen into components and say why state lives where it lives.',
      'A filtered list is derived during render, not copied into a second state variable.',
      'You can explain when an effect is the wrong tool.',
    ],
    practice:
      'Rebuild the task list as a Vite + React + TypeScript app. State is the tasks and the filter. The visible list is derived. The form, the filter, and the list are separate components.',
    stack: ['React', 'TypeScript'],
    resources: [
      {
        label: 'React: Quick start',
        url: 'https://react.dev/learn',
      },
      {
        label: 'React: Managing state',
        url: 'https://react.dev/learn/managing-state',
      },
    ],
  },
  {
    id: 'data-fetching',
    title: 'Data fetching and forms',
    summary: 'Show loading, empty, error, and success. Submit fields on purpose.',
    phase: 'Frontend',
    tracks: ['engineering'],
    weeks: 2,
    why: 'A real screen is a conversation with a server. Forms need labels, a pending state, and a failure someone can read. Most junior fullstack work is this, repeated.',
    goodEnough: [
      'A form submits explicit fields, shows a pending state, and shows an error next to the problem.',
      'Loading data has a defined result if the user leaves or the query changes.',
      'Empty, loading, error, and success are all visible.',
    ],
    practice:
      'Add a form that creates a task by posting JSON. A function that sometimes fails is enough for now. Show saving, show the error, and add the task to the list only after success. Include an empty state.',
    stack: ['React', 'fetch'],
    resources: [
      {
        label: 'React: <form>',
        url: 'https://react.dev/reference/react-dom/components/form',
      },
      {
        label: 'MDN: Using Fetch',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
      },
    ],
  },
  {
    id: 'http-api',
    title: 'HTTP and API design',
    summary: 'Name the resources, the verbs, the status codes, and one error body.',
    phase: 'Backend',
    tracks: ['engineering', 'founder'],
    weeks: 1,
    why: 'The API is a product surface. Names, status codes, and the shape of the JSON are how a client and a server stay honest. Interviews ask you to design this even when the title says frontend.',
    goodEnough: [
      'You can design one resource: URLs, verbs, status codes, and an error body a client can show.',
      'GET does not create, and 400 is not 404.',
      'You can write an example request and response for the happy path and one failure.',
    ],
    practice:
      'On paper, design a tasks API: list, create, and toggle done. Write example JSON and the status code for each, including one validation error. Then make the React form speak only that contract.',
    stack: ['HTTP', 'JSON'],
    resources: [
      {
        label: 'MDN: An overview of HTTP',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview',
      },
      {
        label: 'MDN: HTTP response status codes',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status',
      },
    ],
  },
  {
    id: 'node-api',
    title: 'A Node API',
    summary: 'Serve the contract with Express: JSON in, JSON out, errors on purpose.',
    phase: 'Backend',
    tracks: ['engineering'],
    weeks: 2,
    why: 'Express on Node is still what a lot of job posts mean by a backend. The point is a thin HTTP layer over functions you can follow: routing, JSON, and errors. Not a tour of frameworks.',
    goodEnough: [
      'An Express server reads and writes JSON for one resource.',
      'A validation failure returns 400 with a message. An unexpected failure returns 500 without leaking internals.',
      'Configuration comes from the environment.',
    ],
    practice:
      'Implement the tasks API in Express with the data in memory. Reject an empty title. Point the React app at this server. Restart it and notice that memory vanished. That is why the database is next.',
    stack: ['Node.js', 'Express'],
    resources: [
      {
        label: 'Express: Hello world',
        url: 'https://expressjs.com/en/starter/hello-world.html',
      },
      {
        label: 'Express: Routing',
        url: 'https://expressjs.com/en/guide/routing.html',
      },
    ],
  },
  {
    id: 'postgres',
    title: 'Postgres and SQL',
    summary: 'Store the rows, constrain them, and ask for the ones you need.',
    phase: 'Backend',
    tracks: ['engineering', 'founder'],
    weeks: 2,
    why: 'The data has to outlive the process. SQL is how you say what you want without fetching every row into JavaScript. Postgres is the database you can defend in an interview and use on a real project.',
    goodEnough: [
      'You can create a table with a primary key, a not-null constraint, and one index you can justify.',
      'You can insert, filter, and update with SQL, including parameterized values.',
      'Restarting the API does not erase the tasks.',
    ],
    practice:
      'Create a tasks table. Move the Express handlers off memory and onto SQL. Never build a query by concatenating user input. List open tasks with a WHERE clause. Read the connection URL from the environment.',
    stack: ['Postgres', 'SQL'],
    resources: [
      {
        label: 'PostgreSQL: SQL tutorial',
        url: 'https://www.postgresql.org/docs/current/tutorial-sql.html',
      },
      {
        label: 'node-postgres: Queries',
        url: 'https://node-postgres.com/features/queries',
      },
    ],
  },
  {
    id: 'auth',
    title: 'Auth',
    summary: 'A hashed password, an httpOnly session, and rows scoped to the user.',
    phase: 'Backend',
    tracks: ['engineering', 'founder'],
    weeks: 2,
    why: 'Accounts are where a demo becomes something other people can use. The bar is a session you understand: a password stored with a standard hash, a cookie page scripts cannot read, and queries that know who is calling.',
    goodEnough: [
      'Passwords are hashed with a standard library, and you can say why the raw password must not be stored.',
      'The session id lives in an httpOnly cookie, and a request without it cannot change someone else’s tasks.',
      'You can name what you are leaving for later: reset, OAuth, and roles.',
    ],
    practice:
      'Add signup and login. Hash passwords with bcrypt or argon2. Set an httpOnly session cookie. Scope every task query to the current user. Confirm in the browser that script cannot read the cookie, and that a second user cannot see the first user’s tasks.',
    stack: ['Express', 'httpOnly cookies'],
    resources: [
      {
        label: 'OWASP: Authentication cheat sheet',
        url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',
      },
      {
        label: 'OWASP: Session management cheat sheet',
        url: 'https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html',
      },
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    summary: 'Lock the core loop: a bad write, a good write, and one screen.',
    phase: 'Ship',
    tracks: ['engineering'],
    weeks: 2,
    why: 'A test is a spec the computer can refuse. You do not need one for every line. You need a few that catch a broken core loop: reject a bad task, accept a good one, and keep users apart.',
    goodEnough: [
      'You can test a pure function and a route.',
      'You can test the form with queries a person would understand, such as the label.',
      'You have watched a test fail because you broke the behavior on purpose.',
    ],
    practice:
      'Add Vitest coverage for the validation function and for creating a task: empty title, valid title, missing session. Add one Testing Library test for the form. Break the validation, watch the test fail, then fix it.',
    stack: ['Vitest', 'Testing Library'],
    resources: [
      {
        label: 'Vitest: Getting started',
        url: 'https://vitest.dev/guide/',
      },
      {
        label: 'Testing Library: React',
        url: 'https://testing-library.com/docs/react-testing-library/intro',
      },
    ],
  },
  {
    id: 'deploy',
    title: 'Deploy and security hygiene',
    summary: 'A public HTTPS URL, secrets in the environment, and a short threat list.',
    phase: 'Ship',
    tracks: ['engineering', 'founder'],
    weeks: 1,
    why: 'An app on your laptop is a demo. A URL with HTTPS, environment variables, and a database password you did not commit is something you can send to a user or a hiring manager.',
    goodEnough: [
      'The app is on a public HTTPS URL, and the database connection string is an environment variable.',
      'Secrets are not in the frontend bundle, and you have checked.',
      'You can name what you handled (hashed passwords, sessions, parameterized SQL) and what you have not.',
    ],
    practice:
      'Deploy the API and the React app. Put secrets in the host’s environment. Sign up in a private window, create a task, and reload. Search the built JavaScript for the database password and confirm it is absent.',
    stack: ['HTTPS', 'environment variables'],
    resources: [
      {
        label: 'OWASP Top Ten',
        url: 'https://owasp.org/www-project-top-ten/',
      },
      {
        label: 'OWASP: Secrets management cheat sheet',
        url: 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html',
      },
    ],
  },
  {
    id: 'system-design',
    title: 'System design for interviews',
    summary: 'Walk one service: data model, requests, and the first bottleneck.',
    phase: 'Ship',
    tracks: ['engineering'],
    weeks: 2,
    why: 'Interviews use this to see if you can talk through a small system without hiding in buzzwords. One service, the tables, the read and write path, and the first thing that hurts are enough.',
    goodEnough: [
      'You can draw the browser, the API, and the database, and say what each request does.',
      'You can point at the query that will hurt first as usage grows.',
      'You can name one thing you would not build yet, and why.',
    ],
    practice:
      'Give a 15-minute walkthrough of your tasks app. Cover the data model, signup, create, and list. Say what strains first if many people open the list at once, and the first change you would make. Record it or do it with a friend.',
    resources: [
      {
        label: 'System Design Primer',
        url: 'https://github.com/donnemartin/system-design-primer',
      },
    ],
  },
  {
    id: 'portfolio-app',
    title: 'Portfolio app',
    summary: 'One deployed product you can narrate in five minutes.',
    phase: 'Ship',
    tracks: ['engineering'],
    weeks: 3,
    why: 'The exercises are practice. The piece people remember is one deployed product: who it is for, what you cut, and how the stack supports that. A README that explains the decision matters as much as the code.',
    goodEnough: [
      'One fullstack app is deployed, with auth, a database, and a core loop a stranger can finish.',
      'The README states the user, the problem, the non-goals, and how to run it.',
      'You can demo it in five minutes.',
    ],
    practice:
      'Ship a narrow tool you would actually use: a study log, a recipe scaler, a rehearsal planner. Use this stack. The README gets a problem frame from the Product track. Ask one other person to finish the core loop, and fix the place they got stuck.',
    stack: ['TypeScript', 'React', 'Express', 'Postgres'],
    resources: [
      {
        label: 'React: Quick start',
        url: 'https://react.dev/learn',
      },
      {
        label: 'PostgreSQL tutorial',
        url: 'https://www.postgresql.org/docs/current/tutorial.html',
      },
    ],
  },
]

export const engineeringPhases: Phase[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    blurb: 'The platform, the language, and the habit of small changes.',
    skillIds: ['html-css-a11y', 'javascript', 'typescript', 'git'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    blurb: 'Screens where someone can finish a task.',
    skillIds: ['react', 'data-fetching'],
  },
  {
    id: 'backend',
    title: 'Backend',
    blurb: 'Data, rules, and access, in a shape you can explain.',
    skillIds: ['http-api', 'node-api', 'postgres', 'auth'],
  },
  {
    id: 'ship',
    title: 'Ship',
    blurb: 'Prove it, put it on the internet, and talk through the design.',
    skillIds: ['testing', 'deploy', 'system-design', 'portfolio-app'],
  },
]
