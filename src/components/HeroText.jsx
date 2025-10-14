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
            {/* Mobile view - Enhanced without 3D model */}
            <div className="flex flex-col items-center justify-center space-y-8 md:hidden min-h-screen px-4 relative z-10"
            style={{
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
                background: "rgba(3, 4, 18, 0.4)", // Semi-transparent overlay to enhance text readability
                backdropFilter: "blur(2px)"
            }}>
                <motion.p
                    className="text-xl font-black text-center"
                    style={{
                        color: "#ffdba5",
                        fontSize: "20px",
                        fontFamily: "Serif",
                        lineHeight: "1.2",
                        fontWeight: "900",
                        textShadow: "0 0 10px rgba(255, 219, 165, 0.3)"
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ delay: 0.5 }}
                >
                    /* ..Hi, I'm Yashashvi..*/
                </motion.p>
                
                <div className="text-center space-y-6">
                    <motion.p
                        className="text-4xl font-black leading-tight"
                        style={{ 
                            color: "#FFFFFF",
                            fontWeight: "900",
                            textShadow: "0 0 15px rgba(255, 255, 255, 0.3)"
                        }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 0.8 }}
                    >
                        A Developer<br/>committed to building
                    </motion.p>
                    
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 1.1 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-black text-6xl"
                            style={{ 
                                color: "#33c2cc",
                                fontWeight: "900",
                                textShadow: "0 0 20px rgba(51, 194, 204, 0.4)"
                            }}
                        />
                    </motion.div>
                    
                    <motion.p
                        className="text-3xl font-black"
                        style={{ 
                            color: "#E0E0E0",
                            fontWeight: "900",
                            textShadow: "0 0 12px rgba(224, 224, 224, 0.3)"
                        }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 1.4 }}
                    >
                        Digital Solutions
                    </motion.p>
                    
                    <motion.p
                        className="text-sm leading-relaxed text-center max-w-sm mx-auto mt-8"
                        style={{
                            color: "#ffdba5",
                            fontSize: "15px",
                            fontFamily: "Serif",
                            lineHeight: "1.4",
                            fontWeight: "600",
                            textShadow: "0 0 8px rgba(255, 219, 165, 0.2)"
                        }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 1.7 }}
                    >
                        "I have brought clean responsive design,<br/>
                        robust APIs, code reviews,<br/>
                        and browser compatibility<br/>
                        to my new empire." -- "Anakin"<br/>
                        <span style={{ fontSize: "12px", opacity: 0.8 }}>[Revenge of the Sith]</span>
                    </motion.p>
                    
                    {/* Mobile CTA Button */}
                    <motion.div
                        className="mt-8"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 2.0 }}
                    >
                        <button
                            onClick={() => {
                                document.getElementById('about')?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                            className="px-8 py-3 bg-gradient-to-r from-aqua/40 to-mint/40 border-2 border-aqua/60 rounded-full text-white font-black hover:border-mint/80 transition-all duration-300 shadow-lg shadow-aqua/30"
                            style={{
                                fontWeight: "900",
                                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                                backdropFilter: "blur(10px)"
                            }}
                        >
                            Explore My Work ⚡
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
export default HeroText;
