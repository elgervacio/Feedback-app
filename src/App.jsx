import { useState } from 'react'
import FeedbackData from './Components/data/FeedbackData'
// import FeedbackItem from './Components/FeedbackItem'
import FeedbackList from './Components/FeedbackList'
import Header from './Components/Header'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header text='Feedback UI' />
      <div className="App container" >
        {/* <FeedbackItem /> */}
        <FeedbackList feedback={feedback} />
      </div >
    </>
  )
}

export default App
