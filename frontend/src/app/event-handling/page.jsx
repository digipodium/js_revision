'use client';
import React from 'react'

const EventHandling = () => {

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = (result) => {
            const image = new Image();
            image.src = result.target.result;
            document.body.appendChild(image);
        }

        reader.readAsDataURL(file);
    }

    return (
        <div className='container mx-auto py-5'>

            <button onClick={() => { alert('button was clicked') }} className='bg-black text-white p-4 rounded'>
                Click Me
            </button>

            <input type="text"
                className='w-full mt-5 border-2 p-3'
                onChange={(e) => { console.log(e.target.value); }}
            />

            <input type="color"
                onChange={(e) => { document.body.style.backgroundColor = e.target.value; }}
            />

            <input type="file" onChange={handleImageUpload} />

        </div>
    )
}

export default EventHandling;