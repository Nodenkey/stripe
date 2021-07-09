export const tiers = [
    {
        type: 'Bronze',
        price: '200',
        description: 'The essentials for your team to be ready to build components',
        package: [
            'Comps',
            'Wireframes',
            'Mood board'
        ],
        color: 'white',
        buttonBackground: '#cd7f32',
        priceId: process.env.GATSBY_STRIPE_BRONZE
    },
    {
        type: 'Gold',
        price: '800',
        description: 'Get enough to take the next steps with amazing components we provide',
        package: [
            'Prototypes',
            'Comps',
            'Wireframes',
            'Mood board'
        ],
        color: 'black',
        buttonBackground: '#FFD700',
        priceId: process.env.GATSBY_STRIPE_GOLD
    },
    {
        type: 'Platinum',
        price: '2,500',
        description: 'Gain access to the full potential of our platform. All components to build amazing things.',
        package: [
            'Design style guide',
            'Prototypes',
            'Comps',
            'Wireframes',
            'Mood board'
        ],
        color: 'black',
        buttonBackground: '#e5e4e2',
        priceId: process.env.GATSBY_STRIPE_PLATINUM
    },
]