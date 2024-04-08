import React from 'react'
import Button from '../components/Layout/Button'

const VerifyUser = () => {
    return (
        <>
            <main id="VerifyUser">
                <section className="mx-auto w-[100%] md:w-[80%] my-6 p-4 text-center">
                    <h3 className="text-3xl font-bold text-center">Please Verify Your Email</h3>
                    <img src="./images/verifyemail.png" alt="verify-mail" width={"350px"} className='mx-auto' />
                    <p>We have sent the confirmation message on specified mail <span className="text-highlight">
                        johndoe23@gmail.com</span> </p>
                        <div className="mx-auto w-[20%] my-3">

                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">

                        <Button title={'Check Inbox'} />
                    </a>
                        </div>
                </section>
            </main>
        </>
    )
}

export default VerifyUser
