import Header from './Header'

const layoutStyle = {
  height: '100vh',
  width: '100vw'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style global jsx>{`
        body {
          margin: 0px;
          padding: 0px;
          background-color: #000;
        }
      `}
    </style>
  </div>
)

export default Layout
