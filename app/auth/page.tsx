"use client"

import React, { useState } from "react"
import Link from "next/link"
import "./auth.css"

export default function AuthPage() {
	const [isRightPanelActive, setIsRightPanelActive] = useState(false)

	return (
		<div className="auth-page-root">
			<main className={`card-container${isRightPanelActive ? " right-panel-active" : ""}`} id="card-container">
				<div className="form-container sign-up-container">
					<form onSubmit={(e) => e.preventDefault()}>
						<h1>Create Account</h1>
						<div className="social-container">
							<a href="#" className="social"><i className="fab fa-facebook-f" /></a>
							<a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
							<a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
						</div>
						<span>or use your email for registration</span>
						<label>
							<input type="text" id="signup-name" placeholder="Name" />
						</label>
						<label>
							<input type="email" id="signup-email" placeholder="Email" />
						</label>
						<label>
							<input type="password" id="signup-password" placeholder="Password" />
						</label>
						<button type="submit">Sign Up</button>
					</form>
				</div>

				<div className="form-container sign-in-container">
					<form onSubmit={(e) => e.preventDefault()}>
						<h1>Sign In</h1>
						<div className="social-container">
							<a href="#" className="social"><i className="fab fa-facebook-f" /></a>
							<a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
							<a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
						</div>
						<span>or use your account</span>
						<label>
							<input type="email" id="signin-email" placeholder="Email" />
						</label>
						<label>
							<input type="password" id="signin-password" placeholder="Password" />
						</label>
						<a href="#">Forgot your password?</a>
						<button type="submit">Sign In</button>
					</form>
				</div>

				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className="ghost" id="signIn" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello!</h1>
							<p>Enter your personal details and start your journey with us</p>
							<button className="ghost" id="signUp" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
						</div>
					</div>
				</div>
			</main>

			{/* Fallback link back to home */}
			<div className="mt-4 text-center">
				<Link href="/">Back to home</Link>
			</div>
		</div>
	)
}