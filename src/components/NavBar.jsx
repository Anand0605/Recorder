import '../css/Nav.css'
import Github from '../images/github.png'
import { AiFillGithub, } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
export default function NavBar() {
    return <>
        <div className="nav">
            <div className="nav-left">
                <h3>𝓡𝓔𝓒𝓞𝓡𝓓𝓔𝓡</h3>
            </div>
            <div className="nav-right">
                <div className="social">
                    <ul>
                        <a href="https://github.com/Anand0605"><li><FaGithubSquare className='github' /></li></a>
                        <Link to="https://www.linkedin.com/in/anand-kumar-gautam-733586207/"><li><BsLinkedin className='linkdin' /></li></Link>
                        <li><FaTwitterSquare className='twiter' /></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}