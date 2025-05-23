import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export const AnimatedCrown = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ 
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className="text-amber-400"
    >
      <Crown className="h-8 w-8" />
    </motion.div>
  );
};