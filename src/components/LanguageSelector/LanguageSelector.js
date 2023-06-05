// config and style
import { useState } from 'react';
import './LanguageSelector.scss';

const LanguageSelector = ({ content, clickAction, menu }) => {
    const [expanded, setExpanded] = useState(false);
    const expandLangHandler = (lang) => {
        setExpanded(false);
        clickAction(lang);
        menu(false)
    }
    const classHandler = () => {
        if (expanded) {
            return ["up", "open"]
        } else {
            return ["down", "closed"]
        }
    }
    const selectorClass = classHandler();
    return (
        <div className='language-selector'>
            <button className={'language-selector-select ' + selectorClass[1]} onClick={() => setExpanded(!expanded)}>
                <div className='language-selector-select-content'>
                    <span>{content}</span>
                    <span className={'chevron-item ' + selectorClass[0]}></span>
                </div>
                {expanded ?
                    <div className='language-selector-opt'>
                        <button className='language-selector-opt-1' onClick={() => expandLangHandler("en")}><span>English</span></button>
                        <br/><hr className='language-selector-opt-rule' color='black' size={1} noshade/>
                        <button className='language-selector-opt-2' onClick={() => expandLangHandler("pt")}><span>Português (BR)</span></button>
                    </div> : null
                }
            </button>
        </div>
    )
}

export default LanguageSelector;