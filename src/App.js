import logo from './logo.svg'; 
import {config} from './config';

import Example from './example.gif';
import OS from './icons/OS.png';
import Discord from './icons/discord.png';
import Twitter from './icons/twitter.png';
import Telegram from './icons/telegram.png';
import Instagram from './icons/instagram.png';

import './App.css';

function App() {

  const styles = {
    backgroundImage: "url('./config/images/bg.png')",
  }

  const links = [
    {
      name:'MARKETPLACE_LINK',
      icon:OS
    },
    {
      name:'DISCORD_LINK',
      icon:Discord
    },
    {
      name:'TWITTER_LINK',
      icon:Twitter
    },
    {
      name:'TELEGRAM_LINK',
      icon:Telegram
    },
    {
      name:'INSTAGRAM_LINK',
      icon:Instagram
    },
  ]

  return (
    <div className="App" style={styles}>
      <h1 className='App__Header'>{config.NFT_NAME}</h1>
      <div className='App__Card'>
        <div>
          <img src={Example} className="App__Card__Image"/>
        </div>
      </div>
      <div className='App__Footer'>
        {links.map((item,index)=>config[item.name] && <a href={config[item.name]} key={index} className="App__Footer__Link__Container">
          <img src={item.icon} className="App__Footer__Link"/>
        </a>)}
      </div>
    </div>
  );
}

export default App;
