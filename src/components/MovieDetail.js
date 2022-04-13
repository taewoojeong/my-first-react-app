import PropTypes from 'prop-types';
import styles from './Movie.module.css';

function MovieDetail({ id, coverImg, title, genres, description }) {
	return (
		<div className={styles.movie}>
			<img src={coverImg} alt={title} className={styles.movie_img}></img>
			<div>
				<h2 className={styles.movie_title}>{title}</h2>
				<ul className={styles.movie_genres}>
					{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
				</ul>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default MovieDetail;
