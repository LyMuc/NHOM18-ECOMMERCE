import React from 'react';

const SignUp = () => {
	return (
		<div className="min-h-screen w-full bg-gray-50 pb-12">
			<div className="w-full bg-gray-300 border-b border-gray-200 mb-4">
				<div className="max-w-5xl mx-auto px-4">
					<h1 className="py-6 m-0 text-2xl font-bold">Create an account</h1>
				</div>
			</div>

			<div className="flex justify-center px-4">
				<div className="bg-white border border-gray-200 rounded-lg max-w-[760px] w-full p-6 md:p-6">
					<div className="text-gray-600 text-sm mb-4">
						Already have an account? <a href="#" className="text-gray-900 font-semibold">Log in instead!</a>
					</div>

					<form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
						<div className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-start gap-4">
							<label className="font-semibold text-gray-900">Social title</label>
							<div className="flex gap-4">
								<label className="font-medium"><input type="radio" name="title" className="mr-2" /> Mr.</label>
								<label className="font-medium"><input type="radio" name="title" className="mr-2" /> Mrs.</label>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-start gap-4">
							<label className="font-semibold text-gray-900">First name</label>
							<div>
								<input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
								<small className="block text-gray-600 mt-1 text-xs">Only letters and the dot (.) character, followed by a space, are allowed.</small>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-start gap-4">
							<label className="font-semibold text-gray-900">Last name</label>
							<div>
								<input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
								<small className="block text-gray-600 mt-1 text-xs">Only letters and the dot (.) character, followed by a space, are allowed.</small>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-start gap-4">
							<label className="font-semibold text-gray-900">Email</label>
							<input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" />
						</div>

						<div className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-start gap-4">
							<label className="font-semibold text-gray-900">Password</label>
							<div className="relative flex items-center">
								<input type="password" className="w-full px-3 py-2 border border-gray-300 rounded pr-20" />
								<button type="button" className="absolute right-1 top-1 bottom-1 bg-black text-white px-4 rounded-r text-sm font-bold">SHOW</button>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-start gap-4">
							<label className="font-semibold text-gray-900">Birthdate</label>
							<div>
								<input type="text" placeholder="MM/DD/YYYY" className="w-full px-3 py-2 border border-gray-300 rounded" />
								<small className="block text-gray-600 mt-1 text-xs">(E.g.: 05/31/1970) (Optional)</small>
							</div>
						</div>

						<div className="flex items-start gap-2">
							<label className="text-gray-900"><input type="checkbox" className="mr-2" /> Receive offers from our partners</label>
						</div>

						<div className="flex items-start gap-2">
							<label className="text-gray-900"><input type="checkbox" className="mr-2" /> Sign up for our newsletter</label>
						</div>

						<div>
							<label className="text-gray-900"><input type="checkbox" className="mr-2" /> Customer data privacy</label>
							<p className="text-gray-600 text-xs leading-5 mt-1">
								The personal data you provide is used to answer queries, process orders or allow access to specific information. You have the right to modify and delete all the personal information found in the "My Account" page.
							</p>
						</div>

						<div className="flex items-start gap-2">
							<label className="text-gray-900"><input type="checkbox" className="mr-2" /> I agree to the terms and conditions and the privacy policy</label>
						</div>

						<div className="flex justify-end mt-2">
							<button className="bg-red-500 hover:bg-red-600 text-white rounded px-5 py-3 font-bold text-sm" type="submit">SAVE</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

