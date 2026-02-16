import { motion } from 'framer-motion';
import { experiences } from '../data/resumeData';

const Timeline = () => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-emerald opacity-30" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-16 md:pl-20"
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-4 md:left-6 w-4 h-4 rounded-full border-4 border-bg-primary z-10 ${
                exp.current
                  ? 'bg-accent-emerald animate-pulse-dot'
                  : exp.military
                  ? 'bg-accent-cyan'
                  : exp.highlight
                  ? 'bg-accent-amber'
                  : 'bg-accent-blue'
              }`}
            />

            {/* Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-syne font-bold text-lg md:text-xl mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-accent-cyan font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-text-secondary text-sm">{exp.period}</p>
                  <p className="text-text-muted text-sm">{exp.location}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`tag text-xs ${
                      tag.includes('🏆')
                        ? 'tag-amber'
                        : tag.includes('🎖️')
                        ? 'tag-emerald'
                        : ''
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Current Badge */}
              {exp.current && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="inline-flex items-center gap-2 text-sm text-accent-emerald">
                    <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                    Currently Active
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
