import type { Phase, Skill } from './types.ts'

export const founderSkills: Skill[] = [
  {
    id: 'mvp-cut',
    title: 'MVP cut line',
    summary: 'The one loop version one must do, and five things it will not.',
    phase: 'Shape',
    tracks: ['founder'],
    weeks: 1,
    why: 'A first version stalls on the features that felt responsible to include. The cut line is a list of non-goals you can say out loud. It is what makes the build finishable.',
    goodEnough: [
      'You can describe the one loop a user must finish for the product to have done its job.',
      'You have at least five things version one will not do, including one you are attached to.',
      'Each non-goal is tied to what you need to learn, not to taste.',
    ],
    practice:
      'Write the core loop in four steps. Under it, list five non-goals. For the one that scares you, write the sentence you will use when someone asks for it: what you will learn first, and when you would add it.',
    resources: [
      {
        label: 'Paul Graham: Do things that don’t scale',
        url: 'https://paulgraham.com/ds.html',
      },
      {
        label: 'SVPG: Time-boxing product discovery',
        url: 'https://www.svpg.com/time-boxing-product-discovery/',
      },
    ],
  },
  {
    id: 'five-user-pilot',
    title: 'Five-user pilot',
    summary: 'Watch five specific people try the real product.',
    phase: 'Launch',
    tracks: ['founder'],
    weeks: 1,
    why: 'Announcing to everyone is a way to avoid learning. Five people who match the problem, using the deployed product while you watch, will show the broken step your own testing skipped.',
    goodEnough: [
      'Five named people who match the problem frame have agreed to try the deployed product.',
      'You watch at least three of them use it without taking the mouse.',
      'You leave with a ranked list of what blocked them, in their words.',
    ],
    practice:
      'Recruit five people from your interviews or the same kind of user. Send the URL and one task, not a tour. Sit with three of them. Write what they clicked, where they stalled, and a quote. Do not fix anything until those three sessions are done.',
    resources: [
      {
        label: 'Nielsen Norman Group: User interviews',
        url: 'https://www.nngroup.com/articles/user-interviews/',
      },
      {
        label: 'Paul Graham: Do things that don’t scale',
        url: 'https://paulgraham.com/ds.html',
      },
    ],
  },
  {
    id: 'distribution',
    title: 'One distribution channel',
    summary: 'One place you can actually reach these users this month.',
    phase: 'Launch',
    tracks: ['founder'],
    weeks: 1,
    why: 'A deployed product with no path to a user is a private demo. You do not need a growth engine. You need one channel you can operate: a community you are in, a short post, or a list of people you can write to.',
    goodEnough: [
      'You picked one channel and can say why these users already spend time there.',
      'The message talks about their situation, not your feature list.',
      'You can count replies or visits from that channel on their own.',
    ],
    practice:
      'Choose one channel. Write the situation, the offer, and the single task. Send it to 20 specific people, or post it where they already are. Record how many started and how many finished. Leave the second channel alone until you have read those numbers.',
    resources: [
      {
        label: 'Y Combinator: How to get users and grow',
        url: 'https://www.ycombinator.com/library/4c-how-to-get-users-and-grow',
      },
    ],
  },
  {
    id: 'iteration-loop',
    title: 'Weekly iteration loop',
    summary: 'One change a week, chosen from evidence, checked against one metric.',
    phase: 'Launch',
    tracks: ['founder'],
    weeks: 1,
    why: 'Shipping once is an event. A loop is how the product gets better: look at the metric and the notes, pick one change, ship it, and write down what you expect. This is the operating rhythm for everything above.',
    goodEnough: [
      'Each week you look at the metric and the notes, pick one change, and write what you expect.',
      'The change comes from the pilot or the channel, not from a fresh idea with no evidence.',
      'You can point at a week where you decided not to build something.',
    ],
    practice:
      'Run the loop for two weeks. Each week, write four lines: what users did, the one change, what you expect the metric to do, and what you will ignore. At the end of week two, keep the change only if the evidence still supports it.',
    resources: [
      {
        label: 'SVPG: Time-boxing product discovery',
        url: 'https://www.svpg.com/time-boxing-product-discovery/',
      },
    ],
  },
]

export const founderPhases: Phase[] = [
  {
    id: 'choose',
    title: 'Choose',
    blurb: 'A specific person, and a problem they already feel.',
    skillIds: ['problem-framing', 'user-interviews'],
  },
  {
    id: 'shape',
    title: 'Shape',
    blurb: 'A promise, and a hard line around what version one is not.',
    skillIds: ['positioning', 'mvp-cut'],
  },
  {
    id: 'build',
    title: 'Build',
    blurb: 'The smallest real version of the core loop.',
    skillIds: ['typescript', 'react', 'http-api', 'postgres', 'auth'],
  },
  {
    id: 'launch',
    title: 'Launch',
    blurb: 'In front of users, with one number and a way back to them.',
    skillIds: ['metrics', 'deploy', 'five-user-pilot', 'distribution', 'iteration-loop'],
  },
]
