// localhost/new-meetup

import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUp() {
    function addMeetUpHandler(enteredMeetupData) {
        console.log(enteredMeetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUp
