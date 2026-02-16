import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiTrendingUp, FiUsers, FiCamera, FiShield } from 'react-icons/fi';
import { skills } from '../data/resumeData';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  FiCode: FiCode,
  FiCpu: FiCpu,
  FiTrendingUp: FiTrendingUp,
  FiUsers: FiUsers,
  FiCamera: FiCamera,
  FiShield: FiShield,
};

const SkillsGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <span className="section-label mb-4 block">What I Bring</span>
            <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl">
              Skills & Services
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="gradient-border-card group"
              >
                <div className="bg-bg-card rounded-2xl p-6 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 flex items-center justify-center mb-4 group-hover:from-accent-cyan/20 group-hover:to-accent-blue/20 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-accent-cyan" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-syne font-bold text-lg mb-3">{skill.title}</h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, idx) => (
                      <span key={idx} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;
