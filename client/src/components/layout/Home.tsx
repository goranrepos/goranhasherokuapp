import React, { Fragment } from 'react';

import DixonImg from 'assets/imgs/dixons.png';
import PageGroupImg from 'assets/imgs/page-group.png';
import IbStockImg from 'assets/svgs/ibstock-logo-plc.svg';
import InvestisImg from 'assets/svgs/investis_digital_logo.svg';
import PrivateOffice from 'assets/svgs/tpo_logo_white.svg';
import DHHS from 'assets/svgs/dhhs.svg';
import NOBImg from 'assets/svgs/nob.svg';
import GNImg from 'assets/svgs/gn-logo-color.svg';

interface IOwnProps {}

type IProps = IOwnProps;

const Home: React.FC<IProps> = () => (
  <Fragment>
    <section className='introduction'>
      <h1 className='introduction__title'>
        Hi, I'am Goran. <br />
        Web Developer and UI Designer
      </h1>

      <p className='introduction__text'>
        I like to code and design creative and innovative projects that make a
        difference.
      </p>
    </section>
    <section className='about'>
      <h2 className='about__title'>About</h2>
      <p className='about__text'>
        With more than 8 years experience in agency/industry environments, and
        experience in communicating and collaborating across many levels, I have
        the ability and expertise to create digital products and solve usability
        issues in interactive media, follow W3C guidelines and to follow the
        best practice principles of product development.
      </p>
    </section>
    <section className='skills'>
      <h2 className='skills__title'>Skills, Technology and Methodology</h2>
      <div className='skills__boxes'>
        <div className='skills__box-frontend'>
          <h3 className='skills__subtitle-frontend'>Front-End Development</h3>
          <p className='skills__text-frontend'>
            I like to develop small and large innovative projects using modern
            HTML, CSS, Javascript, SASS, LESS, Susy, Jquery, Json, PHP, Drupal
            7/8, React, Redux and various debug and plugin tools. I also have an
            experience of (RESTful) API integration and data integration such as
            Google Firebase and MySQL.
          </p>
        </div>
        <div className='skills__box-ux'>
          <h3 className='skills__subtitle-ux'>UI/UX and Design</h3>
          <p className='skills__text-ux'>
            I am passionate about UI/UX with a keen-eye for design; excellent
            knowledge of Adobe creative suite, especially Photoshop,
            Illustrator, Animate and using tools such as Figma or Zeplin. My aim
            is to create projects that are user-friendly and of high quality.
          </p>
        </div>
        <div className='skills__box-tools'>
          <h3 className='skills__subtitle-tools'>Methodology and Tools</h3>
          <p className='skills__text-tools'>
            I have working experience using project methodologies and tools such
            as Agile, Jira, Trello. A working knowledge of Linux command line
            tools (on Mac) and version control concepts using Git, GitHub,
            Acquia tools, Gulp, Grunt and Bitbucket. Strong knowledge of W3C
            standards, cross-browser compatibility, cross-platform testing and
            coding best practises.
          </p>
        </div>
        <div className='skills__box-other'>
          <h3 className='skills__subtitle-other'>Other Skills</h3>
          <p className='skills__text-other'>
            I have strong knowledge in Unity, C#, Google Firebase,
            multi-threading. Solid experience in implementing design patterns
            and design principles. Excellent communication skills and strong
            experience working in a complex environment with multiple
            stakeholders and priorities.
          </p>
        </div>
      </div>
    </section>
    <section className='work'>
      <h2 className='work__title'>Work Highlights</h2>
      <div className='work__boxes'>
        <div className='work__box'>
          <h3 className='work__project'>
            <span className='sr-only'>Goran Naumovski </span> Personal website
          </h3>
          <div className='work__display'>
            <img
              src={GNImg}
              alt='Goran Naumovski logo'
              role='img'
              className='work__img work__img-gn'
            />
          </div>
          <p className='work__desc'>
            Full stack development using React with hooks, Redux, Typescrypt,
            Axios, CSS, SASS, Node.js, MongoDb. Introducing advanced fluid
            typography and fluid responsive techniques.
          </p>
        </div>
        <div className='work__box'>
          <h3 className='work__project'>
            <span className='sr-only'>
              North Macedonia - National Opera and Balet{' '}
            </span>{' '}
            EMS website
          </h3>
          <div className='work__display'>
            <img
              src={NOBImg}
              alt='North Macedonia - National Opera & Ballet Logo'
              role='img'
              className='work__img work__img-dhhs'
            />
          </div>
          <p className='work__desc'>
            Full stack development using React, Redux, Redux Form, Revalidate,
            Google Firebase/Firestore, Semantic UI and various other JS
            libraries, Trello for project management.
          </p>
        </div>
        <div className='work__box'>
          <h3 className='work__project'>
            <span className='sr-only'>The Private Office </span>New Website
          </h3>
          <div className='work__display'>
            <img
              src={PrivateOffice}
              alt='The Private Office Logo'
              role='img'
              className='work__img work__img-tpo'
            />
          </div>
          <p className='work__desc'>
            Front-end development using SASS, CSS3, HTML5, Javascript, Jquery,
            Owl and Swiper plugins, Bootstrap theme, in-house Drupal framework,
            PHP, Git, Bitbucket, Drupal Training and Jira for project
            management.
          </p>
        </div>
        <div className='work__box'>
          <h3 className='work__project'>
            <span className='sr-only'>Investis </span>Web experience
          </h3>
          <div className='work__display'>
            <img
              src={InvestisImg}
              alt='Page Group Logo'
              role='img'
              className='work__img work__img-investis'
            />
          </div>
          <p className='work__desc'>
            Front-end development guidelines, UI/UX best practices, SASS/CSS
            project refactoring, Typography and Framework improvements and
            accessibility reports.
          </p>
        </div>
        <div className='work__box'>
          <h3 className='work__project'>
            <span className='sr-only'>Dixons Carphone </span>New Website
          </h3>
          <div className='work__display'>
            <img
              src={DixonImg}
              alt='Dixons Carphone Logo'
              role='img'
              className='work__img'
            />
          </div>
          <p className='work__desc'>
            Front-end development using SASS, CSS3, HTML5, Javascript, Jquery,
            Owl and Swiper plugins, Bootstrap theme, in-house Drupal framework,
            PHP, Git, Bitbucket, Drupal Training and Jira for project
            management.
          </p>
        </div>
        <div className='work__box'>
          <h3 className='work__project'>
            <span className='sr-only'>Page Group </span>New Website
          </h3>
          <div className='work__display'>
            <img
              src={PageGroupImg}
              alt='Page Group Logo'
              role='img'
              className='work__img'
            />
          </div>
          <p className='work__desc'>
            Front-end development using SASS, CSS3, HTML5, Javascript, Jquery,
            Owl and Swiper plugins, Bootstrap theme, in-house Drupal framework,
            PHP, Photoshop, Illustrator, Git, Bitbucket, and Jira.
          </p>
        </div>
        <div className='work__box'>
          <h3 className='work__project'>
            <span className='sr-only'>IBStock PLC </span>New Website
          </h3>
          <div className='work__display'>
            <img
              src={IbStockImg}
              alt='IbStock Logo'
              role='img'
              className='work__img'
            />
          </div>
          <p className='work__desc'>
            Front-end development using SASS, CSS3, HTML5, Javascript, Jquery,
            Owl and Swiper plugins, Bootstrap theme, in-house Drupal framework,
            PHP, Photoshop, Illustrator, Git, Bitbucket, and Jira.
          </p>
        </div>
        <div className='work__box'>
          <h3 className='work__project'>
            <span className='sr-only'>DHHS - Victoria </span> Websites
          </h3>
          <div className='work__display'>
            <img
              src={DHHS}
              alt='DHHS Logo'
              role='img'
              className='work__img work__img-dhhs'
            />
          </div>
          <p className='work__desc'>
            Intranet, Corporate, Campaign web sites, front-end dev and design
            using Drupal 7/8, MySql, Acquia, JS, HTML, CSS, React, SASS, Susy,
            REST, Github, Grunt, Gulp, Trello, Confluence, Jira, Adobe Products.
          </p>
        </div>
        <div className='work__box'>
          <h3 className='work__project'>
            <span className='sr-only'>DHHS - Victoria </span> CP Manual
          </h3>
          <div className='work__display'>
            <img
              src={DHHS}
              alt='DHHS Logo'
              role='img'
              className='work__img work__img-dhhs'
            />
          </div>
          <p className='work__desc'>
            Child protection manual, front-end dev and design using Drupal 8,
            MySql, Acquia, JS, HTML, CSS, SASS, Susy, REST, Github, Grunt, Gulp,
            Trello, Adobe Photoshop and Illustrator.
          </p>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Home;
