import React from 'react'
const Header=()=>{
 return(
     <div>
         <div style={{
        width: '100%',
        height: '92px',
        backgroundColor: '#C4C4C4',
        // padding: '10px',
        top: '0px',
        display: 'flex',
      }}>
        <div style={{
          flex: '1',
          display: 'flex'
        }}>
          <div style={{
            width: '132px',
            height: '55px',
            backgroundColor: '#6F0909',
            marginTop: '27px',
            marginLeft: "22px",
            display:'flex',alignItems:'center'

          }}>
            <div style={{
              width:"34px",height:'18px',marginLeft:'41px',
              fontFamily:'initial',fontSize:"14px",fontWeight:'700',fontStyle:'normal',
            }}>
              
                Logo
              
            </div>
          </div>

          <div style={{
            width: '100px',
            height: '18px',
            marginLeft:'15px',
            marginTop:'44px'

          }}>
            <h3  style={{
              fontFamily:'inter',fontSize:'14px',fontWeight:'700',fontStyle:'normal'
            }}>Brand Name</h3>
          </div>
        </div>

      </div>
     </div>
 )
}
export default Header;