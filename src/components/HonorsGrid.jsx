import { motion } from 'framer-motion';
import { honors } from '../data/resumeData';

const HonorsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {honors.map((honor, index) => (
        <motion.div
          key={honor.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="glass-card p-6 group"
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:from-accent-cyan/20 group-hover:to-accent-blue/20 transition-colors">
              {honor.icon}
            </div>

            {/* Content */}
            <div>
              <h3 className="font-syne font-bold text-lg mb-2">{honor.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {honor.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HonorsGrid;
