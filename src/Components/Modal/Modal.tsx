import React, { useState } from "react";

const CrudModal: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Happy Happy!!");
	};

	return (
		<>
			{/* Modal toggle button */}
			<button
				onClick={toggleModal}
				className="block text-black bg-white  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mt-3 lg:mt-5"
				type="button">
				Edit details
			</button>

			{/* Main modal */}
			{isModalOpen && (
				<div
					id="crud-modal"
					className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-80">
					<div className="relative p-4 w-full max-w-md">
						{/* Modal content */}
						<div className="relative bg-white rounded-lg shadow">
							{/* Modal header */}
							<div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
								<h3 className="text-lg font-semibold text-gray-900 ">
									Add personal information
								</h3>
								<button
									onClick={toggleModal}
									type="button"
									className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center ">
									<svg
										className="w-3 h-3"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 14">
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
										/>
									</svg>
									<span className="sr-only">Close modal</span>
								</button>
							</div>
							{/* Modal body */}
							<form onSubmit={handleSubmit} className="p-4">
								<div className="grid gap-4 mb-4 grid-cols-2">
									<div className="col-span-2">
										<label
											htmlFor="name"
											className="block mb-2 text-sm font-medium text-gray-900 ">
											Add link
										</label>
										<input
											type="text"
											name="name"
											id="name"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											placeholder="Personal link URL"
											required
										/>
									</div>
									<div className="col-span-2">
										<label
											htmlFor="name"
											className="block mb-2 text-sm font-medium text-gray-900 ">
											Add Bio
										</label>
										<input
											type="text"
											name="name"
											id="name"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											placeholder="Write about yourself"
											required
										/>
									</div>
									{/* Add other form fields similarly */}
								</div>
								<button
									type="submit"
									className="text-white inline-flex items-center bg-black focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									<svg
										className="me-1 -ms-1 w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
											clipRule="evenodd"
										/>
									</svg>
									Save
								</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CrudModal;
