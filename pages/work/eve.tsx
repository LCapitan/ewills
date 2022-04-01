import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Header, Menu } from '../../src/components/index';
import { WorkContent } from '../../src/containers/index';

import styles from '../../styles/Work.module.scss';

const Eve: NextPage = () => {
  return (
    <>
      {/* <Header/> */}
      <main className={styles.container}>
        <div className={styles.hero}>
        <div className={styles.videoContainer}>
          <iframe src="https://www.youtube.com/embed/9elmKkEusIg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        

          {/* <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648708811/eve-banner_lx5jjs.jpg" width="1200" height="662" alt="" layout="responsive" /> */}
        </div>

        <div className={styles.heading}>
          <div className={styles.headingContent}>
            <h1>eve</h1>
            <div className={styles.content}>
              <p>Eve is digital platform that makes the journey for death more approachable and sustainable. kwefnk eflwnfeklwnfe klw nfek  lwnfe kl nfwlke nfwl knfel kwnfelk wnf ewkl fne wlfnwe.</p>
            </div>
            <div className={styles.tags}>
              <span>sustainability</span>
              <span>human-centered design</span>
              <span>service design</span>
              <span>accessibility</span>
              <span>machine learning</span>
            </div>
          </div>

          <div className={styles.rightRail}>
            <div className={styles.rightRailItem}>
              <span>For</span>
              Independent Study 2021
            </div>
            <div className={styles.rightRailItem}>
              <span>Timeline</span>
              16 Weeks
            </div>
            <div className={styles.rightRailItem}>
              <span>Tools</span>
              Figma, Illustrator, Photoshop, After Effects
            </div>
            <div className={styles.rightRailItem}>
              <span>Role</span>
              User Research, Strategy, Branding, UX/UI, Product Design
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.contentBlock}>
          <h2>background</h2>
          <div className={styles.content}>
            <p>Death is taboo, covid has blah blah blah I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl.</p>
            <p>Fam truffaut iPhone gastropub, butcher af kinfolk 90&#39;s next level gochujang vape glossier selfies quinoa. Cold-pressed narwhal helvetica, bushwick swag brooklyn bespoke chicharrones DIY selvage. Pork belly you probably haven&#39;t heard of them williamsburg, kale chips</p>
          </div>
        </div>

        <div className={styles.fullWidthImage}>
          <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
        </div>

        <div className={styles.contentBlock}>
          <h2>problem</h2>
          <div className={styles.content}>
            <h3>Traditional burials are taking up usable land as well as significantly impacting our environment</h3>
            <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h2>insight</h2>
          <div className={styles.content}>
            <h3>Over 92% of people arent planning for their deaths, leaving it to fall on loved ones</h3>
            <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h2>opportunity</h2>
          <div className={styles.content}>
            <h3>How do we push for greener burial practices while also encouraging people to plan for end-of-life sooner?</h3>
            <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
          </div>
        </div>

        <div className={styles.fullWidthImage}>
          <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
        </div>

        <div className={styles.contentBlock}>
          <h2>01</h2>
          <div className={styles.content}>
            <h3>name &amp; branding</h3>
            <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
          </div>
        </div>

        <div className={styles.twoColImage}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648762282/logo_shhgxs.jpg" width="575" height="600" alt="" layout="responsive" />

          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648763076/color-palette_qi24sv.jpg" width="575" height="600" alt="" layout="responsive" />
        </div>

        <div className={styles.contentBlock}>
          <h2>02</h2>
          <div className={styles.content}>
            <h3>A partnership that encourages end-of-life planning sooner rather than later</h3>
            <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
          </div>
        </div>

        <div className={styles.fullWidthImage}>
          <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
        </div>

        <div className={styles.contentBlock}>
          <h2>03</h2>
          <div className={styles.content}>
            <h3>A human-centered platform designed for education, connection, and peace of mind with a focus on sustainability</h3>
            <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu. Readymade schlitz banh mi tumblr enamel pin, deep v vinyl farm-to-table venmo cred hell of.</p>
          </div>
        </div>

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

        <div className={styles.contentBlock}>
          <h2>04</h2>
          <div className={styles.content}>
            <h3>Integration of machine learning through AI to encourage sustainability</h3>
            <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu.</p>
          </div>
        </div>

        <div className={styles.fullWidthImage}>
          <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
        </div>

        <div className={styles.contentBlock}>
          <h2>05</h2>
          <div className={styles.content}>
            <h3>Connection to live resources based on user&#39;s proximity and preferences including death doulas and green funeral services</h3>
            <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu.</p>
          </div>
        </div>

        <div className={styles.fullWidthImage}>
          <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
        </div>

        <div className={styles.contentBlock}>
          <h2>reflections</h2>
          <div className={styles.content}>
            <h3>Death Doula platform push for greener burial practices while also encouraging people to plan for end-of-life sooner?</h3>
            <p>I&#39;m baby chambray raclette distillery semiotics, taiyaki portland gluten-free art party. Plaid salvia hoodie, keytar asymmetrical 3 wolf moon DIY actually bespoke fashion axe irony austin twee. Artisan narwhal jean shorts fingerstache prism, snackwave taiyaki pug squid tofu.</p>

            <div className={styles.actions}>
              <Link href="/work">
                view process
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.fullWidthImage}>
          <Image src="https://via.placeholder.com/1200x600" width="1200" height="600" alt="" layout="responsive" />
        </div>
      </main>
    </>
  )
}

export default Eve;
