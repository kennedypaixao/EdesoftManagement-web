/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import GlobalStyles from '@mui/material/GlobalStyles';
// import ProductsHeader from './ProductsHeader';
// import ProductsTable from './ProductsTable';

/**
 * The products page.
 */
function List() {
	return (
		<>
			<GlobalStyles
				styles={() => ({
					'#root': {
						maxHeight: '100vh'
					}
				})}
			/>
			<div className="w-full h-full container flex flex-col">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-bold tracking-tight text-gray-900">Produtos</h2>
					{/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
									alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$48</p>
						</a>
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
									alt="Olive drab green insulated bottle with flared screw lid and flat top."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$35</p>
						</a>
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
									alt="Person using a pen to cross a task off a productivity paper card."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$89</p>
						</a>
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
									alt="Hand holding black machined steel mechanical pencil with brass tip and top."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$35</p>
						</a>

						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
									alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$48</p>
						</a>
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
									alt="Olive drab green insulated bottle with flared screw lid and flat top."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$35</p>
						</a>
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
									alt="Person using a pen to cross a task off a productivity paper card."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$89</p>
						</a>
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
									alt="Hand holding black machined steel mechanical pencil with brass tip and top."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$35</p>
						</a>

						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
									alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$48</p>
						</a>
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
									alt="Olive drab green insulated bottle with flared screw lid and flat top."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$35</p>
						</a>
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
									alt="Person using a pen to cross a task off a productivity paper card."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$89</p>
						</a>
						<a
							href="#"
							className="group"
						>
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
									alt="Hand holding black machined steel mechanical pencil with brass tip and top."
									className="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">$35</p>
						</a>
					</div> */}

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<a
							href="javascript:;"
							className="max-w-[384px] mx-auto"
						>
							<div className="w-full max-w-sm aspect-square">
								<img
									src="https://pagedone.io/asset/uploads/1701157806.png"
									alt="cream image"
									className="w-full h-full rounded-xl"
								/>
							</div>
							<div className="mt-5 flex items-center justify-between">
								<div className="">
									<h6 className="font-medium text-xl leading-8 text-black mb-2">Skin care cream</h6>
									<h6 className="font-semibold text-xl leading-8 text-indigo-600">$74.99</h6>
								</div>
								<button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
									<svg
										className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
										xmlns="http://www.w3.org/2000/svg"
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
									>
										<path
											d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
											stroke=""
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
									</svg>
								</button>
							</div>
						</a>

						<a
							href="javascript:;"
							className="max-w-[384px] mx-auto"
						>
							<div className="w-full max-w-sm aspect-square">
								<img
									src="https://pagedone.io/asset/uploads/1701157826.png"
									alt="cream image"
									className="w-full h-full rounded-xl"
								/>
							</div>
							<div className="mt-5 flex items-center justify-between">
								<div className="">
									<h6 className="font-medium text-xl leading-8 text-black mb-2">Men’s Facial</h6>
									<h6 className="font-semibold text-xl leading-8 text-indigo-600">$25</h6>
								</div>
								<button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
									<svg
										className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
										xmlns="http://www.w3.org/2000/svg"
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
									>
										<path
											d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
											stroke=""
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
									</svg>
								</button>
							</div>
						</a>

						<a
							href="javascript:;"
							className="max-w-[384px] mx-auto"
						>
							<div className="w-full max-w-sm aspect-square relative">
								<img
									src="https://pagedone.io/asset/uploads/1701157844.png"
									alt="serum bottle image"
									className="w-full h-full rounded-xl"
								/>
								<span className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">
									20% Off
								</span>
							</div>
							<div className="mt-5 flex items-center justify-between">
								<div className="">
									<h6 className="font-medium text-xl leading-8 text-black mb-2">
										Dark circles serum
									</h6>
									<h6 className="font-semibold text-xl leading-8 text-indigo-600">$199.99</h6>
								</div>
								<button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
									<svg
										className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
										xmlns="http://www.w3.org/2000/svg"
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
									>
										<path
											d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
											stroke=""
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
									</svg>
								</button>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default List;
