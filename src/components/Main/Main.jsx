import React, {useContext, useEffect, useRef} from 'react';
import './Main.css'
import {assets} from "../../assets/assets.js";
import {Context} from "../../context/Context.jsx";

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)  //从Context中获取值



    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=""/>
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <h4>Welcome to Lios' website!</h4>
                            <h6>How can I help you today?</h6>
                        </div>

                        <div className="cards">
                            <div onClick={() => {
                                onSent("Suggest beautiful places to see on on upcoming road trip",true);
                            }} className="card">
                                <p>Suggest beautiful places to see on on upcoming road trip</p>
                                <img src={assets.compass_icon} alt=""/>
                            </div>
                            <div onClick={() => {
                                onSent("Briefly summarize this concept:urban planning",true);
                            }} className="card">
                                <p>Briefly summarize this concept:urban planning</p>
                                <img src={assets.bulb_icon} alt=""/>
                            </div>
                            <div onClick={() => {
                                onSent("Brainstorm team bonding activities for our work retreat",true);
                            }} className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt=""/>
                            </div>
                            <div onClick={() => {
                                setInput("Improve the readability of the following code");
                            }} className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt=""/>
                            </div>
                        </div>
                    </>
                    : <div className={'result'}>
                        <div className="result-title">
                            <img src={assets.user_icon} alt=""/>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt=""/>
                            {loading
                                ? <div className={'loader'}>
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                </div>
                                : <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                            }
                        </div>
                    </div>}


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if(e.key === 'Enter' && input !== '') {
                                        onSent();
                                    }
                                } }
                               value={input} type="text"
                               placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt=""/>
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt=""/> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;