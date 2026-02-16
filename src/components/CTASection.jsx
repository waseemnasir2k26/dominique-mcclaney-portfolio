import { motion } from 'framer-motion';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/resumeData';
import ScrollReveal from './ScrollReveal';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bg-card to-bg-secondary border border-white/5 p-8 md:p-12 lg:p-16"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="section-label justify-center mb-4">Let's Connect</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4"
              >
                Let's Build Something{' '}
                <span className="gradient-text">Extraordinary</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-text-secondary mb-8 max-w-lg mx-auto"
              >
                Ready to collaborate on your next project? Whether it's building innovative
                applications, leveraging AI, or driving business growth — I'm here to help.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                  <FiMail size={18} />
                  Send an Email
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <FiLinkedin size={18} />
                  Connect on LinkedIn
                </a>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
