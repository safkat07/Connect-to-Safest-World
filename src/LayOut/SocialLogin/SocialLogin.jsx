
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <>
        <div className="divider">Conitune With</div>
        <div className="flex justify-between">
          <button
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