import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (

    <div>
        <div className='homepage'>
            {(user.email !=='') ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>
            ) : (
                <LoginForm />
            )}
        </div>
    </div>
        );
            }

<div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='collapse nav-collapse'>
            <ul className='nav-bar mr-auto'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>Small Business Helper</Link>
                <Link to='/budgets'>Budget Tracking</Link>
              </li>
            </ul>
          </div>
        </nav>

      </div>

export default HomePage;