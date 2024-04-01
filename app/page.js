import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
	return (
		<main>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<button type="button" className="btn btn-primary">Hello</button>
					</div>
					<div className="col-6">World</div>
				</div>
			</div>
		</main>
	);
}