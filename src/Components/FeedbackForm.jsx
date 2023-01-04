import React, { useState } from 'react'
import Card from './shared/Card'

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    return (
        <Card>
            <form>
                <h2>How do you rate your service with us?</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text"
                        placeholder='Write areview'
                        value={text} />
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
