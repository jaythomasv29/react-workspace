import React from 'react'
// function way
const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}200x200`} alt='profile'/>
            <div>
                {/* <h2>{id}</h2> */}
                <h2>{name}</h2>
                <h2>{email}</h2>
                <p>j{id}</p>
            </div>
        </div>
    )
}
export default Card;