import React from 'react';

function Form({
    data,
    strayInfo,
    pushData,
}) {
    return (
        <form className='hero-section-get-in-touch-form' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                name="informant"
                onChange={data}
                className='hero-section-get-in-touch-input'
                placeholder='NAME'
                value={strayInfo.informant}
                required />
            <input
                type='tel'
                name="contact"
                onChange={data}
                className='hero-section-get-in-touch-input'
                placeholder='PH NO'
                value={strayInfo.contact}
                required />
            <input
                type='text'
                name="location"
                className='hero-section-get-in-touch-input' placeholder='LOCATION'
                onChange={data}
                value={strayInfo.location}
                required />
            <input
                type='textarea'
                name="description"
                onChange={data}
                className='hero-section-get-in-touch-input special-input' placeholder='BRIEF DESCRIPTION'
                value={strayInfo.description}
                required />
            <button
                type='submit'
                className='hero-section-get-in-touch-button'
                onClick={pushData}>Connect</button>
        </form>
    )
}

export default Form