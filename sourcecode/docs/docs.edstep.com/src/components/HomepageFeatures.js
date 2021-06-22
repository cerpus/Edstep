import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/learning.svg').default,
    description: (
      <>
        Learn new things or teach others by taking or creating fun and exciting, interactive web courses while easily collaborating and sharing resources with others in real time.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/studying.svg').default,
    description: (
      <>
        Edstep allows you to focus on building highly interactive and engaging online courses.
      </>
    ),
  },
  {
    title: 'Powered by Edlib and H5P',
    Svg: require('../../static/img/powerful.svg').default,
    description: (
      <>
        Edstep...
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
