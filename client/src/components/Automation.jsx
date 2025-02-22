import { motion } from "framer-motion";
import "../style/Automation.css";
import tabletImage from "../assets/tablet.png";

const Automation = () => {
    return (
        <motion.div
            className="herocontainer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="herocontent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h1>AI Automation: Elevating Team Efficiency and Scalability</h1>
                <motion.button
                    className="herobutton"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    Get your Free Guides</motion.button>
            </motion.div>

            <div className="heroimage-wrapper">
                <motion.img
                    src={tabletImage}
                    alt="AI Guide"
                    className="tabletimageone"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                <motion.div
                    className="tablettext tabletone"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <h1>AI-Driven <br /> Automation + <br /> Edge</h1>
                    <p>Performance and <br /> Growth for Digital Teams</p>
                </motion.div>

                <motion.img
                    src={tabletImage}
                    alt="AI Guide"
                    className="tabletimagetwo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                />

                <motion.div
                    className="tablettexttwo tabletwo"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    AI Automation: Making Work Easier
                    AI (Artificial Intelligence) helps people and businesses by doing tasks automatically.<br /> This saves time and makes work faster.

                    How AI Helps
                    Answers questions using chatbots.
                    Sorts data to help with decisions.
                    Handles simple tasks like emails and reminders.
                    Improves machines in factories.
                    Why AI is Useful
                    Saves time AI works fast.
                    Reduces costs Less manual work.
                    Fewer mistakes More accuracy.
                    Works all day No breaks needed.
                </motion.div>

            </div>

        </motion.div>
    );
};

export default Automation;
