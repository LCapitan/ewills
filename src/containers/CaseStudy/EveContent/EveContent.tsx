import Image from 'next/image';
import Link from 'next/link';

import { CSHero, CSHeader, ContentBlock } from '../../../components/index';

import styles from '../CaseStudy.module.scss';

const EveContent = () => {
  return (
    <>
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
        <p>Eve is digital platform that makes the journey for death more approachable and sustainable. kwefnk eflwnfeklwnfe klw nfek  lwnfe kl nfwlke nfwl knfel kwnfelk wnf ewkl fne wlfnwe.</p>
      </CSHeader>

      <div className={styles.divider}></div>

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='background'>
        <p>Death is taboo, covid has blah blah blah I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl.</p>
        <p>Fam truffaut iPhone gastropub, butcher af kinfolk 90&#39;s next level gochujang vape glossier selfies quinoa. Cold-pressed narwhal helvetica, bushwick swag brooklyn bespoke chicharrones DIY selvage. Pork belly you probably haven&#39;t heard of them williamsburg, kale chips</p>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      <div className={styles.fullWidthImage}>
        <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
      </div>

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='problem' subtitle='Traditional burials are taking up usable land as well as significantly impacting our environment'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='insight' subtitle='Over 92% of people arent planning for their deaths, leaving it to fall on loved ones'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='opportunity' subtitle='How do we push for greener burial practices while also encouraging people to plan for end-of-life sooner?'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      <div className={styles.fullWidthImage}>
        <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
      </div>

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='01' subtitle='name &amp; branding'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      <div className={styles.twoColImage}>
        <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648762282/logo_shhgxs.jpg" width="575" height="600" alt="" layout="responsive" />

        <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648763076/color-palette_qi24sv.jpg" width="575" height="600" alt="" layout="responsive" />
      </div>

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='02' subtitle='A partnership that encourages end-of-life planning sooner rather than later'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      <div className={styles.fullWidthImage}>
        <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
      </div>

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='03' subtitle='A partnership that encourages end-of-life planning sooner rather tA human-centered platform designed for education, connection, and peace of mind with a focus on sustainability'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      <div className={styles.imageContent}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648763833/machine-learning_ad4u9z.png" width="675" height="490" alt="" layout="responsive" />
        </div>

        <div className={styles.content}>
          <h3>user onboarding</h3>
          <h4>I&#39;m baby chambray raclette distillery semioticsa</h4>
          <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee..</p>
        </div>
      </div>

      <div className={styles.imageContentFlipped}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648763833/machine-learning_ad4u9z.png" width="675" height="490" alt="" layout="responsive" />
        </div>

        <div className={styles.content}>
          <h3>user profile</h3>
          <h4>I&#39;m baby chambray raclette distillery semioticsa</h4>
          <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee..</p>
        </div>
      </div>

      <div className={styles.imageContent}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648763833/machine-learning_ad4u9z.png" width="675" height="490" alt="" layout="responsive" />
        </div>

        <div className={styles.content}>
          <h3>user preferences</h3>
          <h4>I&#39;m baby chambray raclette distillery semioticsa</h4>
          <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee..</p>
        </div>
      </div>

      <div className={styles.imageContentFlipped}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648763833/machine-learning_ad4u9z.png" width="675" height="490" alt="" layout="responsive" />
        </div>

        <div className={styles.content}>
          <h3>peace of mind</h3>
          <h4>I&#39;m baby chambray raclette distillery semioticsa</h4>
          <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee..</p>
        </div>
      </div>

      <div className={styles.imageContent}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648763833/machine-learning_ad4u9z.png" width="675" height="490" alt="" layout="responsive" />
        </div>

        <div className={styles.content}>
          <h3>platform features</h3>
          <h4>I&#39;m baby chambray raclette distillery semioticsa</h4>
          <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee..</p>
        </div>
      </div>

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='04' subtitle='Integration of machine learning through AI to encourage sustainability'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      <div className={styles.fullWidthImage}>
        <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
      </div>

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='05' subtitle='Connection to live resources based on user&#39;s proximity and preferences including death doulas and green funeral services'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      <div className={styles.fullWidthImage}>
        <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
      </div>

      {/* 
        ====================================================== 
        START CONTENT BLOCK
        ======================================================
      */}
      <ContentBlock title='reflections' subtitle='Death Doula platform push for greener burial practices while also encouraging people to plan for end-of-life sooner?'>
        <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>

        <div className={styles.actions}>
          <Link href="/work">
            view process
          </Link>
        </div>
      </ContentBlock>
      {/*
        ====================================================== 
        END CONTENT BLOCK
        ======================================================
      */}

      <div className={styles.fullWidthImage}>
        <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
      </div>
    </>
  )
}

export default EveContent;
