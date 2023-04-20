import Header from './components/UI/header/Header.jsx';
import TextureSection from './components/UI/texture-section/TextureSection.jsx';
import Scribble from './components/UI/scribble/Scribble.jsx';
import './styles/App.css';

import scribble3 from './assets/images/scribble-3.svg';


function App() {
  	return (
    	<div className="App">
			<Header/>
			<TextureSection main title="Social Q&A for any website" description="No-code widget, to get visitors talking">
				<Scribble image={scribble3} top="192px" left="-32px"/>
			</TextureSection>
    	</div>
  	);
}

export default App;
