
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const navigate = useNavigate()

  const {GoogleLogin} = useContext(AuthContext)

  const handleLogin = (media) =>{
    media()
    .then(() => {
      
        navigate('/')
    })
  }
    return (
        <>
        <div className="divider">Conitune With</div>
        <div className="flex justify-between items-center">
          <button onClick={() => handleLogin(GoogleLogin)}
            className="btn btn-ghost"
          >
            <FcGoogle className="text-2xl"></FcGoogle> Google 
          </button>
          
          <button 
          className="btn btn-ghost"><BsGithub className="text-2xl"></BsGithub> Github</button>
        </div>
      </>
    );
};

export default SocialLogin;