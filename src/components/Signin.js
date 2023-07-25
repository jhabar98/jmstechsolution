import React from 'react'

function Signin() {
  return (
    <div>
       <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label for="nameInput" className="form-label">Name</label>
                <input type="text" className="form-control" id="nameInput" placeholder="Enter your name"/>
              </div>
              <div className="mb-3">
                <label for="emailInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailInput" placeholder="Enter your email"/>
              </div>
               {/* <div className="mb-3">
                <label for="password" className="form-label">password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
              </div>  */}
              <div className="mb-3">
                <label for="Mobile" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="numberinput" placeholder="Enter your Number"/>
              </div>
              <div className="mb-3">
                <label for="address" className="form-label">address</label>
                <input type="addess" className="form-control" id="passwordinput" placeholder="Enter your address"/>
              </div>


              <button type="submit" className="btn btn-primary" onclick="handleLogin()">login</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}


export default Signin
