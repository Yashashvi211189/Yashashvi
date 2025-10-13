import { FlipWords } from "./FlipWords";
import {motion} from "framer-motion";

const HeroText = () => {
    const words= ["Secure", "Modern", "Scalable"];
    const variants= {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
};
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
        style={{
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none"
            }}
        >
            {/* desktop view */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1
                    className="text-4xl  font-extrabold"
                    style={{
                        color: "#ffdba5",
                        fontSize: "20px , cursive",
                        fontFamily: "Serif",
                        lineHeight: "0.8",
                        }}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ delay: 1 }}
                >
                /* .    . Hi, I'm Yashashvi .     .*/
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className="text-5xl font-extrabold"
                        style={{ color: "#FFFFFF" }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 1.3 }}
                    >
                        A Developer <br /> committed to building
                    </motion.p>
                    <motion.div>
                        <FlipWords
                            words={words}
                            className="font-black text-8xl"
                            style={{
                                fontFamily: 'Serif',
                                color: '#ffdba5', 
                                }} 
                        />
                    </motion.div>
                    <motion.p
                        className="text-4xl font-extrabold"
                        style={{ color: "#E0E0E0" }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 1.6 }}
                    >
                        Digital Solutions
                    </motion.p>
                    <motion.p
                    className="text-2xl font-extrabold"
                    style={{
                        color: "#ffdba5",
                        fontSize: "14px , cursive",
                        fontFamily: "Serif",
                        lineHeight: "0.8",
                        }}
                    >
                    "I have brought clean responsive design, <br/>
                    robust APIs, code reviews,<br/>
                    and browser compatibility <br/>
                    to my new empire." -- "Anakin"<br/>
                        [Revenge of the Sith]
                    </motion.p>
                </div>
            </div>
            {/* mobile view */}
            <div className="flex flex-col space-y-6 md:hidden"
            style={{
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none"
            }}>
                <motion.p
                    className="text-3xl font-extrabold color: #ffdba5"
                    style={{
                    color: "#ffdba5",
                    fontSize: "15px , cursive",
                    fontFamily: "Serif",
                    lineHeight: "0.8",}}
                >
                /* ..Hi, I'm Yashashvi..*/
                </motion.p>
                <div>
                    <motion.p
                        className="text-3xl font-bold"
                        style={{ color: "#FFFFFF" }}
                    >
                        A Developer <br/>committed to building
                    </motion.p>
                    <motion.div>
                        <FlipWords
                            words={words}
                            className="font-black text-5xl"
                            style={{ color: "#00FFFF" }} 
                        />
                    </motion.div>
                    <motion.p
                        className="text-2xl font-bold"
                        style={{ color: "#E0E0E0" }}
                    >
                        Digital Solutions
                    </motion.p>
                    <motion.p
                    className="text-1xl font-Serif"
                    style={{
                        color: "#ffdba5",
                        fontSize: "10px , cursive",
                        fontFamily: "Serif",
                        lineHeight: "0.8",
                        }}
                    >
                    "I have brought clean responsive design, <br/>
                    robust APIs, code reviews,<br/>
                    and browser compatibility <br/>
                    to my new empire." -- "Anakin"<br/>
                        [Revenge of the Sith]
                    </motion.p>
                    
                </div>
            </div>
        </div>
    );
}
export default HeroText;
