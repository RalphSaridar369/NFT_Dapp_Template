import logo from './logo.svg';
import { config } from './config';

import Example from './example.gif';
import OS from './icons/OS.png';
import Discord from './icons/discord.png';
import Twitter from './icons/twitter.png';
import Telegram from './icons/telegram.png';
import Instagram from './icons/instagram.png';

import './App.css';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);

  const styles = {
    backgroundImage: "url('./config/images/bg.png')",
  }

  const links = [
    {
      name: 'MARKETPLACE_LINK',
      icon: OS
    },
    {
      name: 'DISCORD_LINK',
      icon: Discord
    },
    {
      name: 'TWITTER_LINK',
      icon: Twitter
    },
    {
      name: 'TELEGRAM_LINK',
      icon: Telegram
    },
    {
      name: 'INSTAGRAM_LINK',
      icon: Instagram
    },
  ]

  const changeAmount = (type) => {
    if (type == "add") {
      if (amount < config.MAX_MINT)
        setAmount(amount + 1)
    }
    else {
      if (amount != 0)
        setAmount(amount - 1)
    }
  }

  return (
    <div className="App" style={styles}>
      <h1 className='App__Header'>{config.NFT_NAME}</h1>
      <h3 style={{marginBottom:'30px'}}>Price: {config.DISPLAY_COST} {config.NETWORK.SYMBOL}</h3>
      <div className='App__Card'>
        <div>
          <img src={Example} className="App__Card__Image" />
        </div>
        <div className='App__Card__Container'>
          <h1>Mint</h1>
          <div className='App__Card__Icon__Container'>
            <div className='App__Card__Icon'
              onClick={() => changeAmount("add")}>
              <p className='App__Card__Icon__Text'>+</p>
            </div>
            <div className='App__Card__Icon__Result'>
              <h3>{amount}</h3>
            </div>
            <div className='App__Card__Icon'
              onClick={() => changeAmount("remove")}>
              <p className='App__Card__Icon__Text'>-</p>
            </div>
          </div>
          <div className='App__Card__Button'>
            <h3 style={{color:'#fff'}}>Buy</h3>
          </div>
        </div>
      </div>
      <div className='App__Footer'>
        {links.map((item, index) => config[item.name] && <a href={config[item.name]} key={index} className="App__Footer__Link__Container">
          <img src={item.icon} className="App__Footer__Link" />
        </a>)}
      </div>
    </div>
  );
}

export default App;
