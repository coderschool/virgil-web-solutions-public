import { Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { PokeType } from '../components/PokeType';
import { getPokemonById } from '../features/pokemons/pokemonSlice';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const styles = {
	container: {
		backgroundColor: 'white',
		backgroundImage: "url('/images/container_bg.png')",
		pb: 5,
	},
};

export const DetailPage = () => {
	const { pokemon, nextPokemon, previousPokemon } = useSelector((state) => state.pokemons.pokemon);
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPokemonById(id));
	}, [id]);

	const weaknesses = calculateWeaknesses(pokemon?.types);
	return (
		<Container maxWidth="lg" disableGutters sx={styles.container}>
			<Box position="relative">
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<Box
							pt={2}
							pb={8}
							pl={3}
							className="navigation-button"
							display="flex"
							alignItems="center"
							sx={{ textDecoration: 'none' }}
							component={Link}
							to={`/${previousPokemon?.id || '1'}`}
						>
							<ArrowBackIosNewIcon sx={{ color: '#616161', backgroundColor: 'white', borderRadius: '50%', padding: '5px', mr: 2 }} />
							<Typography variant="span" color="white" fontSize={24} fontWeight={700} marginRight={1}>
								#{('000' + (previousPokemon?.id || '000')).slice(-3)}
							</Typography>
							<Typography display={{ xs: 'none', sm: 'block' }} color="#616161" fontSize={24} fontWeight={700}>
								{previousPokemon?.name ? previousPokemon.name[0].toUpperCase() + previousPokemon.name.slice(1) : 'Unknown'}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={6}>
						<Box
							pt={2}
							pb={8}
							pr={3}
							className="navigation-button"
							display="flex"
							alignItems="center"
							justifyContent="flex-end"
							sx={{ textDecoration: 'none' }}
							component={Link}
							to={`/${nextPokemon?.id || '1'}`}
						>
							<Typography display={{ xs: 'none', sm: 'block' }} color="#616161" fontSize={24} fontWeight={700} marginRight={1}>
								{nextPokemon?.name ? nextPokemon.name[0].toUpperCase() + nextPokemon.name.slice(1) : 'Unknown'}
							</Typography>
							<Typography color="white" fontSize={24} fontWeight={700}>
								#{('000' + (nextPokemon?.id || '000')).slice(-3)}
							</Typography>
							<ArrowForwardIosIcon sx={{ color: '#616161', backgroundColor: 'white', borderRadius: '50%', padding: '5px', ml: 2 }} />
						</Box>
					</Grid>
				</Grid>

				<Box position="absolute" bottom={0} left="50%" sx={{ transform: 'translateX(-50%)' }} textAlign="center" minWidth={'50%'} className="detail-name">
					<Box bgcolor="white" pt={2}>
						<Typography sx={{ mr: 2 }} variant="h4" display="inline">
							{pokemon?.name ? pokemon.name[0].toUpperCase() + pokemon.name.slice(1) : 'Unknown'}
						</Typography>
						<Typography variant="h4" display="inline" color="gray">
							#{('000' + (pokemon?.id || '000')).slice(-3)}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box container maxWidth="md" sx={{ margin: 'auto!important', paddingX: '2rem', paddingY: '1rem', backgroundColor: 'white', pt: 6 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Box sx={{ backgroundColor: '#F2F2F2', borderRadius: 5, padding: 3 }}>
							<CardMedia component="img" image={`${pokemon?.url}`} alt="Missing image" sx={{ margin: 'auto', objectFit: 'contain', width: '100%', borderRadius: 5 }} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack spacing={2}>
							<Typography variant="p">{pokemon?.description || 'There is no info for this Pokemon. Consider expanding the Pokedex by adding more content.'}</Typography>
							<Box sx={{ backgroundColor: '#30a7d7', borderRadius: '10px', padding: 3 }}>
								<Grid container rowSpacing={1}>
									<Grid item xs={6}>
										<Typography color="white">Height</Typography>
										<div>{pokemon?.height || 'Unknown'}</div>
									</Grid>
									<Grid item xs={6}>
										<Typography color="white">Weight</Typography>
										<div>{pokemon?.weight || 'Unknown'}</div>
									</Grid>
									<Grid item xs={6}>
										<Typography color="white">Height</Typography>
										<div>{pokemon?.category || 'Unknown'}</div>
									</Grid>
									<Grid item xs={6}>
										<Typography color="white">Abilities</Typography>
										<div>{pokemon?.abilities || 'Unknown'}</div>
									</Grid>
								</Grid>
							</Box>
							<Typography variant="p">Type</Typography>
							<Grid container spacing={1}>
								{pokemon?.types.map((type) => (
									<Grid item key={type} xs={4}>
										<PokeType type={type} size="large" color="white" />
									</Grid>
								))}
							</Grid>
							<Typography variant="p">Weaknesses</Typography>
							<Grid container spacing={1}>
								{weaknesses.map((type) => (
									<Grid item key={type} xs={4}>
										<PokeType type={type} size="large" color="white" />
									</Grid>
								))}
							</Grid>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

const weaknesses = {
	normal: {
		nullified: ['ghost'],
		resistant: [],
		weak: ['fighting'],
	},
	fire: {
		nullified: [],
		resistant: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'],
		weak: ['water', 'ground', 'rock'],
	},
	water: { nullified: [], resistant: ['fire', 'water', 'ice', 'steel'], weak: ['electric', 'grass'] },
	electric: { nullified: [], resistant: ['electric', 'flying', 'steel'], weak: ['ground'] },
	grass: { nullified: [], resistant: ['water', 'electric', 'grass', 'ground'], weak: ['fire', 'ice', 'poison', 'flying', 'bug'] },
	ice: { nullified: [], resistant: ['ice'], weak: ['fire', 'fighting', 'rock', 'steel'] },
	fighting: { nullified: [], resistant: ['bug', 'rock', 'dark'], weak: ['flying', 'psychic', 'fairy'] },
	poison: { nullified: [], resistant: ['grass', 'fighting', 'poison', 'bug', 'fairy'], weak: ['ground', 'psychic'] },
	ground: { nullified: ['electric'], resistant: ['poison', 'rock'], weak: ['water', 'grass', 'ice'] },
	flying: { nullified: ['ground'], resistant: ['grass', 'fighting', 'bug'], weak: ['electric', 'ice', 'rock'] },
	psychic: { nullified: [], resistant: ['fighting', 'psychic'], weak: ['bug', 'ghost', 'dark'] },
	bug: { nullified: [], resistant: ['grass', 'fighting', 'ground'], weak: ['fire', 'flying', 'rock'] },
	rock: { nullified: [], resistant: ['normal', 'fire', 'poison', 'flying'], weak: ['water', 'grass', 'fighting', 'ground', 'steel'] },
	ghost: { nullified: ['normal', 'fighting'], resistant: ['poison', 'bug'], weak: ['ghost', 'dark'] },
	dragon: { nullified: [], resistant: ['fire', 'water', 'electric', 'grass'], weak: ['ice', 'dragon', 'fairy'] },
	dark: {
		nullified: ['psychic'],
		resistant: ['ghost', 'dark'],
		weak: ['fighting', 'bug', 'fairy'],
	},
	steel: { nullified: ['poison'], resistant: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'], weak: ['fire', 'fighting', 'ground'] },
	fairy: { nullified: ['dragon'], resistant: ['fighting', 'bug', 'dark'], weak: ['poison', 'steel'] },
};

const calculateWeaknesses = (types) => {
	if (!types) return [];
	let total = {
		normal: 0,
		fire: 0,
		water: 0,
		electric: 0,
		grass: 0,
		ice: 0,
		fighting: 0,
		poison: 0,
		ground: 0,
		flying: 0,
		psychic: 0,
		bug: 0,
		rock: 0,
		ghost: 0,
		dragon: 0,
		dark: 0,
		steel: 0,
		fairy: 0,
	};

	types.forEach((type) => {
		weaknesses[type].weak.forEach((t) => total[t]++);
		weaknesses[type].resistant.forEach((t) => total[t]--);
		weaknesses[type].nullified.forEach((t) => total[t]--);
	});
	let final = [];
	Object.keys(total).forEach((type) => {
		if (total[type] > 0) final.push(type);
	});
	return final;
};
