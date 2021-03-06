import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: '/img/nerd.svg',
    description: (
      <>
        Chazos was designed from the ground up to be easily installed and
        used to get your backend up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: '/img/bro.svg',
    description: (
      <>
        Chazos lets you focus on whats important, and it does all the chores. 
      </>
    ),
  },
  {
    title: 'Powered by Laravel',
    image: '/img/laravel.svg',
    description: (
      <>
        People say PHP is dead, but jokes on you 🤣. Chazos is powered by Laravel,
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
