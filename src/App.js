import Header from './components/UI/header/Header.jsx';
import TextureSection from './components/UI/texture-section/TextureSection.jsx';
import Scribble from './components/UI/scribble/Scribble.jsx';
import Button from './components/UI/button/Button.jsx';
import HeroImages from './components/UI/hero-images/HeroImages.jsx';
import AdvantageCards from './components/UI/advantage-cards/AdvantageCards.jsx';
import './styles/App.css';



function App() {
  	return (
    	<div className="App">
			<Header/>
			<TextureSection main title="Social Q&A for any website" description="No-code widget, to get visitors talking" color="#fdefef">
				<Scribble scribble="3"/>
				<Scribble scribble="2"/>
				<Button href="#" size="large">Try for Free</Button>
				<p className="explain">14 day trial. No credit card needed.</p>
				<HeroImages/>
			</TextureSection>
			<TextureSection title="All of the results - none of the work!" description="In 15 minutes get set for automatic SEO, social proof and meaningful engagement">
				<Scribble scribble="8"/>
				<Scribble scribble="9"/>
				<AdvantageCards/>
			</TextureSection>
    	</div>
  	);
}

export default App;
