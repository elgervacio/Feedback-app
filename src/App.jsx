import { useState } from 'react'
import FeedbackData from './Components/data/FeedbackData'
// import FeedbackItem from './Components/FeedbackItem'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import Header from './Components/Header'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header text='Feedback UI' />
      <div className="App container" >
        {/* <FeedbackItem /> */}
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback} />
      </div >
    </>
  )
}

export default App
