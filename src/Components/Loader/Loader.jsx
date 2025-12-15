import Lottie from 'lottie-react';
import loader from '../../assets/lottie/Blood-loader.json'

const Loader = () => {
     return (
          <div className='min-h-[calc(100vh-100px)] flex justify-center items-center'>
               <Lottie animationData={loader} className='w-32 border-4 border-red-500 rounded-full'></Lottie>
          </div>
     );
};

export default Loader;