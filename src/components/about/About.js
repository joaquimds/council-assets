import React from 'react'

import './About.scss'

const About = () => (
  <div className='about'>
    <div className='about__container'>
      <div className='about__content'>
        <h1 className='about__title'>About</h1>
        <div className='about__copy'>
          <p>
            Local authorities in the UK are under unprecedented financial strain due to cuts in government funding and rising demand for services.
            In 2016, the government gave councils in England new powers to sell community spaces such as libraries,
            playing fields and day care centres to help balance their books.
            Thousands of them have been sold since, with little public awareness or scrutiny.
          </p>
          <p>
            The Bureau of Investigative Journalism has obtained information about more than 12,000 pieces of land and property that were sold,
            transferred or otherwise disposed of by local authorities between April 2014 and July 2018.
            We have used this data to map for the first time the community spaces that have been lost across the country,
            in a searchable resource that anyone can use.
          </p>
          <p>
            Our investigation also looked at what councils have done with the money made from selling assets.
            Some have used the proceeds to fund hundreds of redundancies.
          </p>
          <p>
            We hope this map, created in conjunction with journalist Hazel Sheffield and
            the <a href='https://www.farnearer.org' rel='noopener noreferrer' target='_blank'>Far Nearer</a> project,
            will increase transparency and accountability around the sale of public spaces and help arm people with the information they need
            in <a href='https://locality.org.uk/policy-campaigns/save-our-spaces/' rel='noopener noreferrer' target='_blank'>the fight to prevent more being sold</a> in the future.
          </p>
          <h2>The data</h2>
          <p>
            The data was obtained via requests under the Freedom of Information Act 2000 to 353 local authorities in England.
            While we achieved a high response rate,
            we have indicated on each council’s page if the requests were rejected or resulted in only partial information.
          </p>
          <p>
            You can access the raw data and guide for this investigation via
            our <a href='https://docs.google.com/document/d/1CjDSTvo_8WaIp3BCBRI5RTA0T8pmHw2ZSkbJSTBHxA4' rel='noopener noreferrer' target='_blank'>reporting recipe</a>.
            And you can read the stories that come out of this project <a href='https://tbij.com/local' rel='noopener noreferrer' target='_blank'>here</a>.
          </p>
          <p>
            As well as selling community assets, councils are also investing in commercial property, as
            our <a href='https://www.thebureauinvestigates.com/stories/2018-12-04/councils-borrow-billions-to-buy-real-estate' rel='noopener noreferrer' target='_blank'>previous investigation</a> revealed
            last year. The data on what councils are buying is not included in this map but can be found via
            the <a href='https://docs.google.com/document/d/1YGTz5AHjd7Tw-JA455HNZcUkTK0j0AKucHnYTJtTt6w' rel='noopener noreferrer' target='_blank'>reporting recipe</a> for that project.
          </p>
          <p>
            If you have any questions about the data, or spot any significant errors, please contact us
            using <a href='https://docs.google.com/forms/d/10AIYh4hF-qJrp504qUl7oNfV2RrwY5AsxjDdrVs6Utc' rel='noopener noreferrer' target='_blank'>this form</a>.
          </p>
          <h2>About The Bureau of Investigative Journalism</h2>
          <p>
            <a href='https://www.thebureauinvestigates.com' rel='noopener noreferrer' target='_blank' title='The Bureau of Investigative Journalism'>The Bureau of Investigative Journalism</a> is
            an independent, not-for-profit organisation that holds power to account.
            We tackle big subjects through deep reporting that uncovers the truth. We tell the stories that matter.
          </p>
          <p>
            The Bureau informs the public through in-depth investigative journalism, with no corporate or political agenda.
            Through fact-based, unbiased reporting, we expose systemic wrongs, counter misinformation and spark change.
          </p>
          <p>
          This resource was created by our <a href='https://tbij.com/local' rel='noopener noreferrer' target='_blank'>Bureau Local</a> team, a collaborative,
          investigative network across the UK, whose more than 900 members include regional and national news outlets,
          local reporters, hyperlocal bloggers, technologists, community-minded citizens and specialist contributors.
          </p>
          <p>
            The Bureau would like to thank <a href='https://outlandish.com' rel='noopener noreferrer' target='_blank'>Outlandish</a>,
            Charles Boutaud and Joaquim d’Souza for their work on this project.
          </p>
          <p>
            We rely on donations to fund our
            work. <a href='https://www.thebureauinvestigates.com/support-us' rel='noopener noreferrer' target='_blank'>Click here to make a contribution</a>.
          </p>
          <h2>About Far Nearer</h2>
          <p>
            <a href='https://www.farnearer.org' rel='noopener noreferrer' target='_blank'>Far Nearer</a> is
            an independent reporting project by Hazel Sheffield documenting local and community economies in the UK since 2016.
            It is supported by the Friends Provident Foundation.
          </p>
        </div>
        <div className='about__logo'>
          <a href='https://www.farnearer.org' rel='noopener noreferrer' target='_blank'>
            <img src='/icons/farnearer.png' alt='Far Nearer.' />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default About
