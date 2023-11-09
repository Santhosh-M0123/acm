import React from 'react'

const UpcomingCards = (props) => {
    let OpenForm = (link) => {
        window.open(link , "_blank")
    }
  return (
    <div className='cards_upcoming' onClick={() => OpenForm(props.link)}>
        <div className="card_upcoming_container">
            <img src={props.img} alt="upcoming events" />
        </div>
        <div className="card_block">
            <p>Upcoming</p>
            <i class="fa-solid fa-medal"></i>
        </div>
    </div>
  )
}

export default UpcomingCards