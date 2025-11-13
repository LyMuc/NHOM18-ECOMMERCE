import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import "../../../style.css";

// Address Edit page
// Title switches between "Update your address" and "New address" based on presence of :id or provided state.mode
function EditAddress() {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	const mode = location.state?.mode || (id ? 'update' : 'new');
	const title = mode === 'update' ? 'Update your address' : 'New address';

	const defaultAddress = {
		alias: id ? 'Company' : '',
		firstName: id ? 'Dang Minh' : '',
		lastName: id ? 'Hoang' : '',
		company: id ? 'Koei' : '',
		address: id ? 'Hoang Cau' : '',
		addressComplement: id ? 'F15 Building' : '',
		city: id ? 'Ha Noi' : '',
		state: id ? 'Kansas' : '',
		postalCode: id ? '23456' : '',
		country: id ? 'United States' : 'United States',
		phone: id ? '0386626193' : '',
	};

	const [form, setForm] = useState(defaultAddress);

	const states = useMemo(
		() => ['Alabama', 'Alaska', 'Arizona', 'California', 'Florida', 'Kansas', 'New York', 'Texas', 'Washington'],
		[]
	);
	const countries = useMemo(() => ['United States', 'Viet Nam', 'Canada', 'United Kingdom'], []);

	const onChange = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

	const onSubmit = (e) => {
		e.preventDefault();
		// In a real app, call API then navigate
		// For now, just log and go back to account page
		console.log('Saving address', { id, ...form });
		navigate('/my_account');
	};

	const Row = ({ label, children, optional = false }) => (
		<div className="grid grid-cols-[160px_1fr_80px] gap-4 items-center">
			<label className="text-right text-sm text-gray-700">{label}</label>
			<div>{children}</div>
			<div className="text-xs text-gray-400">{optional ? 'Optional' : ''}</div>
		</div>
	);

	return (
		<div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
			<header className="py-6">
				<h1 className="text-2xl font-semibold">{title}</h1>
			</header>

			<form onSubmit={onSubmit} className="border rounded-lg bg-white p-6 md:p-8 space-y-4">
				<Row label="Alias" optional>
					<input
						type="text"
						value={form.alias}
						onChange={onChange('alias')}
						className="w-full border rounded px-3 py-2"
						placeholder="e.g., Home, Office"
					/>
				</Row>

				<Row label="First name">
					<input
						type="text"
						value={form.firstName}
						onChange={onChange('firstName')}
						className="w-full border rounded px-3 py-2"
						required
					/>
				</Row>

				<Row label="Last name">
					<input
						type="text"
						value={form.lastName}
						onChange={onChange('lastName')}
						className="w-full border rounded px-3 py-2"
						required
					/>
				</Row>

				<Row label="Company" optional>
					<input
						type="text"
						value={form.company}
						onChange={onChange('company')}
						className="w-full border rounded px-3 py-2"
					/>
				</Row>

				<Row label="Address">
					<input
						type="text"
						value={form.address}
						onChange={onChange('address')}
						className="w-full border rounded px-3 py-2"
						required
					/>
				</Row>

				<Row label="Address Complement" optional>
					<input
						type="text"
						value={form.addressComplement}
						onChange={onChange('addressComplement')}
						className="w-full border rounded px-3 py-2"
					/>
				</Row>

				<Row label="City">
					<input
						type="text"
						value={form.city}
						onChange={onChange('city')}
						className="w-full border rounded px-3 py-2"
						required
					/>
				</Row>

				<Row label="State">
					<select
						value={form.state}
						onChange={onChange('state')}
						className="w-full border rounded px-3 py-2"
					>
						<option value="">Select a state</option>
						{states.map((s) => (
							<option key={s} value={s}>{s}</option>
						))}
					</select>
				</Row>

				<Row label="Zip/Postal Code">
					<input
						type="text"
						value={form.postalCode}
						onChange={onChange('postalCode')}
						className="w-full border rounded px-3 py-2"
						required
					/>
				</Row>

				<Row label="Country">
					<select
						value={form.country}
						onChange={onChange('country')}
						className="w-full border rounded px-3 py-2"
						required
					>
						{countries.map((c) => (
							<option key={c} value={c}>{c}</option>
						))}
					</select>
				</Row>

				<Row label="Phone" optional>
					<input
						type="tel"
						value={form.phone}
						onChange={onChange('phone')}
						className="w-full border rounded px-3 py-2"
					/>
				</Row>

				<div className="pt-4 flex justify-end">
					<button type="submit" className="px-5 py-2 rounded bg-rose-500 hover:bg-rose-600 text-white">
						Save
					</button>
				</div>
			</form>
		</div>
	);
}

export default EditAddress;