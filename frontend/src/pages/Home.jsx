import React, { useState } from 'react'
import Card from '../components/Card'
import CardData from '../CardData'
import HomeCard from '../components/HomeCard'
import Button from '../components/Layout/Button'

const Home = () => {



  return (
    <>
        <main id="Login">
                <section className="mx-auto w-[100%] md:w-[80%] my-10 p-4">

                  <h2 className="text-3xl font-bold text-center">What brings you to Aeonaxy?</h2>
                  <p className='text-xs text-center'>Select the options that best describe you. Don't worry, you can explore more options later.</p>

                  <div className="flex items-center gap-5 my-5">
                    {
                      CardData?.map((item,i)=>(
                        <HomeCard key={i} id={i} title={item.title} img={item.img} description={item.description} />

                      ))
                    }
                  </div>
                  <div className="w-[20%] mx-auto">

                  <Button title={'Finish Process'} w='50%' />
                  </div>
</section>
</main>
    </>
  )
}

export default Home
