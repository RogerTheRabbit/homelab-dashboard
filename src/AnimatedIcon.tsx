import { motion } from "framer-motion";

import Props from "./Icon";
import Icon from "./Icon";

function AnimatedIcon(props: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2, ease: "easeOut" }}>
        <Icon {...props} />
      </motion.div>
    </motion.div>
  );
}

export default AnimatedIcon;
