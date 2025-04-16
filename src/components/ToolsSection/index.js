import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import {faCode, faLaptopCode, faScrewdriverWrench, faHouse} from '@fortawesome/free-solid-svg-icons'
import ToolCard from "./ToolCard";

export default function ToolsSection() {
	return (
		<section className={styles.toolsSection} id='tools-section'>
			<div className={clsx('container', 'section-wrapper')}>

				<h2 className={clsx('hero-title', 'section-title', styles.toolsSection__title)}>Powerful <span
					className={'text-highlight'}>Tools</span> To Drive Your IoT Development</h2>

				<p className={clsx('section-subheader', styles.toolsSection__subheader)}>Thingweb has the components you
					need to interact with your devices, tools to design Thing Descriptions and services to manage your
					devices. Pick what you need, use as you see fit. </p>

				<div className={styles.toolsSection__tools}>

					{/* node-wot */}
					<ToolCard
						icon={faCode}
						title="node wot"
						description="A fast and extensible framework to connect any device with your browser and backend applications."
						docLink="/docs/category/node-wot"
						githubRepo="eclipse-thingweb/node-wot"
						gridAreaClass={styles.nodeWot}
					/>

					{/* td-code */}
					<ToolCard
						icon={faCode}
						title="td code"
						description="VS Code extension for validating and designing W3C Thing Descriptions and Thing Models."
						docLink="https://marketplace.visualstudio.com/items?itemName=arces-wot.td-code"
						githubRepo="eclipse-thingweb/td-code"
						gridAreaClass={styles.tdCode}
					/>

					{/* dart-wot */}
					<ToolCard
						icon={faCode}
						title="dart wot"
						description="Framework to build Web of Things applications in Dart and Flutter."
						githubRepo="eclipse-thingweb/dart_wot"
						gridAreaClass={styles.dartWot}
					/>

					{/* wam */}
					<ToolCard
						icon={faLaptopCode}
						title="wam"
						description="WoT Application Manager - a CLI to quickly build a Web of Things application."
						githubRepo="eclipse-thingweb/wam"
						gridAreaClass={styles.wam}
					/>

					{/* playground */}
					<ToolCard
						icon={faLaptopCode}
						title="td playground"
						description="Browser application for validating and designing W3C Thing Descriptions and Thing Models."
						docLink="https://playground.thingweb.io"
						githubRepo="eclipse-thingweb/playground"
						gridAreaClass={styles.playground}
					/>

					{/* domus-tdd */}
					<ToolCard
						icon={faHouse}
						title="domus tdd"
						description="Semantic storage for device metadata based on W3C Thing Description information model."
						githubRepo="eclipse-thingweb/domus-tdd-api"
						gridAreaClass={styles.domusTdd}
					/>

					{/* td-tools */}
					<ToolCard
						icon={faScrewdriverWrench}
						title="td tools"
						description="Utility libraries for W3C Thing Descriptions and Thing Models."
						githubRepo="eclipse-thingweb/td-tools"
						gridAreaClass={styles.tdTools}
					/>

				</div>
			</div>
		</section>
	);
}
