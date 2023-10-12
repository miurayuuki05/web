import { Raleway } from "next/font/google"
import Image from "next/image";
import strapImg from '/app/resource/strapimg.jpg'
import expressImg from '/app/resource/expressimg.jpg'
import reactImg from '/app/resource/reactjsimg.jpg'
import nodeImg from '/app/resource/nodejsimg.png'
import laravelImg from '/app/resource/laravelimg.jpg'
import mongodbImg from '/app/resource/mongodbimg.jpg'
import flutterImg from '/app/resource/flutterImg.jpg'
import ionicImg from '/app/resource/ionicImg.jpg'
import nextjsImg from '/app/resource/nextjsImg.png'
import reactnatImg from '/app/resource/reactnatImg.png'
import dockerImg from '/app/resource/dockerImg.png'
import mysqlimg from '/app/resource/mysqlimg.jpg'
import firebaseimg from '/app/resource/firebaseimg.png'
import awsimg from '/app/resource/awsimg.jpg'
import { motion } from "framer-motion";


const raleway = Raleway({weight:"800", subsets: ['latin']});

export default function Skills(){
    return (
        <div className={"text-center mb-20 " +raleway.className}>
            <div className="mb-24 mt-28">
                <p className="text-3xl">SKILLS</p>
            </div>
            <div className="w-[100%]">
                <ul className="flex flex-wrap gap-10 justify-center">
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:0.4}}>   <a target="_blank" href="https://strapi.io/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={strapImg} alt="skills"/>    </a> <p>STRAPI</p>       </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:0.6}}> <a target="_blank" href="https://expressjs.com/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={expressImg} alt="skills"/>  </a> <p>EXPRESS</p>      </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:0.8}}> <a target="_blank" href="https://react.dev/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={reactImg} alt="skills"/>    </a> <p>REACTJS</p>      </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:1}}> <a target="_blank" href="https://nodejs.org/en"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={nodeImg} alt="skills" />    </a> <p>NODEJS</p>       </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:1.2}}> <a target="_blank" href="https://laravel.com/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={laravelImg} alt="skills"/>  </a> <p>LARAVEL</p>      </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:1.4}}>   <a target="_blank" href="https://www.mongodb.com/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={mongodbImg} alt="skills"/>  </a> <p>MONGODB</p>      </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:1.6}}> <a target="_blank" href="https://flutter.dev/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={flutterImg} alt="skills"/>  </a> <p>FLUTTER</p>      </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:1.8}}> <a target="_blank" href="https://ionicframework.com/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={ionicImg} alt="skills"/>    </a> <p>IONIC</p>        </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:2}}> <a target="_blank" href="https://nextjs.org/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={nextjsImg} alt="skills"/>   </a> <p>NEXTJS</p>       </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:2.2}}> <a target="_blank" href="https://reactnative.dev/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={reactnatImg} alt="skills"/> </a> <p>REACT NATIVE</p> </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:2.4}}>   <a target="_blank" href="https://www.docker.com/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={dockerImg} alt="skills"/>   </a> <p>DOCKER</p>       </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:2.6}}> <a target="_blank" href="https://www.mysql.com/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={mysqlimg} alt="skills"/>    </a> <p>MYSQL</p>        </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:2.8}}> <a target="_blank" href="https://firebase.google.com/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={firebaseimg} alt="skills"/> </a> <p>FIREBASE</p>     </motion.li>
                    <motion.li initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once: true}} transition={{delay:3}}> <a target="_blank" href="https://aws.amazon.com/"><Image className="hover:scale-125 duration-200 w-36 h-36 object-cover" src={awsimg} alt="skills"/>      </a> <p>AWS</p>          </motion.li>

                </ul>
            </div>
        </div>
    )
}