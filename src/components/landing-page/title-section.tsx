import React from 'react'

interface TitleSectionProps{
  title: string;
  subheading?: string;
  pill: string 
}
const TitleSection:React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill
}) => {
  return (
    <React.Fragment>
      <section
        className='flex flex-col gap-4 justify-center items-start md:items-center'
      >
        <article
          className='rounded-full p-[1px] text-sm dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple'
        >

        </article>
      </section>
    </React.Fragment>
  )
}

export default TitleSection