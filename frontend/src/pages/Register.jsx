import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast';

//----------- Components
import FormInputBox from '../components/Layout/FormInputBox';
import Button from '../components/Layout/Button';
import { handleRegisterUser } from '../functionsAPIs';

const Register = () => {

    const navigate = useNavigate();

    //---------------- State specific stuff
    const [form, setForm] = useState({ name: '', username: '', email: '', password: '', cpassword: '', location: '' });
    const [step, setStep] = useState(1);
    const [avatarSrc, setAvatarSrc] = useState(null)
    const [avatar, setAvatar] = useState('')
    const [loading, setLoading] = useState(false);

    //-------------- handling the functions
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleChangeFile = (e) => {
        const file = e.target.files[0];

        setAvatar(file);
        if (file) {
            setAvatarSrc(URL.createObjectURL(file));
        }
    };


    const nextStep = () => { //next step to fill 
        setStep(step + 1);
    };

    const prevStep = () => { //prev step to updatation
        setStep(step - 1);
    };

    //---------- Function to submit the form data or can say login the users 
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const { password, cpassword } = form;

        if (password !== cpassword) {
            toast.error("Password and confirm password didn't match");
            setForm({ ...form, password: '', cpassword: '' })
            setLoading(false);
            return;
        }

        if (avatar === undefined || avatar === null || !avatar) {
            toast.error("Neccessary to upload profile picture")
            setAvatar('');
            setLoading(false);
            return;
        }
        const myForm = new FormData();;
        myForm.append('name', form.name);
        myForm.append('username', form.username);
        myForm.append('email', form.email);
        myForm.append('location', form.location);
        myForm.append('password', form.password);
        myForm.append('cpassword', form.cpassword);
        myForm.append('avatar', avatar);

        const data = await handleRegisterUser(myForm);

        if (data?.success === false) {
            toast.error(data?.msg);
            setLoading(false);
            return;
        }

        setLoading(false);
        toast.success(data?.msg);
        localStorage.setItem('token', data?.token);
        const user = JSON.stringify(data?.users);
        localStorage.setItem('user', user);
        navigate('/verifyUser');
        localStorage.setItem('isAuthenticated', true);

        setForm({ name: '', username: '', email: '', password: '', cpassword: '', location: '', avatar: '' });
        setAvatarSrc('');
    }

    return (
        <>
            <main id="Register">
                <div className='flex w-[100%] min-h-screen '>

                    <div className='bg-primary md:w-[50%] w-[0%]  '>
                        <div className='mx-auto w-[100%] md:w-[90%] mt-6 p-4 '>

                            <h2 className='text-center mb-20 text-white text-2xl'>
                                {step === 1 ? `Discover The World's Most Rated Service Consultancy`
                                    : `Always Try To Meet User's Need`}</h2>
                            <img src="./images/login.png" alt="Register" width={'802px'} />
                        </div>
                    </div>

                    <div className=" mx-auto w-[100%] md:w-[80%] mt-6 p-4">
                        <h4 className="text-right"> Already have a account? <Link to={'/login'} className='text-highlight' >Sign In</Link> </h4>

                        <div className=" bg-gray-50 py-12 px-2 sm:px-6 lg:px-8">
                            <div className="w-full space-y-8">
                                <div>
                                    <small className="mt-3">Sign Up To Aeonaxy</small>
                                    <h2 className="mt-1 text-3xl font-extrabold text-gray-900">Welcome ! Let's Create  <span className='text-highlight' > Profile</span></h2>
                                </div>
                                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        {step === 1 && (<>
                                            <div className="flex flex-wrap justify-between">

                                                <div className="w-full md:w-1/2 md:pr-2 mb-4">

                                                    <FormInputBox label={'Name'} name={'name'} handleChange={handleChange} value={form.name} placeholder={'John Doe'} />
                                                </div>


                                                <div className="w-full md:w-1/2 md:pl-2 mb-4">
                                                    <FormInputBox label={'Username'} name={'username'} handleChange={handleChange} value={form.username} placeholder={'Johndoe23'} />
                                                </div>
                                            </div>

                                            <FormInputBox label={'Email'} name={'email'} handleChange={handleChange} value={form.email} placeholder={'johndoe23@gmail.com'} maxL={120} minL={5} type='email' />

                                            <div className="flex flex-wrap justify-between">
                                                <div className="w-full md:w-1/2 md:pr-2 mt-5">

                                                    <FormInputBox label={'password'}
                                                        name={'password'} handleChange={handleChange} value={form.password} minL={8} maxL={120} placeholder={'************'} type={'password'} />

                                                </div>

                                                <div className="w-full md:w-1/2 md:pl-2 mt-5">
                                                    <FormInputBox label={'Confirm Password'}
                                                        name={'cpassword'} handleChange={handleChange} value={form.cpassword} minL={8} maxL={120} placeholder={'************'} type={'password'} />

                                                </div>
                                            </div>
                                        </>)}
                                        {step === 2 && (
                                            <>
                                                <div className="flex flex-wrap justify-between items-center">


                                                    <div className="w-full md:pr-2 mb-8 flex items-center justify-between ">
                                                        <img className="md:w-[20%] mx-2 w-[20%]  h-25 rounded-full" src={avatarSrc ? avatarSrc : 'https://via.placeholder.com/200'} alt="avatar" />
                                                        <div>

                                                            <FormInputBox type='file' name={'avatar'} placeholder={''} handleChange={handleChangeFile} label={'Choose Profile'} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <FormInputBox label={'location'} name={'location'} minL={5} handleChange={handleChange} maxL={1000} value={form.location} placeholder={'New York, US'} />

                                            </>
                                        )}

                                    </div>
                                    {/* <Loading /> */}
                                    <div className="flex justify-between mt-4 gap-4 items-center ">
                                        {step > 1 && (<Button w='40%' title={'<< Previous'} handleClick={prevStep} />)}
                                        {step < 2 && (<Button w='40%' title={'Next >>'} handleClick={nextStep} />)}
                                        {step === 2 && <Button title={'Create Account'} type='submit' loading={loading} w='40%' />}

                                    </div>
                                </form>
                            </div>
                        </div>





                    </div>

                </div>
            </main>
        </>
    )
}

export default Register