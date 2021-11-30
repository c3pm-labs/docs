import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'C++ made easy',
    imageUrl: 'img/undraw_c3pm_code.svg',
    description: (
      <>
		With c3pm, start your cross-platform project with 0 configuration.
		It has never been so simple!
      </>
    ),
  },
  {
    title: 'Trivial dependency management',
    imageUrl: 'img/undraw_c3pm_management.svg',
    description: (
      <>
        c3pm will manage the dependencies for you! No more hours spent installing a simple library:
        one command and you’re good to go!
      </>
    ),
  },
  {
    title: 'Package sharing',
    imageUrl: 'img/undraw_c3pm_package.svg',
    description: (
      <>
        And finally, c3pm is, before all, a package manager.
        You can share a reusable piece of code with the entire community!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <>
    <Layout
      title={`${siteConfig.title} - Documentation`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/about')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js" />
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </>
  );
}

export default Home;
