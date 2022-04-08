import Image from 'next/image';
import Link from 'next/link';

import {
  CSHero,
  CSHeader,
  ContentBlock,
  FullWidthImage,
  TwoColImg
} from '../../../components/index';

import styles from '../CaseStudy.module.scss';

const EveContent = () => {
  return (
    <div className={styles.csWrapper}>
      <CSHero vidSrc='/assets/video/Eve-Video.mp4' />

      <CSHeader
        title='eve'
        tags={[
          'sustainability',
          'human-centered design',
          'service design',
          'accessibility',
          'machine learning'
        ]}
        forWhat='Independent Study 2021'
        timeline='16 Weeks'
        tools='Figma, Illustrator, Photoshop, After Effects'
        role='User Research, Strategy, Branding, UX/UI, Product Design'>
        <p>Eve is a digital platform designed to make planning for death easier on you, your loved ones, and the earth.</p>
      </CSHeader>

      <div className={styles.divider}></div>

      <ContentBlock title="background">
        <p>Death is a taboo subject, especially in American culture despite that we all will inevitablely face it one day. Adding a global pandemic into the mix has made our mortality part of daily life and only heightened our fears as a society. There is a need now more than ever to destigmatize death and normalize the conversations and planning surrounding it for the sake of ourselves and our loved ones.</p>

        <p>Additionally, the way we practice death is unsustainable. Traditional burial practices take up usable land along with leaving detrimental impacts to our environment. As people become aware of the ways our behaviors negatively effect the environment, our traditions surrounding death need to change. </p>
      </ContentBlock>

      <FullWidthImage
        imgSrc='/assets/img/graveyard.gif'
        imgAlt=''
      />

      <ContentBlock title='problem' subtitle="People aren&#39;t planning for their deaths, so traditional burials are often the default choice.">
        <p>Our society has began to prioritize sustainability in many areas of our lives so why aren&#39;t people going green in our deaths too? Because people aren&#39;t planning. In fact, over 92% of people aren&#39;t planning for their death or end-of-life, leaving the burden to fall on loved ones. When this happens, traditional burials are chosen out of convenience and familiarity.</p>
      </ContentBlock>

      <ContentBlock title='insight' subtitle='Traditional burials are taking up usable land as well as significantly impacting our environment'>
        <p>Nearly 59 million people die each year globally, and with population rising that number is only growing. We are running out of land to bury our loved ones. Traditional burials are not only costly, but permanently take up usable land with around 100,000 tons of steel going into the earth every year just in the US - that&#39;s enough to rebuild the entire Golden Gate Bridge! Not to mention the untold amount of formaldehyde and toxic chemicals too.</p>
      </ContentBlock>

      <ContentBlock
        title='opportunity'
        subtitle='Encourage people to plan for end-of-life sooner but with sustainability in mind'
      />

      <FullWidthImage
        imgSrc='/assets/img/eve-leaves.gif'
        imgAlt=''
      />

      <ContentBlock title='01' subtitle='name &amp; branding'>
        <p>Eve&#39;s branding and design system was carefully crafted in order to reflect its values of sustainability while also prioritizing being approachable to users. It was important that Eve as a brand evoked a sense of calm and peace of mind to users to offset the uncomfortable and heavy subject of death, and this is seen through the colors, symbols, and visuals that Eve uses across its platform.</p>
      </ContentBlock>

      <TwoColImg
        imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1648762282/logo_shhgxs.jpg"
        imgAlt="Eve logo"
        imgSrc2="https://res.cloudinary.com/austinmel/image/upload/v1648763076/color-palette_qi24sv.jpg"
        imgAlt2="Eve branding colors and fonts"
      />

      <ContentBlock title='02' subtitle='A partnership that encourages end-of-life planning sooner rather than later'>
        <p>While Eve&#39;s platform will be available for anyone to use, Eve will first launch through a B2B model, partnering with sustainable companies who will incorporate Eve as part of a benefits package that is offered to new employees during the job onboarding process.</p>
      </ContentBlock>

      <FullWidthImage
        imgSrc='/assets/img/planning.gif'
        imgAlt=''
      />

      <ContentBlock title='03' subtitle='A human-centered platform designed for education, connection, and peace of mind with a focus on sustainability'>
        <p>Eve&#39;s vision is to be the central resource that any one person uses for education, guidance, and connection when planning for end-of-life.</p>
        <p>Eve believes that planning for death does not have to be uncomfortable; it can be empowering, educational, and deeply personal giving users greater control and peace of mind surrounding their impact and how they want to be remembered.</p>
      </ContentBlock>

      <FullWidthImage
        imgSrc='/assets/img/homepage-overview.gif'
        imgAlt=''
      />

      <TwoColImg
        weird
        imgSrc="/assets/img/onboarding.gif"
        imgAlt=""
        title="user onboarding"
      >
        <ul className={styles.bullets}>
          <li>Interface is simple and approachable.</li>
          <li>Messaging has a friendly and empathetic tone.</li>
          <li>Sustainable focus across messaging, visuals, and illustrations</li>
        </ul>
      </TwoColImg>

      <TwoColImg
        flipped
        imgSrc="/assets/img/preference-questions.gif"
        imgAlt=""
        title="user preferences"
      >
        <p>Prompted with questions for Eve to understand user&#39;s goals, wishes, and personal preferences such as:</p>

        <ul className={styles.bullets}>
          <li>“What brings you here today?”</li>
          <li>“What is important to you when thinking about EOL care?”</li>
          <li>“What is your favorite sustainable brand?”</li>
        </ul>
      </TwoColImg>

      <TwoColImg
        imgSrc="/assets/img/profile-page.gif"
        imgAlt=""
        title="user profile"
      >
        <p>The user&#39;s central hub for all things end-of-life. Dashboard page allows you to:</p>

        <ul className={styles.bullets}>
          <li>Start a new basic plan for you or a loved one</li>
          <li>Edit and manage tasks</li>
          <li>View and engage in tailored educational content based on the user&#39;s preferences</li>
        </ul>
      </TwoColImg>

      <TwoColImg
        flipped
        imgSrc="/assets/img/share-documents.gif"
        imgAlt=""
        title="plan &amp; document sharing"
      >
        <p>Eve encourages users to complete their basic plans and share them with the people they trust to carry them out through reminders and reward offerings.</p>
        <p>Easily add/remove people to your plan, safely upload and store important documents to keep everything central and further reduce carbon footprint.</p>
        <p>seamlessly create - and add money to - a budget to keep yourself on track and lighten the burden for loved ones.</p>
      </TwoColImg>

      <TwoColImg
        imgSrc="/assets/img/features.gif"
        imgAlt=""
        title="plan features"
      >
        <p>Overview of modules that are available to complete</p>
        <p>Preview of additional features that come with a Premium Plan upgrade.</p>
      </TwoColImg>

      <ContentBlock title='04' subtitle='Integration of machine learning through AI to encourage greener practices'>
        <p>Eve&#39;s platform simplifies the journey of planning for death through its easy to use interface and integration of machine learning. Eve leverages machine learning to understand the user&#39;s needs while also advocating for sustainable alternatives. Users will be provided tailored educational resources and AI suggestions based on their previously selected preferences that support greener practices while also aligning with their values and wishes.</p>
      </ContentBlock>

      <FullWidthImage
        imgSrc='/assets/img/machine-learning.gif'
        imgAlt=''
      />

      <ContentBlock title='05' subtitle='Connection to live resources based on user&#39;s proximity and preferences including death doulas and green funeral services'>
        <p>With a premium plan, users have access to additional resources such as death doulas, who can offer additional guidance and emotional support in areas surrounding their own death, a loved ones death, or navigating grief. Users will also be able to look up green funeral services being offered nearby their location.</p>
      </ContentBlock>

      <TwoColImg
        flipped
        imgSrc="/assets/img/eve-logo-animation.gif"
        imgAlt=""
        title="why eve?"
      >
        <p>Eve offers comprehensive education and awareness about greener alternatives that no other company does and plays an active role in advocating for sustainability efforts.</p>

        <p>Eve is the only platform at this time that invites Death Doulas into this process as well as provides a platform for them to host, connect, and build trust &amp; relationships with users early-on.</p>

        <p>Eve is one of the few companies to offer a free option for EOL planning, promoting accessibility for all users.</p>
      </TwoColImg>

      {/* <ContentBlock title='reflections' subtitle='Death Doula platform push for greener burial practices while also encouraging people to plan for end-of-life sooner?'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>

        <div className={styles.actions}>
          <Link href="/work">
            view process
          </Link>
        </div>
      </ContentBlock>

      <FullWidthImage
        imgSrc='https://via.placeholder.com/1200x600'
        imgAlt=''
      /> */}
    </div>
  )
}

export default EveContent;
