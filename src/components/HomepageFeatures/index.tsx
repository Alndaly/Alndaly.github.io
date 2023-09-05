import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'

type FeatureItem = {
  title: string;
  path: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '微校WeSmile小程序',
    path: 'https://docs.zuowu.cc',
    image: 'https://oss.kinda.info/image/202305191323045.jpg',
    description: (
      <>
        <div>
          高校学生的一站式社区
        </div>
        <div>
          当前聚焦于杭州师范大学
        </div>
      </>
    ),
  },
  {
    title: '微校WeSmile管理台',
    path: 'https://manage.kinda.info',
    image: 'https://oss.kinda.info/image/202309051652630.png',
    description: (
      <>
        <div>
          微校WeSmile小程序的管理台
        </div>
        <div>
          基于vue3和flask构建
        </div>
      </>
    ),
  },
  {
    title: '个人工具库',
    path: 'https://tools.kinda.info',
    image: 'https://oss.kinda.info/image/202309051655298.png',
    description: (
      <>
        <div>
          一些自制和收集起来的工具集
        </div>
        <div>
          基于vue3和fastapi构建
        </div>
      </>
    ),
  },
];

function Feature({ title, path, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureImageBox}>
        <img className={styles.featureImage} src={image}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={path}>{title}</Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.title}>项目列表</div>
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
