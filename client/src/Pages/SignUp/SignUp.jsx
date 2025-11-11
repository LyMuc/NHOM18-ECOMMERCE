import React, { StrictMode } from 'react';
import './sign_up.css';

const SignUp = () => {
	return (
		<div className="signup-page">
			<div className="signup-header">
				{/* <div className="breadcrumbs">Home / Create an account</div> */}
				<h1>Create an account</h1>
			</div>

			<div className="signup-container">
				<div className="signup-card">
					<div className="signup-topnote">
						Already have an account? <a href="#">Log in instead!</a>
					</div>

					<form className="signup-form" onSubmit={(e) => e.preventDefault()}>
						<div className="form-row">
							<label>Social title</label>
							<div className="radio-group">
								<label><input type="radio" name="title" /> Mr.</label>
								<label><input type="radio" name="title" /> Mrs.</label>
							</div>
						</div>

						<div className="form-row">
							<label>First name</label>
							<div className="input-with-hint">
								<input type="text" />
								<small>Only letters and the dot (.) character, followed by a space, are allowed.</small>
							</div>
						</div>

						<div className="form-row">
							<label>Last name</label>
							<div className="input-with-hint">
								<input type="text" />
								<small>Only letters and the dot (.) character, followed by a space, are allowed.</small>
							</div>
						</div>

						<div className="form-row">
							<label>Email</label>
							<input type="email" />
						</div>

						<div className="form-row">
							<label>Password</label>
							<div className="password-wrapper">
								<input type="password" />
								<button type="button" className="show-btn">SHOW</button>
							</div>
						</div>

						<div className="form-row">
							<label>Birthdate</label>
							<div className="input-optional">
								<input type="text" placeholder="MM/DD/YYYY" />
								<small>(E.g.: 05/31/1970) (Optional)</small>
								
							</div>
						</div>

						<div className="form-row checkbox">
							<label>
								<input type="checkbox" /> Receive offers from our partners
							</label>
						</div>

						<div className="form-row checkbox">
							<label>
								<input type="checkbox" /> Sign up for our newsletter
							</label>
						</div>

						<div className="form-row checkbox">
							<label>
								<input type="checkbox" /> Customer data privacy
							</label>
							<p className="privacy-note">
								The personal data you provide is used to answer queries, process orders or allow access to specific information. You have the right to modify and delete all the personal information found in the "My Account" page.
							</p>
						</div>

						<div className="form-row checkbox">
							<label>
								<input type="checkbox" /> I agree to the terms and conditions and the privacy policy
							</label>
						</div>

						<div className="form-actions">
							<button className="save-btn" type="submit">SAVE</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

