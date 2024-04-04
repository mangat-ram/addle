import TitleSection from '@/components/landing-page/title-section';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Banner from '../../../public/appBanner.png';
import Cal from '../../../public/cal.png';
import { CLIENTS } from '@/lib/constants';
import { randomUUID } from 'crypto';
import { USERS } from '@/lib/constants';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import CustomCard from '@/components/landing-page/custom-card';

function HomePage() {
  return (
    <>
      <section
        className='overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'
      >
        <TitleSection 
          pill='⭐ Your Workspace,Perfected' 
          title='All-In-One Collaboration and Productivity Platform' 
        />
        <div
          className='bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]'
        >
          <Button 
            variant='secondary'
            className='w-full rounded-[10px] p-6 text-2xl bg-background hover:bg-amber-200 cursor-pointer'
          >
            Get Addle Free
          </Button>
        </div>
        <div className='md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]'>
          <Image src={Banner} alt="appBanner" />
          <div className='bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10'></div>
        </div>
      </section>
      <section
       className='px-4 sm:px-6 flex justify-center items-center flex-col'
      >
        <div
          className='w-[30%] blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-10 top-22'
        />
        <TitleSection 
          title='Keep Track of your meetings all in one place'
          subheading='Capture your Ideas,thoughts and meeting notes in a structured and organized manner'
          pill='Features'
        />
        <div
          className='mt-10 max-w-[450px] flex justify-center items-center relative sm:ml-0 rounded-2xl border-8 border-washed-purple-300 border-opacity-10' 
        >
          <Image src={Cal} alt='Banner' className='rounded-2xl' />
        </div>
      </section>
      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                  'flex-row-reverse': index === 1,
                  'animate-[slide_250s_linear_infinite]': true,
                  'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                  'ml-[100vw]': index === 1,
                }),
                'hover:paused'
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage