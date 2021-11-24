import styles from "../pages/footer.module.css"

function footerItem() {
  return (
    <div /* style={{ minHeight: "100vh" , marginTop:"auto" }} */>
      <footer  className={styles.footer} className="bg-dark text-center text-white mt-auto">
        {/* <!-- Section: Form --> */}
        */ {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2021 Copyright:
          {/* <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a> */}
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  )
}

export default footerItem
