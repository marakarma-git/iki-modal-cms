import React from 'react'

const Login = () => {
  return (
    <div className='d-flex justify-content-center mt-5'>
        <div className='col-lg-6'>
        <form className=''>
            <div className='form-group row mb-3'>
                <label className='col-lg-2 form-control-label'>Username</label>
                <div className='col-lg-4'>
                    <input className='form-control' type='text' />
                </div>
            </div>
            <div className='form-group row mb-3'>
                <label className='col-lg-2 form-control-label'>Password</label>
                <div className='col-lg-4'>
                    <input className='form-control' type='password' />
                </div>
            </div>

            <div className=''>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </div>

    </div>
  )
}

export default Login