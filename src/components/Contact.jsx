import { motion } from "framer-motion"
import { CONTACT } from "../constants"

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="my-10 text-center text-4xl">
                Get in Touch
            </motion.h1>
            <div
                className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="my-4">{CONTACT.phoneNo}</motion.p>
                <motion.p
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1 }}>
                    <a href="#" className="border-b">{CONTACT.email}</a>
                </motion.p>
            </div>
        </div>
    )
}

export default Contact