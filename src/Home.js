import React from 'react';
import './Home.css';
import Headernjra from './assets/headernjra.jpg';
import Logo from './assets/logo.jpg';
import PeekingMan from './assets/peekingMan.png';
import WomanSitting from './assets/womansitting.png';
import LikeOnFacebook from './assets/likeonfacebook.jpg';
import YellowButton from './assets/yellowbutton.png';

const Home = () => {
    return(
        <div className="Wrapper">
        <table style={{
                width:"1365px",
                marginLeft:"14%",
                marginLight:"20%",            
        }}>
            <tbody>
                <tr>
                    <td>
                        <div className="HeaderRow">
                            <img alt="njHeader" src={Headernjra} style={{position:"relative"}}/>
                            <img alt="logo" src={Logo} style={{position:"absolute", bottom:"5%", right:"2%" }}/>
                            <h1>Where your license stays active when you can't afford to!</h1>
                            <div className="ButtonGroup">
                                <button className="homeButton">Home</button>
                                <a href="http://newjerseyreferralagents.eversandrealtygroup.com/agents.html"><button>Agents</button></a>
                                <a href="http://newjerseyreferralagents.eversandrealtygroup.com/BrokerProgram.html"><button>Broker Program</button></a>
                                <a href="http://newjerseyreferralagents.eversandrealtygroup.com/contact_us.html"><button>Contact Us</button></a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <table className="Message">
                                            <tbody>
                                                <tr><td>                                                
                                                    <div className="Offer">
                                                        ONLY $75/YEAR
                                                        <br/>
                                                        80% SPLIT
                                                    </div>
                                                    </td>  
                                                    <td>
                                                    <br/>
                                                    <p style={{fontSize:'20px'}}>About us and our Agents:</p>
                                                    <br/>
                                                    
                                                    <p>We are a licensed Real Estate Company in New Jersey who has formed one of the most sought after places for agents to hang their licenses while they retire,
                                                        go into another occupation, recuperate from hard times or decided to earn money through referrals.</p>
                                                        <p>Our agents are <u>exempt</u> from paying the fees that full service Realtors are required to pay.  This includes Board dues, MLS fees, NJAR (New Jersey Association of
                                                        Realtior) fees, E & O Insurance and any other Company fees that are required by their full service company.</p>
                                                        <p>We hold all license "types".  No matter what your license type is you will still only be able to "refer".  If you chose to change 
                                                        your license type to "Referral Agent" you will be <u>exempt</u> from taking 12 credit courses of Continued Education every 2 years prior to renewing your license.  If you 
                                                        maintain a license type of "Salesperson or Broker" then you will be required to take the Continued Educaation Courses every 2 years prior to renewing with the
                                                        State.  This is your choice.</p>
                                                        <p>Our agents refer their buyer/seller leads to full time sales agents in full service real estate companies, not only in New Jersey but anywhere in the country.  The agent
                                                        has the choice to refer to any agent of their choice (in any company).</p>
                                                        <p>We believe in being available for you ALWAYS.  We don't believe in complicated website information, online forms, or answering machines.  We believe
                                                        in the personal touch.  One phone call can answer all of your questions...... Call us.  We answer our phone and our office is ALWAYS OPEN.  We email you the specific forms
                                                        that fit your situation..... you sign the forms and send them back with your payment and you are immediately transferred.</p>
                                                        <p>Whether you are looking for a place to hang your license for safe keeping or to earn a little money with friends, family and past clients, New Jersey Referral Agents is 
                                                        clearly the choice!</p>
                                                        <div className="Benefits">
                                                            <p>BENEFITS</p>
                                                            <p> $75/80%.  OUR YEARLY FEE IS ONLY $75. YOUR SPLIT ON AN REFERRALS IS 80%.  sEE THE POTENTIAL EARNING EXAMPLE ON THS PAGE</p>
                                                            <li>AFTER YOU HAVE CLOSED ON JUST 1 REFERRAL, YOUR COMPANY FEE FOR THE FOLLOWINGYEAR IS WAIVED</li>
                                                            <li>YOU ARE PAID IMMEDIATELY ONCE THE CLOSING CHECK ARRIVES.  NO LONG WAITING PERIOD</li>
                                                            <li>YOU ARE FREE TO CHOOSE ANY FULL SERVICE AGENT FROM ANY COMPANY TO SERVICE YOUR REFFERALS.</li>
                                                            <li>YOU CAN ALWAYS GO BACK TO BEING A "FULL SERVICE AGENT" IN THE FUTURE.</li>
                                                            <li>SIMPLICITY - IT's VERY EASY TO JOIN.  WE ARE HERE 24/7 TO EXPLAIN OR ANSWER ANY OF YOUR QUESTIONS.  YOU WILL HAVE FULL ACCESS
                                                            TO THE BROKER AT ALL TIMES. CALL HOW AND FIND OUT FOR YOURSELF 732-842-4484</li>
                                                            <li>YOU WILL BE A MEMBER OF A HIGHLY RECOGNIZED REFERRAL COMPANY WITH A GREAT REPUTATION</li>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td style={{width:"50%"}}>
                                        <table className="RightPanel">
                                            <tbody>
                                                <tr style={{height:"50%"}}>
                                                    <td>
                                                        <table className="ExtraPanel">                                                        
                                                            <tbody>                                                            
                                                                <tr>
                                                                    <td>
                                                                    <img alt="peekingMan" src ={PeekingMan} style={{position:"absolute", right:"59%", bottom:"39%"}}/>
                                                                    <div className="EarningExample">
                                                                    <h1>Potential Earning Example:</h1>
                                                                            <h2>Sales Price $350,000</h2>
                                                                            <h2>Commission to full Service company 3%: $10,5000</h2>
                                                                            <h2>NJRA receives 25%: $2625</h2>
                                                                            <h2>Your Commission 80% = $2,100</h2>
                                                                            <img alt='womansitting' src={WomanSitting} style={{position:"absolute", top:"45%", left:"33%"}}/>
                                                                    </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="FacebookBar">
                                                                            <a href="http://www.facebook.com/NJRAgents">
                                                                            <img alt='facebook' src={LikeOnFacebook} style={{position:"absolute", bottom:"180px", left:"5%"}}/>
                                                                            </a>
                                                                            
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <div className="Links">
                                                                        <div className="LinkList">
                                                                                <li>REFFERAL AGENTS SALESPEOPLE<br/>Want to become a member? Click the button to find out how</li>
                                                                                <li>BROKERS "IT's FREE"<br/>Interested in our Broker Parnership Program? Click the icon to find out how beneficial it is for you and your agents.</li>
                                                                                <li>NEW JERSEY REAL ESTATE COMMISION<br/>Visit their website for licensing information</li>
                                                                        </div>
                                                                    </div>
                                                                    <div className="YellowButtons">
                                                                        <a href="http://newjerseyreferralagents.eversandrealtygroup.com/agents.html"><img alt="ylwbtn" src={YellowButton}/></a><br/><br/><br/><br/><br/><br/>
                                                                        <a href="http://newjerseyreferralagents.eversandrealtygroup.com/BrokerProgram.html"><img alt="ylwbtn" src={YellowButton}/></a><br/><br/><br/><br/><br/><br/><br/>
                                                                        <a href="https://www.state.nj.us/dobi/division_rec/index.htm"><img alt="ylwbtn" src={YellowButton}/></a>
                                                                    </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr style={{height:"50%"}}>
                                                    <td>
                                                    <table className="Qualify">
                                                        <tbody>
                                                            <tr><td>
                                                                <h1>If you anwer "YES" to any of these questions, you should call us NOW!</h1>
                                                                <ol>
                                                                    <li>Do you have another full/part time job because Real Estate just isn't paying the bills?</li>
                                                                    <li> Are you striggling to pay your yearly NAR, NJAR, MLS, E&O Insurance?</li>
                                                                    <li>Do you want to avoid the cost and time consuming CONTINUES EDUCATION now required?</li>
                                                                    <li>Do you want to still make money with your Real Estate License, without doing the leg work?</li>
                                                                    <li>Would you like to keep your license safe from expiring soyou can use it in your future years?</li>
                                                                    <li>Are you currently a "Referral Agent" with another Referral Company who's dues are higher, splits are smaller and assistance when you call them is poor?</li>
                                                                </ol>
                                                            <p>Our agents LOVE US! They all say that the level of support and service we give them is like nothing they have received elsewhere!</p>
                                                            <p>CALL NOW, WE ARE ALWAYS HERE TO ANSWER YOUR QUESTIONS! 732-842-4484</p>
                                                            </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Home;