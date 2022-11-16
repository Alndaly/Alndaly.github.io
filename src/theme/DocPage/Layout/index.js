import React, { useState, useCallback } from 'react';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import styles from './styles.module.css';
export default function DocPageLayout({ children }) {
	const sidebar = useDocsSidebar();
	const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);

	const particlesInit = useCallback(async (engine) => {
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {

	}, []);

	return (
		<>
			{/* <Particles
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				url='https://github.com/matteobruni/tsparticles/blob/main/websites/particles.js.org/presets/star.json'
			/> */}
			<Layout wrapperClassName={styles.docsWrapper}>
				<BackToTopButton />
				<div className={styles.docPage}>
					{sidebar && (
						<DocPageLayoutSidebar
							sidebar={sidebar.items}
							hiddenSidebarContainer={hiddenSidebarContainer}
							setHiddenSidebarContainer={setHiddenSidebarContainer}
						/>
					)}
					<DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
						{children}
					</DocPageLayoutMain>
				</div>
			</Layout>
		</>
	);
}
