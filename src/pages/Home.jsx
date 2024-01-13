import React from 'react'
import img2 from '../assets/img 2.jpg'
import { Link } from 'react-router-dom'


const Home = () => {

  document.title = 'Home || Page'
  return (
    <main className="container pt-5">
      <div className='row justify-content-between align-items-center pb-4'>
        <div className='col-sm-12 col-md-4'><img src={img2} alt="Heroimage" className='img-fluid img-thumbnail rounded'/></div>
        <div className='col-sm-12 col-md-6 '><h2>Improve Productivity by Managing  <span className='text-primary'>Your Users</span></h2>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut, voluptas, laboriosam maiores molestiae eaque iste et exercitationem maxime modi minima ratione expedita distinctio quasi dicta error quam nobis! Consequuntur deleniti ab sunt earum, quibusdam amet. Voluptate quas quibusdam tempore fugit, porro facere deserunt assumenda incidunt vitae iusto, ratione doloribus earum culpa molestias nulla nesciunt, perferendis voluptatem reiciendis. Commodi, deleniti ullam? Numquam nostrum maxime ratione iste! Neque nam eius repudiandae vero voluptatem consequuntur inventore ratione alias, accusantium aut mollitia nobis at! Quidem ad provident fugiat necessitatibus dicta perferendis temporibus nulla, cumque placeat aliquid accusantium! Consequatur unde iure ipsum totam non.</p>
        <div className="d-flex gap-3">
        <button className="btn btn-primary btn-lg my-2"><Link to='/NewUser' className='text-dark text-decoration-none'>+ New Users</Link></button>
        <button className="btn btn-primary btn-lg my-2"><Link to='/AllUser' className='text-dark text-decoration-none'>All Users</Link></button>
        </div>
        </div>
        
      </div>
    </main>
  )
}

export default Home