export interface CommunityFaq {
  id: number;
  question: string;
  answer: string;
}

export const communityFaqs: CommunityFaq[] = [
  {
    id: 1,
    question: 'How are payments handled?',
    answer:
      'Stripe and Discord take care of the bill. Consider it your financial VIP section.',
  },
  {
    id: 2,
    question: 'Commitment issues?',
    answer: 'Cancel anytime. We won’t send you sappy break-up songs.',
  },
  {
    id: 3,
    question: 'What about refunds?',
    answer: 'No refunds, but breaking up is easy to do.',
  },
  {
    id: 4,
    question: 'Privacy concerns?',
    answer:
      'We guard your data like a bouncer guards the VIP lounge. Check our Privacy Policy.',
  },
  {
    id: 5,
    question: 'Content menu?',
    answer:
      'Daily insights and weekly AMAs, like a Netflix series but for marketing.',
  },
  {
    id: 6,
    question: 'Ask about what?',
    answer: 'Marketing, tech, or your favorite coffee brew—let’s chat.',
  },
  {
    id: 7,
    question: 'Personalized Q/A?',
    answer:
      'Slide into our DMs or post in the channel. Your question might even get its own spotlight.',
  },
  {
    id: 8,
    question: 'Who’s invited?',
    answer:
      'If you’re into marketing, come on in. Trolls, please see yourselves out.',
  },
  {
    id: 9,
    question: 'Is this a judgment-free zone?',
    answer: 'Absolutely, but we also appreciate a good debate.',
  },
  {
    id: 10,
    question: 'How do I join?',
    answer: 'Got internet? You’re practically already here.',
  },
  {
    id: 11,
    question: 'Any ground rules?',
    answer: 'Yes, and you’ll get the lowdown when you join.',
  },
  {
    id: 12,
    question: 'Teaching style?',
    answer: 'Bite-sized wisdom you can use before your coffee gets cold.',
  },
  {
    id: 13,
    question: 'Are you any good?',
    answer: 'We’ve got a 95 NPS score, but who’s counting?',
  },
  {
    id: 14,
    question: 'Why not Reddit or Twitter?',
    answer: 'Here, you’re a VIP, not just another @handle.',
  },
  {
    id: 15,
    question: '24/7?',
    answer: 'Our mods are on a global clock. Someone’s always home.',
  },
  {
    id: 16,
    question: 'Need help?',
    answer: 'We’re one message away. Problems solved, capes optional.',
  },
];
