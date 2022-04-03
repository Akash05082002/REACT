import { useNavigate  } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const history=useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-started-25aa4-default-rtdb.firebaseio.com/meetups.json',
             {
                 method: 'POST',
                 body:JSON.stringify(meetupData),
                 header: {
                     'Content-Type': 'application/json'
                 }
             }
            ).then(() => {history('/');});
    }

    return <section>
        <h1>Add New Meetup </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;