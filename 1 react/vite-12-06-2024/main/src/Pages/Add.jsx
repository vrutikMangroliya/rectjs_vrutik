import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    email: '',
    proffesion: '',
    age: '',
    number: '',
    image: null
  })

  console.log(user);

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  // const loadDataUser = (e) => {
  //   e.preventDefault()
  //   const res = axios.get('http://localhost:3000/users')
  //   .then((res) => {
  //     setUser(res.data)
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }

  const loadDataUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/users', user)
      .then(() => {
        navigate('/')
      })
  }

  return (
    <div>
      <section className="rounded-md bg-black/70 p-2">
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-8   lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2">
              <FaUserCircle className='text-4xl' />
            </div>
            <h2 className="text-2xl font-bold leading-tight text-black">Add User Form</h2>
            <form className="mt-4" onSubmit={loadDataUser}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    User{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="UserName"
                      onChange={(e) => setUser({ ...user, username: e.target.value })}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Proffesion{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Proffesion"
                      onChange={(e) => setUser({ ...user, proffesion: e.target.value })}
                    ></input>
                  </div>
                </div>
                <div className='flex space-x-4'>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Age{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="number"
                        placeholder="Age"
                        onChange={(e) => setUser({ ...user, age: e.target.value })}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        MobileNo{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="tel"
                        placeholder="Mobile No"
                        onChange={(e) => setUser({ ...user, number: e.target.value })}
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Add Image{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      onChange={handleImageChange}
                    ></input>
                  </div>
                </div>
                <div className='flex space-x-6'>
                  <NavLink to="/">
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 whitespace-nowrap"
                    >
                      <ArrowLeft className="me-4" size={16} /> Go Back
                    </button>
                  </NavLink>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add User <ArrowRight className="ml-4" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Add