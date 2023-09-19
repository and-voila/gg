export interface CommunityFaq {
  id: number;
  question: string;
  answer: string;
}

export const communityFaqs: CommunityFaq[] = [
  {
    id: 1,
    question: 'How are payments processed?',
    answer:
      'We use Discord and Stripe for payments. It’s the big league of online security.',
  },
  {
    id: 2,
    question: 'Can I cancel my membership?',
    answer: 'Of course, anytime you like. We’re flexible like that.',
  },
  {
    id: 3,
    question: 'Do you offer refunds?',
    answer: 'Unfortunately, no refunds. But you can cancel anytime.',
  },
  {
    id: 4,
    question: 'What about privacy?',
    answer:
      'We’re privacy-first, but we do need some data. Read our Privacy Policy for the details.',
  },
  {
    id: 5,
    question: 'What kind of content can I expect?',
    answer:
      'Daily insights, weekly AMAs, and exclusive content. We keep it sizzling.',
  },
  {
    id: 6,
    question: 'What can I ask about?',
    answer: 'Anything from digital marketing to tech. We’ve got you covered.',
  },
  {
    id: 7,
    question: 'How is personalized Q/A handled?',
    answer:
      'Drop questions in our channels. Sensitive? DM us, but we might make it public for all to learn.',
  },
  {
    id: 8,
    question: 'Who can join?',
    answer:
      'Everyone’s welcome, but it’s mainly digital marketing pros. Trolls won’t fit here.',
  },
  {
    id: 9,
    question: 'Is this a safe space?',
    answer:
      'Absolutely, but we call it like we see it. Radical Candor is our style.',
  },
  {
    id: 10,
    question: 'How do I access the community?',
    answer: 'As long as you have internet, you’re in. Easy, right?',
  },
  {
    id: 11,
    question: 'Got any rules?',
    answer: 'Yes, we do. You’ll see them when you join.',
  },
  {
    id: 12,
    question: 'What’s your teaching style?',
    answer:
      'Quick and actionable lessons. Learn in 5 minutes, implement today.',
  },
  {
    id: 13,
    question: 'How good are you?',
    answer: 'Our NPS score is 95. We let our members do the talking.',
  },
  {
    id: 14,
    question: 'Why should I join instead of using Twitter, Reddit, etc.?',
    answer:
      'Here, you’re not just a username. Every post gets real, expert attention.',
  },
  {
    id: 15,
    question: 'Is the community active across multiple time zones?',
    answer:
      'Absolutely, our mods cover various time zones. It’s a global party.',
  },
  {
    id: 16,
    question: 'What if I have issues?',
    answer:
      'We’re here to help. Reach out, and we’ll do our best to make it right.',
  },
];
