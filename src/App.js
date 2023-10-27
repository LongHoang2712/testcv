import logo from './logo.svg';
import './App.css';
import style from './styles/global.css'
import logo1 from './assets/images/logo-trai.png'
import circle from './assets/images/circle.png'
import nucuoi from './assets/images/nucuoi.png'
import gg from './assets/images/google.png'
import bnb from './assets/images/airbnb.png'
import amz from './assets/images/amazon.png'
import mk from './assets/images/market.png'
import shopi from './assets/images/shopi.png'
import phongtrang from './assets/images/phongtrang.png'
import matso1 from './assets/images/matso1.png'
import matso2 from './assets/images/matso2.png'
import matso3 from './assets/images/matso3.png'
import matso4 from './assets/images/matso4.png'
import matso5 from './assets/images/matso5.png'
import ngoisao from './assets/images/ngoisao.png'
import tronduoi from './assets/images/tronduoi.png'
import play from './assets/images/play.png'
import lucas from './assets/images/lucas.png'
import redesign from './assets/images/redesign.png'
import anhkhung2 from './assets/images/anhkhung2.png'
import anhkhung3 from './assets/images/anhkhung3.png'
import anhkhung4 from './assets/images/anhkhung4.png'
import anh1 from './assets/images/anh1.png'
import anh2 from './assets/images/anh2.png'
import anh3 from './assets/images/anh3.png'
import anh4 from './assets/images/anh4.png'
import anh5 from './assets/images/anh5.png'
import phay1 from './assets/images/phay1.png'
import phay2 from './assets/images/phay2.png'
import chamtren from './assets/images/chamtren.png'
import chamduoi from './assets/images/chamduoi.png'
import icon1 from './assets/images/icon1.png'
import icon2 from './assets/images/icon2.png'
import icon3 from './assets/images/icon3.png'
import icon4 from './assets/images/icon4.png'
import logofot from './assets/images/logogot.png'
import ins from './assets/images/ins.png'
import ke from './assets/images/ke.png'
import kc from './assets/images/kc.png'
import xd from './assets/images/xd.png'
import fg from './assets/images/fig.png'

function App() {
  return (
    <div className="App" >
      {/* //side-bar */}
      <div style={{ padding: "20px" }} >
        <ul class="nav">
          <div class="col-4">
            <li class="nav-item col-4">
              <img style={{ height: "38px", width: "94px", marginLeft: "100px" }} src={logo1}></img>
            </li>
          </div>
          <div class="col-4" style={{ display: "flex" }}>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home </a>
            </li>
            <li class="nav-item" style={{ marginLeft: '10px' }}>
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item" style={{ marginLeft: '10px' }}>
              <a class="nav-link" href="#">Service</a>
            </li>
            <li class="nav-item" style={{ marginLeft: '10px' }}>
              <a class="nav-link" href="#">Products</a>
            </li>
          </div>
          <div class="col-4" ></div>
        </ul>
      </div>
      {/* //end-side-bar */}
      <div >
        <div className='chamden'><img  style={{marginTop:'8px',width:'38px',height:'38px'}} src={kc}></img>
      </div>
      <div >
        <div className='chamdo'><img  style={{marginTop:'11px',width:'45px',height:'45px'}} src={xd}></img></div>
      </div>
      <div >
        <div className='chamden2'><img  style={{marginTop:'8px',width:'68px',height:'68px'}} src={fg}></img></div>
      </div>
        <div class="row" style={{ padding: "100px" }}>
          <div class="col-7" style={{ float: "left", textAlign: "left" }}>
            <div className='product' >
              <p>We Design Impactful</p>
              <div class="row">
                <div class="col-3"><p>Digital</p></div>

                <div class="col-5" style={{ marginLeft: '20px' }}>
                  <div style={{ width: "374px", height: "200px", marginTop: "-100px" }} >
                    <img style={{ width: "28px", height: "28px", marginBottom: "-89px", marginLeft: "-10px" }} src={circle}></img>
                    <img style={{ width: "28px", height: "28px", marginBottom: "-89px", marginLeft: "318px" }} src={circle}></img>

                    <p style={{ border: "8px #706FE5 solid", width: "355px", textAlign: "center", color: "#706FE5" }}>Product </p>
                    <img style={{ width: "28px", height: "28px", marginTop: "-135px", marginLeft: "-10px" }} src={circle}></img>
                    <img style={{ width: "28px", height: "28px", marginTop: "-135px", marginLeft: "318px" }} src={circle}></img>
                  </div>
                </div>
                <div class="col-4"></div>
              </div>

            </div>
            <div>
              <p>Help find solutions with intitutive and in accordance</p>
              <p>with client business goals. we provide a high-quality</p>
              <p> services.</p>
            </div>

            <div style={{ display: "flex" }} >
              <div><button class="btn btn-primary" style={{ backgroundColor: "#706FE5", width: '181px', height: '47px', borderRadius: '12px' }} >Contact us</button></div>
              <div style={{ display: "flex", marginLeft: '30px' }} >
                <img style={{ width: '48px', height: '48px' }} src={play}></img>
                <div style={{marginTop:'5px',marginLeft:'10px',fontSize:'16px',lineHeight:'16px'}}>
                  <p>Watch our</p>
                  <p style={{ marginTop: "-10px" }}>introduction video</p>
                </div>
              </div>

            </div>
          </div>
          <div class="col-5" >
            <div style={{ border: "10px #706FE5 solid ", borderRadius: "50%", width: "409px", height: "409px", zIndex: 2, marginTop: "60px" }}>
              <div style={{ borderRadius: "50%", backgroundColor: "#706FE5", width: "397px", height: "397px", opacity: "10%", zIndex: 1 }}>

              </div>
              <img style={{ zIndex: 1, marginTop: "-580px", marginLeft: "-60px", width: "535px", height: "535px" }} src={nucuoi}></img>

              <div class="card-body" style={{ marginTop: "-100px" }}  >
                <div className='bangtrang'  >
                  <div style={{ display: 'flex', marginLeft: '10px' }}>
                    <img src={matso1} ></img>
                    <img src={matso2} className='anhavt'></img>
                    <img src={matso3} className='anhavt'></img>
                    <img src={matso4} className='anhavt'></img>
                  </div>
                  <div><p className='employee'> 120+ Employees</p></div>

                  <div style={{ display: 'flex', marginLeft: '10px', marginTop: '-10px' }}>
                    <img src={ngoisao} style={{ width: '26x', height: '26px' }}></img>
                    <p>5.0 (3.1K Reviews)</p>
                  </div>
                </div>
              </div>
              <div className='tronduoi'>
                <img src={tronduoi}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //end-1 */}
      <div style={{ padding: "50px", backgroundColor: '#706FE505' }}>
        <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", textTransform: 'capitalize' }}>Trusted by greatest companies</div>
        <div>
          <div class="col-2" ></div>
          <img class="col-2" src={gg} style={{ width: "109px", height: "36px", margin: "40px" }}></img>
          <img class="col-2" src={bnb} style={{ width: "116px", height: "36px", margin: "40px" }}></img>
          <img class="col-2" src={mk} style={{ width: "110px", height: "42px", margin: "40px" }}></img>
          <img class="col-2" src={shopi} style={{ width: "126px", height: "36px", margin: "40px" }}></img>
          <img class="col-2" src={amz} style={{ width: "118px", height: "35px", margin: "40px", marginTop: '50px' }}></img>
          <div class="col-2"></div>
        </div>
      </div>
      {/* //end-2 */}
      <div style={{ padding: "100px" }}>
        <div>
          <p className='title1'>we create world-class digital products</p>
          <p className='title2'>By information about design the world to the best instructors, heatc helping By information</p>
        </div>
        <div style={{ display: 'flex' }}>
          <div class='col-6'>
            <div >
              <img style={{ borderRadius: '30px', width: '555px', height: '448px' }} src={redesign}></img>
            </div>
            <div>
              <p className='chukhungtotren'>App Design - June 20,2022</p>
              <p className='chukhungto'>App Redesign</p>
              <p className='chukhungtoduoi'>By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</p>
            </div>
          </div>
          <div class='col-6' >
            <div class='row'>
              <div class='col-6' >
                <img style={{ borderRadius: '30px' }} src={lucas}></img>
                <p className='chukhungopa'> App Design - June 20, 2022</p>
                <p className='chukhung4'> Redesign channel website landng page</p>
              </div>
              <div class='col-6' style={{ marginLeft: '-50px' }}>
                <img style={{ borderRadius: '30px' }} src={anhkhung2}></img>
                <p className='chukhungopa'> App Design - June 20, 2022</p>
                <p className='chukhung4'> New Locator App For
                  a New Company</p>
              </div>
            </div>
            <div class='row'>
              <div class='col-6' >
                <img style={{ borderRadius: '30px' }} src={anhkhung3}></img>
                <p className='chukhungopa'> App Design - June 20, 2022</p>
                <p className='chukhung4'> Rental Rooms Web
                  App Platform
                </p>
              </div>
              <div class='col-6' style={{ marginLeft: '-50px' }}>
                <img style={{ borderRadius: '30px' }} src={anhkhung4}></img>
                <p className='chukhungopa'> App Design - June 20, 2022</p>
                <p className='chukhung4'> Calendar App for Big
                  SASS Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //end-2 */}
      <div style={{paddingTop: "50px",paddingBottom: "50px", paddingRight: "100px",paddingLeft: "100px", backgroundColor: '#706FE505' }}>
        <img className='chamtren' src={chamtren}></img>
        <div>

          <span style={{ textAlign: 'center', display: 'inline-block' }}>
            <p className='title3'>Let’s hear</p>
            <p className='title3'>What they says</p>
          </span>
        </div>
        <div style={{ marginTop: '50px' }}>
          <img style={{ marginTop: '-320px', marginRight: '40px' }} src={phay1}></img>
          <span style={{ textAlign: 'center', display: 'inline-block' }}>

            <p className='chuhear'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt
              fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

          </span>
          <img style={{ marginTop: '-320px', marginLeft: '40px' }} src={phay2}></img>
        </div>
        <div style={{marginTop:'-50px'}}>
          <span style={{ textAlign: 'center', display: 'inline-block' }}>
            <div style={{ display: 'flex', marginTop: '90px', marginBottom: '20px' }}>
              <img src={anh1} style={{ width: '50px', height: '50px', marginTop: '15px' }}></img>
              <img src={anh2} style={{ width: '67px', height: '67px', marginLeft: '70px', marginTop: '5px' }}></img>
              <div >

                <img src={anh3} style={{ width: '86px', height: '86px', marginLeft: '60px' }}></img>
                <div style={{ border: "4px #706FE5 solid ", borderRadius: "50%", width: "100px", height: "100px", zIndex: 3, marginLeft: '60px', marginTop: '-94px' }}>
                  <div style={{ borderRadius: "50%", backgroundColor: "#706FE5", width: "90px", height: "90px", opacity: "10%", zIndex: 2 }}>

                  </div>
                </div>
              </div>
              <img src={anh4} style={{ width: '67px', height: '67px', marginLeft: '60px', marginTop: '5px' }}></img>
              <img src={anh5} style={{ width: '50px', height: '50px', marginLeft: '70px', marginTop: '15px' }}></img>
            </div>
          </span>
        </div>


        <p className='rickky'>Ricky Aprilia</p>
        <p className='duoirickky'>Founder of Varibo</p>
        <img className='chamduoi' src={chamtren}></img>
      </div>
      {/* //end-2 */}
      <div style={{ padding: "100px" }}>
        <div style={{ display: 'flex' }} >
          <div class='col-6' style={{ paddingLeft: '60px' }} >
            <p className='how'>How We Can Help You</p>
            <p className='newlet'>Follow our newsletter. We will regulary update our latest project and availability.</p>

            <span class="input-group flex-nowrap" style={{ backgroundColor: "#ececec", height: '60px', width: '440px', borderRadius: '15px' }}>
              <input style={{ paddingLeft: '50px', width: '281px', borderRadius: '15px' }} type="text" class="inputne" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
              <button className='bt' style={{ borderRadius: '10px' }} type="button" id="button-addon2">Subcribe</button>
            </span>
          </div>
          <div class='col-6'>
            <div style={{ display: 'flex' }} >
              <div class='col-6'>
                <img className='anhne' src={icon1}></img>
                <p className='chukhung5'>UI/UX Design</p>
                <p className='chukhungtoduoi5'>Sometimes features require
                  a short description</p>
              </div>
              <div class='col-6'>
                <img className='anhne' src={icon2}></img>
                <p className='chukhung5'>logo branding</p>
                <p className='chukhungtoduoi5'>Sometimes features require
                  a short description</p>
              </div>
            </div>
            <div style={{ display: 'flex' }} >
              <div class='col-6'>
                <img className='anhne' style={{ width: "58px", height: "58px" }} src={icon3}></img>

                <p className='chukhung5'>app design</p>
                <p className='chukhungtoduoi5'>Sometimes features require
                  a short description</p>
              </div>
              <div class='col-6'>
                <img className='anhne' src={icon4}></img>
                <p className='chukhung5'>websitie design</p>
                <p className='chukhungtoduoi5'>Sometimes features require
                  a short description</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* //end-3 */}
      <div className='footer'>
        <div style={{display:'flex'}}>
          <div class='col-6' style={{textAlign:'left'}}><img src={logofot}></img></div>
          <div class='col-6' style={{textAlign:'right'}}>
            <button className='iconft'><i class="fa-brands fa-instagram" style={{color:"#ffffff"}}></i></button>
            <button className='iconft'><i class="fa-brands fa-facebook" style={{color:"#ffffff"}}></i></button>
            <button className='iconft'><i class="fa-brands fa-twitter" style={{color:"#ffffff"}}></i></button>
            <button className='iconft'><i class="fa-brands fa-github" style={{color:"#ffffff"}}></i></button>
            <button className='iconft'><i class="fa-brands fa-instagram" style={{color:"#ffffff"}}></i></button>
          </div>
        </div>
        <img src={ke} style={{width:'1300px',marginTop:'20px'}}></img>
        <div><p style={{color:'white',textAlign:'left',fontWeight:'bold',marginTop:'50px'}}>Company</p></div>
        <div style={{display:'flex'}}>
          <div class='col-9' style={{display:'flex'}}>
          <p class='col-1' style={{color:'white',fontSize:'14px',lineHeight:'20px',opacity:'75%'}}>About Us</p>
          <p class='col-1' ></p>
          <p class='col-1' className='textft'>Press</p>
          <p class='col-1' ></p>
          <p class='col-1' className='textft'>Investors</p>
          <p class='col-1' ></p>
          <p class='col-1' className='textft'>Event</p>
          <p class='col-1' ></p>
          <p class='col-1' className='textft'>Terms of use</p>
          <p class='col-1' ></p>
          <p class='col-1' className='textft'>Privacy policy</p>
          </div>
          <div class='col-3' style={{textAlign:'right'}}>
          <button className='bt' style={{ borderRadius: '10px' , width:'181px' }} type="button" id="button-addon2">Contact Us</button>
          </div>
        </div>
        <div><p style={{color:'white',marginTop:'50px'}}>© power 2021 - All Rights Reserved</p></div>
      </div>
    </div>
  );
}

export default App;
