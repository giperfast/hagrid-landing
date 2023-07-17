import Header from '../components/UI/header/Header.jsx';
import Footer from '../components/UI/footer/Footer.jsx';
import Button from '../components/UI/button/Button.jsx';
import Scribble from '../components/landing/scribble/Scribble.jsx';
import classes from  '../styles/Error404.module.css';
import '../styles/App.css';

function Error_404() {
  	return (
    	<>
			<Header/>
			<div className="page-body">
				<div className={classes.container}>
					<Scribble scribble_id="3"/>
					<Scribble scribble_id="2"/>
					<p className={classes.title}>404</p>
					<p className={classes.description}>The requested page could not be found</p>
					<Button href="/">Go to home</Button>
				</div>
			</div>
			<Footer/>
    	</>
  	);
}

export default Error_404;