import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Your Comprehensive QA Hub',
    Svg: require('@site/static/img/network.svg').default,
    description: (
      <>
        My goal is to create a central place where all aspects of QA (Quality Assurance) will be easily accessible. This site serves as a comprehensive resource for everything you need to know about software testing, from basic concepts to advanced techniques and tools, providing you with the information and tools you need in one place.
      </>
    ),
  },
  {
    title: 'Learning, Discovering, and Connecting',
    Svg: require('@site/static/img/learning.svg').default,
    description: (
      <>
        By visiting this site, users can expect not only to learn and find out the latest methods and practices in the QA world, but also to get to know me better through my articles, tutorials and personal stories. I strive for the site to be a space where you can grow as a professional, sharing knowledge and experience with a community that strives to improve the quality of software.
      </>
    ),
  },
  {
    title: 'Technology That Brings the Site to Life',
    Svg: require('@site/static/img/react.svg').default,
    description: (
      <>
        This site was developed using the latest web development technologies, with React as the foundation. This allows me to provide a dynamic, interactive and user-friendly experience, with the flexibility to constantly expand and improve functionality. 
revoke access.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
