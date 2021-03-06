import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage(){
    const [isLoading,setIsLoading] = useState(true);
    cons [loadedMeetups,setLoadedMeetups]=useState();

    fetch('https://react-started-25aa4-default-rtdb.firebaseio.com/meetups.json') 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      })

      if(isLoading){
        return <section>
          <p>Loading...</p>
        </section>
      }

    return (
        <section>
            <h1>All meetups</h1>
            <MeetupList meetups={DUMMY_DATA}/>
        </section>
    );
}

export default AllMeetupsPage;