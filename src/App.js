import Header from './components/UI/header/Header.jsx';
import TextureSection from './components/UI/texture-section/TextureSection.jsx';
import Scribble from './components/UI/scribble/Scribble.jsx';
import Button from './components/UI/button/Button.jsx';
import HeroImages from './components/UI/hero-images/HeroImages.jsx';
import AdvantageCards from './components/UI/advantage-cards/AdvantageCards.jsx';
import Integrations from './components/UI/integrations/Integrations.jsx';
import Showcase from './components/UI/showcase/Showcase.jsx';
import Questions from './components/UI/questions/Questions.jsx';
import Footer from './components/UI/footer/Footer.jsx';
import classes from  './styles/App.css';

import heart_icon from  './assets/images/heart.svg';

function App() {
  	return (
    	<div className="App">
			<Header/>
			<TextureSection main title="Social Q&A for any website" description="No-code widget, to get visitors talking" color="#fdefef">
				<Scribble scribble_id="3"/>
				<Scribble scribble_id="2"/>
				<Button href="#" size="large">Try for Free</Button>
				<p className={classes.explain}>14 day trial. No credit card needed.</p>
				<HeroImages/>
			</TextureSection>
			<TextureSection title="All of the results - none of the work!" description="In 15 minutes get set for automatic SEO, social proof and meaningful engagement">
				<Scribble scribble_id="8"/>
				<Scribble scribble_id="9"/>
				<AdvantageCards/>
			</TextureSection>
			<Integrations/>
			<TextureSection title="Powerful and Simple. Gets things done!" description="The hagrid dashboard puts everything you need to manage your QnA, at your fingertips." color="#edffec80">
				<Scribble scribble_id="10"/>
				<Showcase/>
			</TextureSection>
			<TextureSection title="See hagrid in action" description="Ask us anything you'd like, we're using hagrid to put this FAQ up" color="#ffdefa66">
				<Scribble scribble_id="4"/>
				<Scribble scribble_id="5"/>
				<Questions/>
			</TextureSection>
			<TextureSection title="What they are saying about hagrid..." description={['People', `<img src=${heart_icon}/>`, 'us']} color="#8384df33">
				<Scribble scribble_id="7"/>
				<Scribble scribble_id="6"/>
			</TextureSection>
			<TextureSection title="Unlimited everything always" description="One simple plan. No limits. Pay annually and save." color="#facdcd99">
				<Scribble scribble_id="1"/>
			</TextureSection>
			<Footer/>
    	</div>
  	);
}

export default App;
