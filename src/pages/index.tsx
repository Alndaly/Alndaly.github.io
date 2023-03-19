import React, { useState, useEffect } from 'react';
import { getYiYan } from '../services/home'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { to } from '../common'
import clsx from 'clsx';
import Typed from 'typed.js';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const onGetYiYan = async () => {
    const options = {
      strings: ["不要把自己限制在某个范围，这世界的人已经很爱打分数了，为什么连你都要替自己打分数？"],
      typeSpeed: 50,
      cursorChar: '_'
    };
    var typed = new Typed('.hero__subtitle', options);
  }
  useEffect(() => {
    onGetYiYan()
  }, [])
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <span className="hero__subtitle" />
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            进入文档
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const [tagline, setTagLine] = useState('')
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </div>
  );
}
