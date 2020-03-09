import Header from './Header'

const layoutStyle = {
  height: '100vh',
  width: '100vw',
}

const Layout = props => (
  <div className='mainWrapper' style={layoutStyle}>
    <Header />
    <div className='content'>
      {props.children}
    </div>
    <footer>
      <p>E-mail: <a href='mailto:marketing@vallar.in'>marketing[at]vallar.in</a></p>
    </footer>
    <style global jsx>{`
        body {
          // border: 1px solid green;
          width: 100vw;
          margin: 0px;
          padding: 0px;
          background-color: #000;
        }
        .mainWrapper {
          background: url('./logo.png') center no-repeat;
          // border: '1px solid red',
        }
        footer {
          color: #fff;
          text-align: center;
          font-size: small;
          position: absolute;
          bottom: 0px;
          width: 100vw;
          box-sizing: border-box;
        }
        footer a {

        }
        .content {
          width: 95vw;
          box-sizing: border-box;
          // margin-left: 25vw;
          // border: 1px solid gray;
          color: #fff;
          padding: 1vw;
          margin: 1vw;
        }
        .content h1 {
          color: #EB8A00;
        }
        footer a,
        .content a {
          color: #EB8A00;
          letter-spacing: 1px;
        }
        .content a:hover {
          color: #EB8A00;
          text-decoration: underline #fff;
        }
      `}
    </style>
  </div >
)

export default Layout
