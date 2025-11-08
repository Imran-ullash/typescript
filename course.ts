type Tmentor = {
    name: string,
    designation: string,
    gender: "male" | " female"
}

type Tlearning = {
    firstMonth: {
        carriculam: string
    },
    secondMonth: {
        carriculam: string
    }
}

type Tcourse = {
    id: string,
    name: string,
    destination: string,
    mentor?: Tmentor,
    price?: 12000 | 13009,
    IsRefundable: boolean,
    lessons: string[],
    learning?: Tlearning,
}

const course: Tcourse = {
    id: '2',
    name: 'Backend development 2.0',
    price: 12000,
    mentor: {
        name: 'Sakibul Islam',
        designation: 'SR Backend developer',
        gender: "male"
    },
    destination: 'BD Calling Academy',
    IsRefundable: false,
    lessons: ['html', 'css', 'react'], 
    learning: {
        firstMonth: {
            carriculam: 'Html and css'
        },
        secondMonth: {
            carriculam: 'React and next js learnign'
        },
    }, 
}