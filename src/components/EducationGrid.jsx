import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiFileText } from 'react-icons/fi';
import { education } from '../data/resumeData';

const typeConfig = {
  Degree: {
    icon: FiAward,
    colorClass: 'tag-amber',
    borderColor: 'border-accent-amber/30',
    bgColor: 'from-accent-amber/10',
  },
  Certificate: {
    icon: FiFileText,
    colorClass: 'tag-blue',
    borderColor: 'border-accent-blue/30',
    bgColor: 'from-accent-blue/10',
  },
  Diploma: {
    icon: FiBookOpen,
    colorClass: 'tag-emerald',
    borderColor: 'border-accent-emerald/30',
    bgColor: 'from-accent-emerald/10',
  },
};

const EducationGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {education.map((edu, index) => {
        const config = typeConfig[edu.type];
        const IconComponent = config.icon;

        return (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={`glass-card p-6 border-l-4 ${config.borderColor}`}
          >
            {/* Type Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className={`tag ${config.colorClass}`}>
                <IconComponent size={12} className="mr-1" />
                {edu.type}
              </span>
              {edu.status && (
                <span className="tag tag-emerald">{edu.status}</span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-syne font-bold text-lg mb-2">{edu.title}</h3>

            {/* School Info */}
            <div className="space-y-1">
              <p className="text-accent-cyan font-medium">{edu.school}</p>
              <p className="text-text-muted text-sm">{edu.location}</p>
              {edu.period && (
                <p className="text-text-secondary text-sm">{edu.period}</p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default EducationGrid;
