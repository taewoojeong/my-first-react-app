import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Home.module.css';
import MovieDetail from '../components/MovieDetail';

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		console.log(json);
		setMovie(json.data.movie);
		setLoading(false);
	};
	console.log(id);
	useEffect(() => {
		getMovie();
	}, []);

	return (
		<div className={styles.container}>
			{loading ? (
				<div className={styles.loader}>
					<h1>Loading...</h1>
				</div>
			) : (
				<div className={styles.movies}>
					<MovieDetail
						id={movie.id}
						coverImg={movie.medium_cover_image}
						title={movie.title}
						genres={movie.genres}
						description={movie.description_full}
					/>
				</div>
			)}
		</div>
	);
}

export default Detail;
