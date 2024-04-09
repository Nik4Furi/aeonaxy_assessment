import React, { useState } from 'react'
import CardData from '../CardData'
import HomeCard from '../components/HomeCard'
import Button from '../components/Layout/Button'

import toast from 'react-hot-toast'

const Home = () => {

  const handleThanks = ()=>{
    toast.success('Thanks for your response 🤓')
  }

  return (
    <>
      <main id="Home">
        <section className="mx-auto w-[100%] md:w-[80%] my-10 p-4">

          <h2 className="text-3xl font-bold text-center">What brings you to Aeonaxy?</h2>
          <p className='text-xs text-center'>Select the options that best describe you. Don't worry, you can explore more options later.</p>

          <div className="flex items-center md:flex-nowrap sm:justify-center flex-wrap gap-3 my-5">
            {
              CardData?.map((item, i) => (
                <HomeCard key={i} id={i} title={item.title} img={item.img} description={item.description} />

              ))
            }
          </div>
          <div className="w-[20%] mx-auto">

            <Button handleClick={handleThanks} title={'Finish Process'} w='50%' />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
