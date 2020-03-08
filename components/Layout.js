import Header from './Header'

const layoutStyle = {
  height: '100vh',
  width: '100vw'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <div className='content'>
      {props.children}
    </div>
    <style global jsx>{`
        body {
          margin: 0px;
          padding: 0px;
          background-color: #000;
        }
        .content {
          width: 60vw;
          margin-left: 25vw;
          border: 1px solid gray;
          color: #fff;
          padding: 1vw;
        }
      `}
    </style>
  </div>
)

export default Layout
