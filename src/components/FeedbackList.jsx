import {motion,AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'
import FeedbackItem from './FeedbackItem'

function feedbackList({feedback, handleDelete}) {

    if(!feedback || feedback.length === 0)
    {
        return(
            <p>No Feedbacks</p>
        )
    }

  return (
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
            handleDelete = {handleDelete}
            />
            </motion.div>

        ))}</AnimatePresence>
        
    </div>
  )
}
feedbackList.propTypes = {
    feedback: PropTypes.array.isRequired
}



export default feedbackList