import {useState} from "react";

function Main ():JSX.Element {
    const [isRightPanelActive, setIsRightPanelActive] = useState(true);
    document.title = "Владимир Кадочников"
    const handleChangePanel = () => {
        setIsRightPanelActive(!isRightPanelActive)
    }
    return (
        <>
            <div className={`container ${isRightPanelActive? 'right-panel-active': ''}`} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>DevOps engineer info</h1>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Photographer info</h1>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div onClick={handleChangePanel} className="overlay-panel overlay-left">
                            <h1>About photographer</h1>
                        </div>
                        <div onClick={handleChangePanel} className="overlay-panel overlay-right">
                            <h1>About devOps engineer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Main;