import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PokeType } from './PokeType';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, typeQuery } from '../features/pokemons/pokemonSlice';
import { Link } from 'react-router-dom';
import { pokemonTypes } from '../pokemonTypes';
const styles = {
	container: {
		padding: '0!important',
		marginBottom: '2rem',
	},
	search: {
		position: 'relative',
		backgroundColor: 'gray',
		paddingY: '2rem',
	},
	pokeBox: {
		backgroundColor: 'white',
		backgroundImage: "url('/images/container_bg.png')",
		paddingBottom: '1rem',
	},
	textSearch: {
		position: 'absolute',
		zIndex: 10,
		color: 'white',
		left: '50%',
		transform: 'translateX(-50%)',
		bottom: '-1rem',
		backgroundColor: 'gray',
		width: '40%',
		textAlign: 'center',
		paddingBottom: '0.5rem',
		fontSize: 20,
		'&:after': {
			content: '""',
			position: 'absolute',
			bottom: '-1px',
			right: 0,
			width: 0,
			borderTop: '17px solid transparent',
			borderRight: '60px solid white',
		},
		'&:before': {
			content: '""',
			position: 'absolute',
			bottom: '-1px',
			left: 0,
			width: 0,
			borderTop: '17px solid transparent',
			borderLeft: '60px solid white',
		},
	},
	pokeContainer: {
		margin: 'auto!important',
		paddingTop: '2rem',
		backgroundColor: 'white',
		position: 'relative',
		backgroundColor: 'white',
	},
	foot: {
		position: 'absolute',
		content: "''",
		width: 'calc(100% - 1rem)',
		margin: 'auto',
		height: '2.5rem',
		backgroundColor: 'white',
		left: 0,
		bottom: '-2.5rem',
		right: 0,
		'&:after': {
			position: 'absolute',
			content: "''",
			width: 0,
			borderBottom: '0.5rem solid transparent',
			borderRight: '0.5rem solid white',
			bottom: 0,
			top: 0,
			left: '-0.5rem',
			border: 'none',
		},
		'&:before': {
			position: 'absolute',
			content: "''",
			borderBottom: '0.5rem solid transparent',
			borderLeft: '0.5rem solid white',
			top: 0,
			bottom: 0,
			right: '-0.5rem',
			border: 'none',
		},
	},
	loadmore: {
		height: '2rem',
		backgroundColor: 'blue',
		margin: '1rem auto',
		backgroundColor: '#30a7d7',
		color: '#fff',
		':hover': {
			backgroundColor: '#1b82b1',
		},
	},
};

export default function PokeList() {
	const [expanded, setExpanded] = useState(false);
	const [next, setNext] = useState(false);
	const dispatch = useDispatch();
	const { pokemons } = useSelector((state) => state.pokemons);
	const handleChangePage = () => {
		dispatch(changePage());
	};

	return (
		<Container maxWidth="lg" sx={styles.container}>
			<Box className={`filters ${expanded ? 'filters-expanded' : 'filters-collapsed'}`} sx={{ ...styles.search, display: 'flex', justifyContent: 'center' }}>
				<Grid maxWidth="md" className="filter-types" container spacing={2} sx={{ pb: 5 }}>
					{pokemonTypes.map((item) => (
						<Grid item key={item} xs={6} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
							<PokeType
								onClick={() => {
									dispatch(changePage(1));
									dispatch(typeQuery(item));
								}}
								type={item}
								size="large"
								border
								sx={{ cursor: 'pointer' }}
							/>
						</Grid>
					))}
				</Grid>
				<Box sx={styles.textSearch} onClick={() => setExpanded(!expanded)}>
					Show Advanced Search
				</Box>
			</Box>
			<Box sx={styles.pokeBox}>
				{pokemons.length && (
					<InfiniteScroll
						style={{ paddingBottom: '1rem', overflow: 'visible!important' }}
						dataLength={pokemons.length}
						next={handleChangePage}
						hasMore={next}
						loader={
							<Container maxWidth="md" sx={{ backgroundColor: 'white', textAlign: 'center', height: '2.5rem' }}>
								{' '}
								<img className="loading" src="./images/pokeball_gray.png" />
							</Container>
						}
					>
						<Grid container maxWidth="md" sx={styles.pokeContainer} spacing={{ xs: 0, md: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
							{pokemons.map((pokemon) => (
								<Grid sx={{ display: 'flex', justifyContent: 'center', paddingLeft: '0!important' }} item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
									<Card component={Link} to={`${pokemon.id}`} sx={{ width: '12rem', height: '19rem', textDecoration: 'none' }} elevation={0}>
										<div style={{ backgroundColor: '#F2F2F2', borderRadius: 5, padding: 30 }}>
											<CardMedia component="img" image={`${pokemon.url}`} alt="Missing image" sx={{ margin: 'auto', objectFit: 'contain', width: '100%', borderRadius: 5 }} />
										</div>
										<CardContent sx={{ paddingBottom: 0 }}>
											<Typography variant="small" color="gray">
												#{`00${pokemon.id}`.slice(-3)}
											</Typography>
											<Typography variant="h5">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</Typography>
										</CardContent>
										<CardActions disableSpacing sx={{ padding: '1rem' }}>
											<Stack direction="row" spacing={1}>
												{pokemon.types.map((type) => (
													<PokeType type={type} key={type} />
												))}
											</Stack>
										</CardActions>
									</Card>
								</Grid>
							))}
							<Grid sx={{ textAlign: 'center' }} item xs={12} sm={12} md={12}>
								<Box sx={{ ...styles.foot, bottom: next ? '-5rem' : '-2.5rem' }}></Box>
								<Button sx={{ ...styles.loadmore, display: next ? 'none' : 'inline-block' }} onClick={() => setNext(true)}>
									Load more Pokémon
								</Button>
							</Grid>
						</Grid>
					</InfiniteScroll>
				)}
			</Box>
		</Container>
	);
}
