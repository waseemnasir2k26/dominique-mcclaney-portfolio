import { motion } from 'framer-motion';
import { stats } from '../data/resumeData';
import ScrollReveal from './ScrollReveal';

const StatsBar = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 text-center"
              >
                <div className="font-syne font-extrabold text-4xl md:text-5xl gradient-text-cyan-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsBar;
