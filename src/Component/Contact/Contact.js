import React from 'react'

const Contact = () => {
    return (
        <div className='mt-16 mx-auto'>
            <h1 className="text-center text-5xl">Contact Us</h1>
            <form className="card w-full p-7 max-w-lg shadow-2xl mx-auto" >
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        className="input input-bordered" type='email' required/>
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input
                        className="input input-bordered" type='text' required/>
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea
                        className="input input-bordered h-48" type='email' 
                        required
                        />
                </div>
                <button className='btn mt-4'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact