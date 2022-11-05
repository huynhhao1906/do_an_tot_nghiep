import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row1'>
            <i className='fa fa-phone'></i>
            <label> +88012 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> support@ui-lib.com</label>
          </div>
          <div className='right row1 RText'>
            <label>Đăng nhập</label>
            <label>Đăng kí</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
