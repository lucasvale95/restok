import { useState } from 'react';
import { Buttons, TitleBar, TitleHeader, TitleLogo, ToggleButton } from './styles.js'
import {SlMenu} from 'react-icons/sl'
import {VscChromeClose, VscChromeMaximize, VscChromeMinimize, VscChromeRestore} from 'react-icons/vsc'

export default function Title({setToggleMenu, toggleMenu}) {
    const [isMaximized, setIsMaximized] = useState(true);
    const buttonClassName = isMaximized ? 'maximized' : 'restored';

    return (
        <TitleHeader>
            <TitleBar>
                <ToggleButton id="showHideMenus" onClick={()=> {setToggleMenu(!toggleMenu)}}>
                    <SlMenu size={20} color='#fff'/>
                </ToggleButton>
                <TitleLogo>
                    <h1>FlashOrder</h1>
                </TitleLogo>
            </TitleBar>
            <Buttons>
                <button id="minimizeBtn" className='topBtn minimizeBtn' title='Minimizar' onClick={()=> window.ipcRenderer.send('minimizeApp')}>                    
                    <VscChromeMinimize size={20} color='#fff'/>
                </button>
                <button id={`${buttonClassName}`} className={`topBtn ${buttonClassName}`} title='Maximizar' onClick={()=> {
                    window.ipcRenderer.send('maximizeRestoreApp')
                    setIsMaximized(!isMaximized)
                }}>
                    {isMaximized ? <VscChromeMaximize size={20} color='#fff'/> : <VscChromeRestore size={20} color='#fff'/>  }
                </button>
                <button id="closeBtn" className='topBtn closeBtn' title='Fechar' onClick={()=> window.ipcRenderer.send('closeApp')}>
                    <VscChromeClose size={20} color='#fff'/>
                </button>
            </Buttons>
        </TitleHeader>
    );
}
  