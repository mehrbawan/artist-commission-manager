const artCards = [
	{
		id: 1,
		title: "Anime-style YCH Illustration",
		artist: "Kawaii Studios",
		rating: 5.0,
		reviews: 40,
		imageColor: "#8fbfff",
	},
	{
		id: 2,
		title: "Anime-style YCH Illustration",
		artist: "Kawaii Studios",
		rating: 5.0,
		reviews: 40,
		imageColor: "#8fbfff",
	},
	{
		id: 3,
		title: "Anime-style YCH Illustration",
		artist: "Kawaii Studios",
		rating: 5.0,
		reviews: 40,
		imageColor: "#8fbfff",
	},
];

interface ArtCardProps {
	title: string;
	artist: string;
	rating: number;
	reviews: number;
	imageColor: string;
}

function ArtCard({
	title,
	artist,
	rating,
	reviews,
	imageColor,
}: ArtCardProps) {
	return (
		<div className="flex flex-col gap-2.5 px-6 py-5 w-full max-w-[533px]">
			{/* Art Preview */}
			<div
				className="h-[228px] rounded-[30px] w-full"
				style={{ backgroundColor: imageColor }}
			/>

			{/* Title */}
			<h3 className="text-[32px] font-extrabold text-black leading-tight">
				{title}
			</h3>

			{/* Artist Info & Rating */}
			<div className="flex items-center justify-between w-full">
				{/* Artist */}
				<div className="flex gap-2.5 items-center">
					<div className="w-[27px] h-[27px] rounded-full bg-gray-300" />
					<span className="text-[26px] font-normal text-black">
						{artist}
					</span>
				</div>

				{/* Rating */}
				<div className="flex gap-2.5 items-center text-[26px] text-black">
					<span className="font-extrabold">★ {rating.toFixed(1)}</span>
					<span className="font-normal">({reviews})</span>
				</div>
			</div>
		</div>
	);
}

export default function ArtExamples() {
	return (
		<section className="flex flex-col items-center w-full max-w-7xl mx-auto px-4">
			{/* Header */}
			<div className="w-full py-6 text-center">
				<h2 className="text-[32px] font-extrabold text-black">
					Explore thousands of artists and services
				</h2>
			</div>

			{/* Art Cards Grid - 3 columns on desktop */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
				{artCards.map((card) => (
					<ArtCard
						key={card.id}
						title={card.title}
						artist={card.artist}
						rating={card.rating}
						reviews={card.reviews}
						imageColor={card.imageColor}
					/>
				))}
			</div>
		</section>
	);
}