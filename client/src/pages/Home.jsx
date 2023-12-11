import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'

import { CustomButton } from '../components/CustomButton';

import {
    headContainerAnimation, 
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from '../config/motion'

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            { snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./threejs.png'
                            alt="logo"
                            className='w-8 h-8 object-contain'
                        />
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <h1 className="head-text">
                            3D T Shirt<br className="xl:block hidden"/> Balance ton logo !
                        </h1>
                    </motion.div>
                    <motion.div 
                        {...headContentAnimation}
                        className='flex flex-col gap-5'
                    >
                        <p className="max-w-md font-normal text-gray-600 text-base">
                            Personnaliser votre t-Shirt grace à l'IA
                            <strong>Et d'autres trucs</strong>{" "} puis c'est tout... Il y a rien d'autres à faire ici...
                        </p>
                        <CustomButton
                            type="filled"
                            title="Let's begin !"
                            handleClick={() => state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-blod text-sm"
                        />
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home