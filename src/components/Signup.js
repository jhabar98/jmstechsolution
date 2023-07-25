import React from 'react'

function Signup() {
  return (
    <div>
       <div className="modal fade" id="registrationModal" tabindex="-1" aria-labelledby="registrationModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registrationModalLabel">Registration</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label for="nameInput" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
              </div>
              <div className="mb-3">
                <label for="emailInput" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
              </div>
              <div className="mb-3">
                <label for="passwordInput" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
              </div>
              <div className="mb-3">
                <label for="confirmPasswordInput" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPasswordInput"
                  placeholder="Confirm your password"/>
              </div>
              <button type="submit" className="btn btn-primary" onclick="handleRegister()">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
