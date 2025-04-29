import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import clsx from "clsx";

export default function GitHubButton({repo}) {
	const [stars, setStars] = useState(null);

	useEffect(() => {
		const fetchStars = async () => {
			try {
				const res = await fetch(`https://api.github.com/repos/${repo}`);
				const {stargazers_count} = await res.json();

				if (typeof stargazers_count === 'number') {
					setStars(stargazers_count);
				}
			} catch (err) {
				console.error('Error fetching GitHub stars:', err);
			}
		};

		void fetchStars();
	}, [repo]);

	return (
		<a
			href={`https://github.com/${repo}`}
			className={clsx('btn', 'btn-tertiary', styles.btn)}
			target="_blank"
			rel="noopener noreferrer"
		>
			<span className={styles.btn__icon}>
				<FontAwesomeIcon icon={faGithub}/>
			</span>
			{stars !== null && (
				<>
					<span className={styles.btn__divider}></span>
					<span className={styles.btn__right}>
						{stars} Stars
					</span>
				</>
			)}
		</a>
	);
}
