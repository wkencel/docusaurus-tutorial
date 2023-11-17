import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'NLP & LLMs',
    Svg: require('@site/static/img/Icons-Operations-10.svg').default,
    description: (
      <>
        Sentiment analysis, chatbots, automated help, and text classification
      </>
    ),
  },
  {
    title: 'Multimodal',
    Svg: require('@site/static/img/icon-standardize-cluster.svg').default,
    description: (
      <>
        Fraud detection, predictive analysis, and 360-degree customer sentiment analysis
      </>
    ),
  },
  {
    title: 'Image Analysis',
    Svg: require('@site/static/img/Visibility-Monitoring-Service-Icon-2.svg').default,
    description: (
      <>
        Object detection & classification, OCR, Healthcare imaging, and defect identification
      </>
    ),
  },
  {
    title: 'Audio Analysis',
    Svg: require('@site/static/img/announcement-speaker.svg').default,
    description: (
      <>
        Speech recognition, audio signature detection, and voice generation
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
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
