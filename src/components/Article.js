import React from "react"

function Article({
    title, 
    date="January 1, 1970", 
    preview,
    minutes })
    { 
        function handleMinutes(minutes) {
            const coffeeEmoji = '☕️', bentoEmoji = '🍱'

            if(minutes < 30) {
                if(minutes <= 5) {
                    return <> {coffeeEmoji} {minutes} minutes read </>
                } else if ( minutes > 5 && minutes <= 10) {
                    return  <>{coffeeEmoji}{coffeeEmoji} {minutes} minutes read</>
                    
                } else if ( minutes > 10 && minutes <= 15) {
                    return <>{coffeeEmoji}{coffeeEmoji}{coffeeEmoji} {minutes} minutes read</>
                }
            } else if (minutes >= 30) {
                if(minutes > 40 && minutes <= 50) {
                    return <>{bentoEmoji}{bentoEmoji}{bentoEmoji}{bentoEmoji}{bentoEmoji} {minutes} minutes read</>
                }
            }
        }

        return (
        <article>
            <h3>{title}</h3>
            <small>{date}. &nbsp; {handleMinutes(minutes)} </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article