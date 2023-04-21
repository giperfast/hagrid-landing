import Header from './components/UI/header/Header.jsx';
import TextureSection from './components/UI/texture-section/TextureSection.jsx';
import Scribble from './components/UI/scribble/Scribble.jsx';
import Button from './components/UI/button/Button.jsx';
import './styles/App.css';

import scribble2 from './assets/images/scribble-2.svg';
import scribble3 from './assets/images/scribble-3.svg';


function App() {
  	return (
    	<div className="App">
			<Header/>
			<TextureSection main title="Social Q&A for any website" description="No-code widget, to get visitors talking">
				<Scribble image={scribble3} top="192px" left="-32px"/>
				<Scribble image={scribble2} top="192px" right="-48px"/>
				<Button href="#" size="large">Try for Free</Button>
				<p className="explain">14 day trial. No credit card needed.</p>
			</TextureSection>
    	</div>
  	);
}

export default App;
