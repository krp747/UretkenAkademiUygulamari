export default function Footer() {
	return (
		<>
			<footer className="border-top">
				<div className="container px-4 px-lg-5">
					<div className="row gx-4 gx-lg-5 justify-content-center">
						<div className="col-md-10 col-lg-8 col-xl-7">
							<ul className="list-inline text-center">
								<li className="list-inline-item">
									<a href="https://todosapp-site.netlify.app/">
										<span className="fa-stack fa-lg">
											<i className="fas fa-circle fa-stack-2x"></i>
											<i className="fa-solid fa-cat fa-stack-1x fa-inverse"></i>
										</span>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://www.linkedin.com/in/mehmet-enes-turhan/">
										<span className="fa-stack fa-lg">
											<i className="fas fa-circle fa-stack-2x"></i>
											<i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
										</span>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://github.com/krp747">
										<span className="fa-stack fa-lg">
											<i className="fas fa-circle fa-stack-2x"></i>
											<i className="fab fa-github fa-stack-1x fa-inverse"></i>
										</span>
									</a>
								</li>
							</ul>
							<div className="small text-center text-muted fst-italic">
								Mehmet Enes Turhan
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
