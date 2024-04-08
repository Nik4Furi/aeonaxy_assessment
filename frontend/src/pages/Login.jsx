import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Layout/Button';
import FormInputBox from '../components/Layout/FormInputBox';

const Login = () => {

    const [form, setForm] = useState({ email: '', password: '' });
    const [loading,setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        console.log(form);

        setLoading(false);
        setForm({email:'',password:''})
    }

    return (
        <>
            <main id="Login">
                <section className="mx-auto w-[100%] md:w-[80%] my-6 p-4">

                    <h4 className="text-right"> Create a new account ? <Link to={'/register'} className='text-highlight'>Sign Up</Link> </h4>

                    <div className="flex md:flex-row items-stretch w-[100%] ">
                        <div className="left  w-[0%] md:w-[40%] relative">

                            <img src="./images/register.png" alt="login" className='absolute inset-0 w-full h-full object-contain' />
                        </div>

                        <div className="right w-[100%] md:w-[60%] p-7">

                            <div className="flex items-start justify-start bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                                <div className="max-w-md w-full space-y-8">
                                    <div>
                                        <small className="mt-3">Sign in to your account</small>
                                        <h2 className="mt-1 text-3xl font-extrabold text-gray-900">Welcome Back</h2>
                                    </div>
                                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                        <input type="hidden" name="remember" value="true" />
                                        <div className="rounded-md shadow-sm -space-y-px">


                                            <FormInputBox label={'Email'} name={'email'} handleChange={handleChange} value={form.email} placeholder={'johndoe23@gmail.com'} maxL={120} minL={5} type='email' />

                                            <FormInputBox label={'password'}
                                                name={'password'} handleChange={handleChange} value={form.password} minL={8} maxL={120} placeholder={'************'} type={'password'} />

                                        </div>


                                        <div>
                                            <Button type='submit' title={'Sign In'} loading={loading} />
                                        </div>
                                    </form>
                                </div>
                            </div>





                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}

export default Login
