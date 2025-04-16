import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';

export default function GitHubStarButton({repo}) {
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
			target="_blank"
			rel="noopener noreferrer"
			className={styles.starButton}
		>
			<div className={styles.starButton__left}>
				<FontAwesomeIcon icon={faGithub} className={styles.starButton__icon}/>
				<span>Star</span>
			</div>
			{stars !== null && (
				<span className={styles.starButton__count}>{stars}</span>
			)}
		</a>
	);
}
