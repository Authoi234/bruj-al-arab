import React from 'react';
import Room from '../Room/Room';
import { Row } from 'react-bootstrap';

const Home = () => {
    const datas = [
        {
            id: 1,
            title: 'Standard Single Room',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
            bed: 1,
            people: 1,
            bedType: 'Single',
            avatar: 'S',
            price: 80900
        },
        {
            id: 2,
            title: 'Couple Power Room',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            bed: 1,
            people: 2,
            bedType: 'Double',
            avatar: 'D',
            price: 90349
        },
        {
            id: 3,
            title: 'Family Capacity Room',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            bed: 2,
            people: 4,
            bedType: 'Family',
            avatar: 'F',
            price: 110000
        }
    ]

    return (
        <div className='container'>
            <Row xc={1} md={2} lg={3} className='g-4'>
                {
                    datas.map(data => <Room key={data.id} room={data}></Room>)
                }
            </Row>
        </div>
    );
};

export default Home;