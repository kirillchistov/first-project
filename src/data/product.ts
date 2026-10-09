import type { Phase, Skill } from './types.ts'

export const productSkills: Skill[] = [
  {
    id: 'problem-framing',
    title: 'Problem framing',
    summary: 'Name the user, the pain, and the outcome before you name a feature.',
    phase: 'Foundations',
    tracks: ['product', 'founder'],
    weeks: 1,
    why: 'A ticket, a roadmap, and a hiring story all fall apart when they start from a feature. A frame says who is stuck, what they are trying to get done, and what better means, before anyone argues about the interface.',
    goodEnough: [
      'You can describe the user, the situation, and the outcome without naming your product.',
      'You can list what this problem does not include, and why that line exists.',
      'Someone else can repeat the frame and you would not correct them.',
    ],
    practice:
      'Pick a product you use every week. Write six lines: who it is for, what they were trying to do the last time they used it, what got in the way, what better looks like, what you are not solving, and how you would notice if it worked. Leave features out.',
    resources: [
      {
        label: 'SVPG: Product discovery',
        url: 'https://www.svpg.com/product-discovery/',
      },
      {
        label: 'SVPG: Product model concepts',
        url: 'https://www.svpg.com/product-model-concepts/',
      },
    ],
  },
  {
    id: 'user-interviews',
    title: 'User interviews',
    summary: 'Run conversations that surface behavior, not compliments.',
    phase: 'Foundations',
    tracks: ['product', 'founder'],
    weeks: 2,
    why: 'People are polite about ideas and specific about the last time something went badly. Interviews collect that specificity. Product interviews ask for it, and a launch without it is a guess with a deploy button.',
    goodEnough: [
      'You can recruit five people who match the frame, not five friends who will be kind.',
      'Your questions ask about the last time something happened, not whether they like your idea.',
      'Your notes contain what they did and what they had already tried, in their words.',
    ],
    practice:
      'Write a guide of eight questions that never pitches a solution. Hold two 25-minute conversations. After each, write three things they did, one thing they had already tried, and one belief of yours that did not survive.',
    resources: [
      {
        label: 'Nielsen Norman Group: User interviews',
        url: 'https://www.nngroup.com/articles/user-interviews/',
      },
    ],
  },
  {
    id: 'jobs-to-be-done',
    title: 'Jobs to be done',
    summary: 'Describe the progress someone is hiring a product to make.',
    phase: 'Foundations',
    tracks: ['product'],
    weeks: 1,
    why: 'Users do not buy a category. They hire something to make progress in a particular situation. The job is the unit that keeps you from copying a competitor’s feature list.',
    goodEnough: [
      'You can state the job as progress: in this situation, I want to do this, so I can get that.',
      'You can name the current alternative, including a spreadsheet or doing nothing.',
      'You can tell the job apart from a demographic and from a feature.',
    ],
    practice:
      'Rewrite your problem frame as one job story. List three alternatives people use today, including a clumsy one. Mark which pains come from the situation and which come from those alternatives.',
    resources: [
      {
        label: 'Harvard Business Review: Know your customers’ jobs to be done',
        url: 'https://hbr.org/2016/09/know-your-customers-jobs-to-be-done',
      },
    ],
  },
  {
    id: 'opportunity-mapping',
    title: 'Opportunity mapping',
    summary: 'Keep problems attached to an outcome, and ideas attached to problems.',
    phase: 'Discovery',
    tracks: ['product'],
    weeks: 1,
    why: 'A solution brainstorm feels busy and skips the problems worth solving. A map shows which opportunities have no idea yet, and which ideas are only favorite features.',
    goodEnough: [
      'One outcome sits at the top, with opportunities underneath written as user problems.',
      'Each opportunity points at a conversation, a ticket, or a metric.',
      'You can choose a branch to explore without pretending the others are deleted.',
    ],
    practice:
      'From your interview notes, build a one-page tree. Put the outcome at the top, at least four opportunities as problems, and solution ideas only on the leaves. Circle the opportunity you understand least.',
    resources: [
      {
        label: 'Product Talk: Opportunity solution trees',
        url: 'https://www.producttalk.org/opportunity-solution-trees/',
      },
      {
        label: 'SVPG: Discovery sprints',
        url: 'https://www.svpg.com/discovery-sprints/',
      },
    ],
  },
  {
    id: 'prioritization',
    title: 'Prioritization',
    summary: 'Choose a bet and say what would prove you wrong.',
    phase: 'Discovery',
    tracks: ['product'],
    weeks: 1,
    why: 'Every item on a list can be defended. Prioritization is the choice of one bet, plus the reason you are willing to be wrong. Teams trust a priority when that reasoning is visible.',
    goodEnough: [
      'Each candidate has a user outcome, a rough impact, and the main way it might fail.',
      'You can explain the choice in a few sentences without a scoring spreadsheet.',
      'You wrote down what you are leaving for later, and what would change your mind.',
    ],
    practice:
      'Take four opportunities from your tree. For each, write the best case, the cheapest way to learn you are wrong, and the cost of being wrong. Choose one. Explain it to a skeptical teammate using the evidence, not the word priority.',
    resources: [
      {
        label: 'SVPG: Product discovery',
        url: 'https://www.svpg.com/product-discovery/',
      },
    ],
  },
  {
    id: 'prds',
    title: 'PRDs that ship',
    summary: 'Write the problem, the slice, the non-goals, and the checks.',
    phase: 'Discovery',
    tracks: ['product'],
    weeks: 1,
    why: 'A spec is a communication tool. Engineers and designers can build from it when the problem, the slice, the non-goals, and the checks are obvious. A long document that hides those gets skipped.',
    goodEnough: [
      'The opening states the user, the problem, and the outcome.',
      'Scope and non-goals are explicit, including one idea you considered and rejected.',
      'A person can tell whether the slice is done without asking you.',
    ],
    practice:
      'Write a two-page spec for the opportunity you chose. Include the problem, the user, the first slice, three non-goals, and five acceptance checks. Ask someone technical to mark every sentence they would have to guess.',
    resources: [
      {
        label: 'SVPG: Product discovery',
        url: 'https://www.svpg.com/product-discovery/',
      },
      {
        label: 'SVPG: Discovery sprints',
        url: 'https://www.svpg.com/discovery-sprints/',
      },
    ],
  },
  {
    id: 'metrics',
    title: 'Metrics',
    summary: 'Pick a north star, a funnel, and a guardrail.',
    phase: 'Delivery',
    tracks: ['product', 'founder'],
    weeks: 1,
    why: 'Without a number, better is a mood. A north star says what value looks like, a funnel shows where it leaks, and a guardrail stops you from winning by making something else worse.',
    goodEnough: [
      'You can say who gets what value, and how you would count it.',
      'You can sketch the path from arrival to that value in five steps or fewer.',
      'You named one guardrail you refuse to damage, such as trust, speed, or support load.',
    ],
    practice:
      'For the product in your spec, define the north star, the funnel, and one guardrail. Write how you would record the step you are most unsure about. If you cannot describe that event in plain language, the metric is not ready.',
    resources: [
      {
        label: 'Amplitude: North Star metric',
        url: 'https://amplitude.com/blog/north-star-metric',
      },
    ],
  },
  {
    id: 'analytics-for-pms',
    title: 'Analytics for PMs',
    summary: 'Ask one precise question of event data, including a little SQL.',
    phase: 'Delivery',
    tracks: ['product'],
    weeks: 2,
    why: 'You will not always have an analyst in the room. Naming the events a question needs, and reading one query, is what turns a metric definition into an answer you can defend.',
    goodEnough: [
      'You can name the events and properties a question needs before you write a query.',
      'You can write SQL that counts people who did one thing and then another, inside a time window.',
      'You can say what the query does not prove.',
    ],
    practice:
      'Sketch a tiny events table with user id, event name, and timestamp. Write one SQL query for “how many people finished the core action within a day of starting?” Then write who is missing from that table.',
    stack: ['SQL'],
    resources: [
      {
        label: 'PostgreSQL: SQL tutorial',
        url: 'https://www.postgresql.org/docs/current/tutorial-sql.html',
      },
      {
        label: 'PostHog: Product analytics',
        url: 'https://posthog.com/docs/product-analytics',
      },
    ],
  },
  {
    id: 'experiments',
    title: 'Experiments',
    summary: 'Know when a test is the right way to learn, and when it is not.',
    phase: 'Delivery',
    tracks: ['product'],
    weeks: 1,
    why: 'An A/B test answers a narrow kind of uncertainty. Many decisions are cheaper to settle with five users, a prototype, or a look at the funnel. The skill is knowing which tool fits the question.',
    goodEnough: [
      'You can say what decision changes if the result goes either way.',
      'You can explain why this question needs a test instead of an interview or a metric read.',
      'You treat “no detectable difference” as an answer.',
    ],
    practice:
      'Take one idea from your spec. Write the decision it would change, the metric, the guardrail, and what you would do after two weeks of data. If you cannot name the decision, write the cheaper way to learn and skip the test.',
    resources: [
      {
        label: 'Nielsen Norman Group: A/B testing',
        url: 'https://www.nngroup.com/articles/ab-testing/',
      },
      {
        label: 'SVPG: Live-data prototypes',
        url: 'https://www.svpg.com/product-discovery-with-live-data-prototypes/',
      },
    ],
  },
  {
    id: 'roadmaps',
    title: 'Roadmaps and stakeholders',
    summary: 'Tell the story of the bets, not a calendar of features.',
    phase: 'Delivery',
    tracks: ['product'],
    weeks: 1,
    why: 'A roadmap is a narrative. Stakeholders fight a chart that pretends the future is known. They can engage with the outcome, the current bet, and what you will learn next.',
    goodEnough: [
      'Work is grouped by outcome, and each item says what you are trying to learn or change.',
      'Any date you show is a commitment you can actually make.',
      'You can walk someone through what you are not promising.',
    ],
    practice:
      'Turn your spec and the opportunities you deferred into a one-page roadmap with now, next, and later. Now has a bet and a learning goal. Later has problems, not features. Read it aloud in under three minutes.',
    resources: [
      {
        label: 'SVPG: The alternative to roadmaps',
        url: 'https://www.svpg.com/the-alternative-to-roadmaps/',
      },
    ],
  },
  {
    id: 'positioning',
    title: 'Positioning',
    summary: 'Say who it is for, the alternative, and the difference they can feel.',
    phase: 'Proof',
    tracks: ['product', 'founder'],
    weeks: 1,
    why: 'If you cannot say who it is for and what they would do otherwise, the product sounds like everyone else’s. Positioning is the sentence that makes the spec, the page, and the interview story specific.',
    goodEnough: [
      'You can name the user, the situation, the alternative, and the difference that matters to them.',
      'The difference is something a user can recognize, not an internal adjective.',
      'A stranger can tell whether they are the audience from the sentence alone.',
    ],
    practice:
      'Write: for [user] who [situation], this is the [category] that [difference], unlike [alternative]. Strip the jargon. Show it to someone who matches the user and ask which word they do not believe.',
    resources: [
      {
        label: 'April Dunford: A quickstart guide to positioning',
        url: 'https://www.aprildunford.com/post/a-quickstart-guide-to-positioning',
      },
    ],
  },
  {
    id: 'case-study',
    title: 'Hiring case study',
    summary: 'Tell one decision: the evidence, the bet, and the tradeoff.',
    phase: 'Proof',
    tracks: ['product'],
    weeks: 2,
    why: 'A product interview is a test of judgment you can show on paper. A case study is one decision, not a tour of features: the frame, the evidence, the bet, what you gave up, and what happened.',
    goodEnough: [
      'The story is about one decision, and a reader can see what you personally did.',
      'You include a tradeoff and something that did not go as you hoped.',
      'The ending says what you learned, not only what shipped.',
    ],
    practice:
      'Write two pages about one product decision from this roadmap or from work you have done. Use this order: situation, what you believed, what you learned, what you chose, what you gave up, what happened. Cut every sentence that is only a tool name.',
    resources: [
      {
        label: 'SVPG: Product discovery',
        url: 'https://www.svpg.com/product-discovery/',
      },
    ],
  },
]

export const productPhases: Phase[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    blurb: 'See the problem clearly before you name a solution.',
    skillIds: ['problem-framing', 'user-interviews', 'jobs-to-be-done'],
  },
  {
    id: 'discovery',
    title: 'Discovery',
    blurb: 'Choose what to build with evidence you can point at.',
    skillIds: ['opportunity-mapping', 'prioritization', 'prds'],
  },
  {
    id: 'delivery',
    title: 'Delivery',
    blurb: 'Turn a bet into something a team can ship and measure.',
    skillIds: ['metrics', 'analytics-for-pms', 'experiments', 'roadmaps'],
  },
  {
    id: 'proof',
    title: 'Proof',
    blurb: 'Show the judgment in a sentence and in a story.',
    skillIds: ['positioning', 'case-study'],
  },
]
