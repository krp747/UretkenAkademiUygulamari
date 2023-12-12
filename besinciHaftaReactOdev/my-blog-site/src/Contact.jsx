export default function Contact() {
	return (
		<main className="mb-4" id="contact-of-me">
			<div className="container px-4 px-lg-5">
				<div className="row gx-4 gx-lg-5">
					<div className="col">
						<h1>
							Eğer benimle iletişime geçmek isterseniz aşağıdaki formu doldurabilirsiniz
						</h1>
						<div className="my-5">
							<form>
								<div className="form-floating">
									<input
										className="form-control"
										id="name"
										type="text"
										placeholder="Enter your name..."
										data-sb-validations="required"
									/>
									<label htmlFor="name">Name</label>
								</div>
								<div className="form-floating">
									<input
										className="form-control"
										id="email"
										type="email"
										placeholder="Enter your email..."
										data-sb-validations="required,email"
									/>
									<label htmlFor="email">Email address</label>
								</div>
								<div className="form-floating">
									<input
										className="form-control"
										id="phone"
										type="tel"
										placeholder="Enter your phone number..."
										data-sb-validations="required"
									/>
									<label htmlFor="phone">Phone Number</label>
								</div>
								<div className="form-floating">
									<textarea
										className="form-control"
										id="message"
										placeholder="Enter your message here..."
										style={{ height: "12rem" }}
										data-sb-validations="required"></textarea>
									<label htmlFor="message">Message</label>
								</div>
								<br />
								<button
									className="btn btn-primary text-uppercase disabled"
									id="submitButton"
									type="submit">
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}