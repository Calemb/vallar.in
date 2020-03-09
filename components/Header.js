import Link from 'next/link'

const linkStyle = {
  // marginRight: 15
}
const logoStyle = {
  // border: '1px solid red',
  padding: '3px',
  marginLeft: '10px',
  height: '10vw',
  minHeight: '70px'
}
const navStyle = {
}
const headerStyle = {
  // border: '1px solid gray',
  display: 'flex',
  textAlign: 'center'
}

const Header = () => (
  <div style={headerStyle}>
    {/* <div className='nav' style={navStyle}>
      <Link href='/about'>
        <a style={linkStyle}>ABOUT</a>
      </Link>
      <Link href='/details'>
        <a style={linkStyle}>Details</a>
      </Link>
    </div> */}
    {/* <img className='logo' src='/logo.png' alt='my image' style={logoStyle} /> */}
    {/* <div className='nav'>
      <Link href='/contact'>
        <a style={linkStyle}>Contact</a>
      </Link>
      <Link href='/showcase'>
        <a style={linkStyle}>showcase</a>
      </Link>
    </div> */}

    <style jsx>{`
    img {
      border: 1px solid red;
      margin: 0px auto;
      display: block;
    }
      .nav{
        flex-grow: 1;
        display: flex;
        align-items: center;
        // border: 1px solid gray;
        justify-content: space-around;
      }
      .nav a{
        color: #fff;
        vertical-align:middle;
        // display: block;
        border: 1px solid gray;
        padding: 10px 20px;
        text-decoration: none;
        // letter-spacing: 0.5em;
        text-transform: uppercase;
      }
      .nav a:hover{
        color: #000000;
        background-color: #EB8A00;
      }     
    `}
    </style>
  </div>
)

export default Header
