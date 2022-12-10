/* https://app.herotofu.com/forms/b1091f00-7882-11ed-a126-b172cf164538/submissions */

import React from 'react';
import UseEmail from './useEmail';

const Email = () => {

    // You don't need to manage state by yourself
    // use the variables below
    const {
        loading,
        submitted,
        error,
        // sendEmail
    } = UseEmail('https://public.herotofu.com/v1/b1091f00-7882-11ed-a126-b172cf164538');

    // const sendExample = () => {
    //     // Can be any data, static and dynamic
    //     sendEmail({
    //         example_user: "user@example.com",
    //         example_data: new Date().toISOString(),
    //     });
    // };

    return (
        <div id='email' className='bg-base-200 pb-4 m-2'>
            <header className="">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div style={{ margin: "1rem 0", fontSize: '2rem' }}>
                    {submitted && 'Done, email was sent!'}
                    {error ? `Unexpected error: ${error}` : null}
                    {loading && 'Email is being sent now...'}
                </div>
                <div className='w-full max-w-xs mx-auto'>
                    <form action="https://public.herotofu.com/v1/b1091f00-7882-11ed-a126-b172cf164538" method="post">
                        <div className='w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xs" name="Name" id="name" type="text" required />
                        </div>
                        <div className='w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xs" name="Email" id="email" type="email" required />
                        </div>
                        <div className='w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Enter Your Message</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xs" name="Message" id="message" type="text" required />
                        </div>
                        <div className='w-full max-w-xs mt-2'>
                            <input className='btn' type="submit" value="Send Email" />
                        </div>
                    </form>
                    {/* <button onClick={sendExample}>Send test data</button> */}
                </div>
            </header>
        </div>
    );
};

export default Email;