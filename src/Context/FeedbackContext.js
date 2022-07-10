import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext =  createContext()


export const FeedbackProvider = ({children}) =>{

    const [feedback,setFeedback] = useState([
        {
            id : 1,
            text : 'this item is from context',
            rating : 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
       item : {},
       edit : false 
    }) 
    
    const deleteFeedback = (id) => {
        if(window.confirm('Are You sure you want to delete')){

            setFeedback(feedback.filter((item) => item.id !==id))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit : true
        })

    }

    const updateFeedback = (id,updItem) =>{

        setFeedback(feedback.map((item => item.id === id ?{
            ...item,...updItem} : item))
            
            )

    }

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        //console.log(newFeedback)
        setFeedback([newFeedback,...feedback])
    }

    return <FeedbackContext.Provider value = {{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback

    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext