import MeetupList from '../components/meetups/MeetupList'


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Paris_July_2011-30.jpg/636px-Paris_July_2011-30.jpg',
        address: 'Some address 5, 12345, Some city',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Paris_6e_H%C3%B4tel_Lutetia_562.jpg/640px-Paris_6e_H%C3%B4tel_Lutetia_562.jpg',
        address: 'Some address 5, 12345, Some city',
        description: 'This is a second meetup'
    },
    {
        id: 'm3',
        title: 'A third meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Peninsula_Paris%2C_23_June_2014.jpg/640px-The_Peninsula_Paris%2C_23_June_2014.jpg',
        address: 'Some address 5, 12345, Some city',
        description: 'This is a third meetup'
    },
];

function HomePage(props) {

    return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage
