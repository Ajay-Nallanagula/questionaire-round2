import React from 'react';
import original from '../assets/original.png';
import logo from '../assets/logo.png';
import { AiOutlineClose, AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<div className='nav'>
				<a href='https://www.vaengad.se/'>
					<AiOutlineLeft className='icons ' />
					<span>PREVIOUS</span>
				</a>
				<a href='https://www.vaengad.se/'>
					<img src={original} alt='vaengad' />
				</a>
				<a href='https://www.vaengad.se/'>
					<span>EXIT</span> <AiOutlineClose className='icons' />
				</a>
			</div>
			<section className='home-main'>
				<img src={logo} alt='logo' />
				<h1>
					Welcome to the Vaengad Lab's <br /> New Business Questionnaire
				</h1>
				<p>
					Please note that all your answers will remain strictly confidential.
					They will be used ONLY <br /> for our internal professional means of
					determining the appropriate
				</p>
				<Link to='/questionnaire'>
					<button>LET'S GET STARTED</button>
				</Link>
			</section>
		</div>
	);
}
