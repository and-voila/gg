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
      'We partner with Stripe and Discord to handle payments. Both platforms are PCI-DSS Level I certified—essentially, your financial data is as secure as it gets.',
  },
  {
    id: 2,
    question: 'Can I cancel my membership?',
    answer:
      'Yes, you can cancel at any time. Your membership will remain active until your current billing cycle concludes.',
  },
  {
    id: 3,
    question: 'Do you offer refunds?',
    answer:
      'No, we don’t offer refunds. If you find the membership isn’t meeting your expectations, reach out, and we’ll explore ways to improve your experience.',
  },
  {
    id: 4,
    question: 'What about privacy?',
    answer:
      'We prioritize your privacy. We collect only the necessary data to facilitate your membership and offer personalized experiences. For full details, consult our Privacy Policy.',
  },
  {
    id: 5,
    question: 'What kind of content can I expect?',
    answer:
      'Our content spans daily insights, weekly AMAs, playbooks, and a variety of exclusive digital marketing resources. It’s essentially a one-stop-shop for all your marketing needs.',
  },
  {
    id: 6,
    question: 'What topics can I ask about?',
    answer:
      'Our expertise covers the entire digital marketing spectrum. If you have a question that stumps us, we’ll tap into our network to find an answer for you.',
  },
  {
    id: 7,
    question: 'How are personalized Q/A sessions handled?',
    answer:
      'For general queries, use the designated channels like #hey-ambreen, #hey-rebekah, or #hey-sam. For sensitive topics, a DM to one of the mods works. We may anonymize and share the dialogue if it holds wider community value.',
  },
  {
    id: 8,
    question: 'Who can join?',
    answer:
      'Anyone with an interest in digital marketing is welcome. This is a premium Discord server without the usual challenges. Trolls, who find their way in, will be shown the door.',
  },
  {
    id: 9,
    question: 'Is this a safe space?',
    answer:
      'Absolutely. Our conversations are candid but respectful. Radical Candor governs our feedback culture.',
  },
  {
    id: 10,
    question: 'What is Radical Candor?',
    answer:
      'Radical Candor is direct feedback that’s also deeply empathetic. It’s not about being blunt; it’s about being honest in a way that fosters personal and professional growth.',
  },
  {
    id: 11,
    question: 'How do I access the community?',
    answer:
      'As long as you have internet access, just log into Discord and find the And Voila server in your sidebar. You’re in.',
  },
  {
    id: 12,
    question: 'Are there any community rules?',
    answer:
      'Certainly. Upon joining, you’ll be guided through our Community Guidelines, Terms of Service, and Privacy Policy.',
  },
  {
    id: 13,
    question: 'What is your teaching style?',
    answer:
      'We specialize in micro-lessons and bite-sized content. You can absorb actionable insights in 5 minutes or less, and even string them together for a comprehensive playbook.',
  },
  {
    id: 14,
    question: 'Are you any good at what you do?',
    answer:
      'Our NPS score is 95, and we pride ourselves on that. We let our community’s satisfaction speak for itself.',
  },
  {
    id: 15,
    question: 'Why should I join instead of using Twitter, Reddit, etc.?',
    answer:
      'Here, each member receives individualized expert attention. Unlike platforms where you’re lost in the noise, we ensure timely and targeted responses.',
  },
  {
    id: 16,
    question: 'Is the community active across multiple time zones?',
    answer:
      'Yes, we’re a global community. Whether you’re an early bird or a night owl, you’ll find someone to engage with.',
  },
  {
    id: 17,
    question: 'What should I do if I encounter issues?',
    answer:
      'We’re responsive to your concerns. Contact us directly through our site or on the Discord server. We’re committed to resolving any issues you may have.',
  },
];
