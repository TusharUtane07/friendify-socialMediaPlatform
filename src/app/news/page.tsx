"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Article {
	title: string;
	description: string;
	content: string;
	publishedAt: string;
	source: {
		name: string;
	};
	url: string;
	urlToImage: string;
}

const News: React.FC = () => {
	const [data, setData] = useState<Article[]>([]);
	const [loading, setLoading] = useState<boolean>(true); // Add loading state
	const [currentPage, setCurrentPage] = useState<number>(1);
	const articlesPerPage: number = 10;

	useEffect(() => {
		getNewsData();
	}, []);

	const getNewsData = (): void => {
		setLoading(true); // Set loading to true when fetching data
		axios
			.get<{ articles: Article[] }>(
				`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
			)
			.then((response) => {
				console.log("Response data:", response.data.articles);
				setData(response?.data.articles);
			})
			.catch((error) => {
				console.error("Error:", error);
			})
			.finally(() => {
				setLoading(false); // Set loading to false after fetching data
			});
	};

	const formatTimestamp = (timestamp: string): string => {
		var dateObj = new Date(timestamp);
		var year = dateObj.getFullYear();
		var month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // Months are zero-based
		var day = ("0" + dateObj.getDate()).slice(-2);
		var formattedDate = month + "/" + day + "/" + year;
		return formattedDate;
	};

	const indexOfLastArticle: number = currentPage * articlesPerPage;
	const indexOfFirstArticle: number = indexOfLastArticle - articlesPerPage;
	const currentArticles: Article[] = data.slice(
		indexOfFirstArticle,
		indexOfLastArticle
	);

	// const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

	return (
		<>
			{" "}
			<div className="mt-20 lg:mt-8 mb-8 text-center underline font-bold ">
				<h1 className="text-xl md:text-2xl lg:text-4xl">
					News: Top headlines in India.
				</h1>
			</div>
			{loading && <div>Loading...</div>}
			<div className="grid grid-cols-1 gap-4 mx-2 lg:grid-cols-2">
				{currentArticles.map((item: Article, index: number) => (
					<div
						key={index}
						className="border-2 px-2 py-3 border-gray-500 rounded-md">
						<img src={item?.urlToImage} alt="News" />
						<div className="font-bold mt-3">Title: {item?.title}</div>
						<div className="mt-2"> Description: {item?.description}</div>
						<div className="mt-2">
							Date: {formatTimestamp(item?.publishedAt)}
						</div>
						<div className="mt-2">Source: {item?.source.name}</div>
						<div className="mt-2"> Content: {item?.content}.</div>
						<div className="mt-2 font-semibold">
							<a target="_blank" href={item.url}>
								Read more.
							</a>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-4">
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
					className="mx-1 px-3 py-1 bg-white text-black rounded-md">
					Previous
				</button>
				{Array.from(
					{ length: Math.ceil(data.length / articlesPerPage) },
					(_, index) => (
						<button
							key={index}
							onClick={() => setCurrentPage(index + 1)}
							className={`mx-1 px-3 py-1 ${
								currentPage === index + 1
									? "bg-yellow-600 text-black"
									: "bg-white text-black"
							} rounded-md`}>
							{index + 1}
						</button>
					)
				)}
				<button
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={currentPage === Math.ceil(data.length / articlesPerPage)}
					className="mx-1 px-3 py-1 bg-white text-black rounded-md">
					Next
				</button>
			</div>
		</>
	);
};

export default News;
