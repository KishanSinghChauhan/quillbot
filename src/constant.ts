const MovieList = [
	{
		Title: 'Avatar',
		Year: '2009',
		Runtime: '162 min',
		Director: 'James Cameron',
		Plot: `A paraplegic marine dispatched to the moon Pandora on a unique mission
  becomes torn between following his orders and protecting the world he feels is his
  home.`,
		Language: 'English, Spanish',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
		imdbRating: '7.9',
	},
	{
		Title: 'I Am Legend',
		Year: '2007',
		Runtime: '101 min',
		Director: 'Francis Lawrence',
		Plot:
			'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
		Language: 'English',
		Poster:
			'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d0688a1d44131c7239999cad2ceeec122383367b38450c4f0d005127442d7d94._RI_V_TTW_.jpg',
		imdbRating: '7.2',
	},
	{
		Title: '300',
		Year: '2006',
		Runtime: '117 min',
		Director: 'Zack Snyder',
		Plot:
			'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
		Language: 'English',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg',
		imdbRating: '7.7',
	},
	{
		Title: 'The Avengers',
		Year: '2012',
		Runtime: '143 min',
		Director: 'Joss Whedon',

		Plot: `Earth's mightiest heroes must come together and learn to fight as a
  team if they are to stop the mischievous Loki and his alien army from enslaving
  humanity.`,
		Language: 'English, Russian',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg',
		imdbRating: '8.1',
	},
	{
		Title: 'The Wolf of Wall Street',
		Year: '2013',
		Runtime: '180 min',
		Director: 'Martin Scorsese',
		Plot: `Based on the true story of Jordan Belfort, from his rise to a wealthy
  stock-broker living the high life to his fall involving crime, corruption and the
  federal government.`,

		Language: 'English, French',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
		imdbRating: '8.2',
	},
	{
		Title: 'Interstellar',
		Year: '2014',
		Runtime: '169 min',
		Director: 'Christopher Nolan',
		Plot: `A team of explorers travel through a wormhole in space in an attempt
  to ensure humanity's survival.`,
		Language: 'English',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
		imdbRating: '8.6',
	},
	{
		Title: 'Game of Thrones',
		Year: '2011',
		Runtime: '56 min',
		Director: 'N/A',
		Plot: `While a civil war brews between several noble families in Westeros,
  the children of the former rulers of the land attempt to rise up to power.
  Meanwhile a forgotten race, bent on destruction, plans to return after thousands of
  years in the North.`,
		Language: 'English',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg',

		imdbRating: '9.5',
		totalSeasons: '7',
	},
	{
		Title: 'Vikings',
		Year: '2013',
		Runtime: '44 min',
		Director: 'N/A',
		Plot: `The world of the Vikings is brought to life through the journey of
  Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of
  history - a man on the edge of myth.`,
		Language: 'English, Old English, Norse, Old, Latin',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg',
		imdbRating: '8.6',

		totalSeasons: '5',
	},
	{
		Title: 'Gotham',
		Year: '2014',
		Runtime: '42 min',
		Director: 'N/A',
		Plot: `The story behind Detective James Gordon's rise to prominence in Gotham
  City in the years before Batman's arrival.`,
		Language: 'English',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg',
		imdbRating: '8.0',

		totalSeasons: '3',
	},
	{
		Title: 'Power',
		Year: '2014',
		Runtime: '50 min',
		Director: 'N/A',
		Plot:
			'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
		Language: 'English',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg',
		imdbRating: '8.0',
		totalSeasons: '3',
	},
	{
		Title: 'Narcos',
		Year: '2015',
		Runtime: '49 min',
		Director: 'N/A',
		Plot: `A chronicled look at the criminal exploits of Colombian drug lord
  Pablo Escobar.`,
		Language: 'English, Spanish',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg',
		imdbRating: '8.9',
		totalSeasons: '2',
	},
	{
		Title: 'Breaking Bad',
		Year: '2008-2013',
		Runtime: '49 min',
		Director: 'N/A',
		Plot: `A high school chemistry teacher diagnosed with inoperable lung cancer
  turns to manufacturing and selling methamphetamine in order to secure his family's
  financial future.`,
		Language: 'English, Spanish',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg',
		imdbRating: '9.5',
		totalSeasons: '5',
	},
	{
		ComingSoon: true,
		Title: 'Doctor Strange',
		Year: '2016',
		Runtime: 'N/A',
		Director: 'Scott Derrickson',
		Plot: `After his career is destroyed, a brilliant but arrogant and conceited
  surgeon gets a new lease on life when a sorcerer takes him under her wing and
  trains him to defend the world against evil.`,
		Language: 'English',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
		imdbRating: 'N/A',
	},
	{
		ComingSoon: true,
		Title: 'Rogue One: A Star Wars Story',
		Year: '2016',
		Runtime: 'N/A',
		Director: 'Gareth Edwards',
		Plot:
			'The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.',
		Language: 'English',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
		imdbRating: 'N/A',
	},
	{
		ComingSoon: true,
		Title: "Assassin's Creed",
		Year: '2016',
		Runtime: 'N/A',
		Director: 'Justin Kurzel',
		Plot: `When Callum Lynch explores the memories of his ancestor Aguilar and
  gains the skills of a Master Assassin, he discovers he is a descendant of the
  secret Assassins society.`,
		Language: 'English',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg',
		imdbRating: 'N/A',
	},
	{
		ComingSoon: true,
		Title: 'Luke Cage',
		Year: '2016',
		Runtime: '55 min',
		Director: 'N/A',
		Plot:
			'Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.',
		Language: 'English',
		Poster:
			'https://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg',
		imdbRating: 'N/A',
		totalSeasons: '1',
	},
];

export default MovieList;
