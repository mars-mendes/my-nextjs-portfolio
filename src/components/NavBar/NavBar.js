import { useEffect, useState } from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './NavBar.scss';

const NavBar = ({ content, langSelector }) => {
    const [showMenu, setShowMenu] = useState(false)
    const size = useWindowSize();
    const width = size.width
    const menuIconHandler = () => {
        if (showMenu) {
            return "change"
        } else {
            return "default"
        }
    }
    const menuIconStyle = menuIconHandler();

    return (
        <div className="nav">
            {width >= 671 ?
                <>
                    <div className="nav-welcome">
                        <img src='marsAvatarMobile.png' alt="pixel art avatar" />
                        <h1>Mars Mendes</h1>
                    </div>
                    {/* <div className='nav-welcome-desktop'>
                        <div className='nav-welcome-desktop-icon' onClick={() => setShowMenu(!showMenu)}>
                            <div class={'bar1 ' + menuIconStyle}></div>
                            <div class={'bar2 ' + menuIconStyle}></div>
                            <div class={'bar3 ' + menuIconStyle}></div>
                        </div>
                        {showMenu ? */}
                            <div className="nav-language-selector">
                                <LanguageSelector content={content.nav.dropdown} clickAction={langSelector} menu={setShowMenu} />
                            </div> 
                            {/* : ""
                        }
                    </div> */}
                </>
                :
                <>
                    {showMenu ?
                        <div className="nav-language-selector">
                            <LanguageSelector content={content.nav.dropdown} clickAction={langSelector} menu={setShowMenu} />
                        </div>
                        :
                        <div className="nav-welcome-mobile">
                            <img src='marsAvatarMobile.png' alt="pixel art avatar" />
                            <h1>Mars Mendes</h1>
                        </div>
                    }
                    <div className='nav-welcome-desktop-icon' onClick={() => setShowMenu(!showMenu)}>
                            <div class={'bar1 ' + menuIconStyle}></div>
                            <div class={'bar2 ' + menuIconStyle}></div>
                            <div class={'bar3 ' + menuIconStyle}></div>
                    </div>
                </>
            }
        </div>
    )
}

// get window size for mobile custom
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default NavBar;