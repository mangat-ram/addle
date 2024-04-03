import TitleSection from '@/components/landing-page/title-section';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Banner from '../../../public/appBanner.png';

function HomePage() {
  return (
    <section>
      <div
        className='overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'
      >
        <TitleSection 
          pill='⭐ Your Workspace Perfected ' 
          title='All-In-One Collaboration and Productivity Platform' 
        />
        <div
          className='bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]'
        >
          <Button 
            variant='secondary'
            className='w-full rounded-[10px] p-6 text-2xl bg-background hover:bg-amber-200'
          >
            Get Addle Free
          </Button>
        </div>
        <div className='md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]'>
          <Image src={Banner} alt="appBanner" />
          <div className='bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10'></div>
        </div>
      </div>
    </section>
  )
}

export default HomePage