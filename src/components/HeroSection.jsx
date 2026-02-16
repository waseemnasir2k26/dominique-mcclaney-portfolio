import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { personalInfo, heroStats, heroTags, floatingBadges } from '../data/resumeData';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-white/5">
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse-dot" />
                <span className="text-sm text-text-secondary">{personalInfo.status}</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="font-syne font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-4">
              {personalInfo.firstName}
              <br />
              <span className="gradient-text">{personalInfo.lastName}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-secondary font-medium mb-6">
              {personalInfo.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-text-secondary max-w-lg mb-8 leading-relaxed">
              {personalInfo.description}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                <FiMail size={18} />
                Get in Touch
              </Link>
              <Link to="/projects" className="btn-outline">
                View Projects
                <FiArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Floating Badges */}
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className={`absolute z-10 px-4 py-2 rounded-full bg-bg-card/80 backdrop-blur-sm border border-white/10 shadow-lg ${
                  index === 0
                    ? 'top-0 left-0 -translate-x-4 animate-float'
                    : index === 1
                    ? 'top-1/4 right-0 translate-x-4 animate-float-delayed'
                    : 'bottom-1/4 left-0 -translate-x-8 animate-float-slow'
                }`}
              >
                <span className="flex items-center gap-2 text-sm">
                  <span>{badge.icon}</span>
                  <span className="text-text-primary font-medium">{badge.text}</span>
                </span>
              </motion.div>
            ))}

            {/* Main Card */}
            <div className="glass-card p-8 relative">
              {/* Gradient Border Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-emerald rounded-t-2xl" />

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-emerald flex items-center justify-center shadow-lg shadow-accent-cyan/20">
                  <span className="font-syne font-bold text-3xl text-bg-primary">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-6">
                <h3 className="font-syne font-bold text-xl mb-1">{personalInfo.name}</h3>
                <p className="text-text-secondary text-sm">{personalInfo.title}</p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {heroTags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats Row */}
              <div className="flex justify-center gap-6 pt-6 border-t border-white/5">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-syne font-bold text-xl gradient-text-cyan-blue">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
