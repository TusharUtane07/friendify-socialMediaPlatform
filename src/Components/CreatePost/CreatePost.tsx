import React from "react";

type Props = {};

const CreatePost = (props: Props) => {
	return (
		<div className="mr-2">
			<form>
				<div className="w-full mb-4  border border-gray-200 rounded-lg bg-gray-50">
					<div className="flex items-center justify-between px-3 py-2 border-b">
						<div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse">
							<div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
								<button
									type="button"
									className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
									<svg
										className="w-4 h-4"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 12 20">
										<path
											stroke="currentColor"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
										/>
									</svg>
									<span className="sr-only">Attach file</span>
								</button>
								<button
									type="button"
									className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
									<svg
										className="w-4 h-4"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 16 20">
										<path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
									</svg>
									<span className="sr-only">Embed map</span>
								</button>
								{/* Other buttons */}
							</div>
							{/* Other button groups */}
						</div>
						<button
							type="button"
							data-tooltip-target="tooltip-fullscreen"
							className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100">
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 19 19">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
								/>
							</svg>
							<span className="sr-only">Full screen</span>
						</button>
						<div
							id="tooltip-fullscreen"
							role="tooltip"
							className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
							Show full screen
							<div className="tooltip-arrow" data-popper-arrow></div>
						</div>
					</div>
					<div className="px-4 py-2 bg-white rounded-b-lg">
						<label htmlFor="editor" className="sr-only">
							Publish post
						</label>
						<textarea
							id="editor"
							rows={5}
							className="resize-none block w-full px-0 text-sm outline-none bg-white  text-black border-0 focus:ring-0 "
							placeholder="What are your thoughts..."
							required
						/>
					</div>
				</div>
				<div className="w-full flex justify-end items-center">
					<button
						type="submit"
						className="flex items-center  px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
						Publish post
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePost;
