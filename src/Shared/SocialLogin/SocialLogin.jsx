import React from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { goggle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        goggle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://notocard-music-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }


    return (
        <div className="mx-auto">
            <div className="divider">Or</div>
            <button onClick={handleGoogleSignIn} className=" btn w-[296px]  bg-[#1ed8f0] hover:bg-[#1bc2d8]"><img className="w-7" src='https://rhythm-fusion-client.web.app/assets/ggg-825b3245.png' alt="" /> Google</button>
        </div>
    );
};

export default SocialLogin;