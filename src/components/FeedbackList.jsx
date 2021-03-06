import {motion,AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import React from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackList() {

    const {feedback,isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0))
    {
        return(
            <p>No Feedbacks</p>
        )
    }
    return isLoading ? (
    <h3>Loading........</h3>
    ) : (
        <div className='feedback-list'>
            <AnimatePresence>{feedback.map((item) =>(
                <motion.div 
                key = {item.id}
                initial = {{opacity:1}}
                animate = {{opacity :1}}
                exit = {{opacity:0}}
                >
                <FeedbackItem key = {item.id} 
                item = {item}
                />
                </motion.div>
    
            ))}</AnimatePresence>
            
        </div>
      )

}




export default FeedbackList