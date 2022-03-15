import { useState } from 'react';
import { BsCheckLg, BsXLg } from 'react-icons/bs';

export function Card({ type }) {
	const [hover, setHover] = useState(false);

	// Conditional styling for hover effect
	const style = { marginBottom: hover ? '05px' : '0px', marginTop: hover ? '-10px' : '0px' };

	return (
		<div
			className="card"
			style={style}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="card-body">
				<h5 className="card-title text-muted text-center">
					{type === 'Free' ? 'FREE' : type === 'Plus' ? 'PLUS' : 'PRO'}
				</h5>

				<h6 className="card-price text-center">
					${type === 'Free' ? '0' : type === 'Plus' ? '9' : '49'}
					<span className="period">/month</span>
				</h6>

				<hr />
				<ul className="list">
					<li>
						<BsCheckLg className="check" />

						{/* Conditional rendering for number of users */}

						{type === 'Free' ? (
							'Single User'
						) : type === 'Plus' ? (
							<b>5 Users</b>
						) : (
							<b>Unlimited Users</b>
						)}
					</li>
					<li>
						<BsCheckLg className="check" />

						{/* Conditional rendering for number of users */}

						{type === 'Free' ? '5GB Storage' : type === 'Plus' ? '50GB Storage' : '150GB Storage'}
					</li>
					<li>
						<BsCheckLg className="check" />
						Unlimited Public Projects
					</li>
					<li>
						<BsCheckLg className="check" />
						Community Access
					</li>
					<li className={type === 'Free' ? 'text-muted' : 'notmuted'}>
						{type === 'Free' ? <BsXLg className="cross" /> : <BsCheckLg className="check" />}
						Unlimited Private Projects
					</li>
					<li className={type === 'Free' ? 'text-muted' : 'notmuted'}>
						{type === 'Free' ? <BsXLg className="cross" /> : <BsCheckLg className="check" />}
						Dedicated Phone Support
					</li>
					<li className={type === 'Free' ? 'text-muted' : 'notmuted'}>
						{type === 'Free' ? <BsXLg className="cross" /> : <BsCheckLg className="check" />}
						{type === 'Free' || type === 'Plus' ? (
							'Free Subdomain'
						) : (
							<span>
								<b>Unlimited</b> Free Subdomains
							</span>
						)}
					</li>
					<li className={type === 'Pro' ? 'notmuted' : 'text-muted'}>
						{type === 'Free' || type === 'Plus' ? (
							<BsXLg className="cross" />
						) : (
							<BsCheckLg className="check" />
						)}
						Monthly Status Reports
					</li>
				</ul>

				<button className={`btn btn-warning ${hover ? '' : 'disabled'}`}>Button</button>
			</div>
		</div>
	);
}
