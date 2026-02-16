import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../data/resumeData';

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'accent-cyan',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`,
    color: 'accent-blue',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dominique-mcclaney',
    href: personalInfo.linkedin,
    color: 'accent-emerald',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/MccDom1',
    href: personalInfo.github,
    color: 'accent-amber',
  },
];

const ContactGrid = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Contact Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {contactItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex items-center gap-4 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center group-hover:bg-${item.color}/20 transition-colors`}>
                <IconComponent className={`w-6 h-6 text-${item.color}`} />
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">{item.label}</p>
                <p className="font-medium text-text-primary group-hover:text-accent-cyan transition-colors">
                  {item.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="glass-card p-8 text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 flex items-center justify-center mx-auto mb-4">
          <FiMapPin className="w-8 h-8 text-accent-cyan" />
        </div>
        <h3 className="font-syne font-bold text-xl mb-2">Location</h3>
        <p className="text-text-secondary">{personalInfo.location}</p>
        <p className="text-accent-emerald text-sm mt-2">Open to Remote & On-site Opportunities</p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="glass-card p-8 mt-8"
      >
        <h3 className="font-syne font-bold text-xl mb-6 text-center">Send a Message</h3>
        <form
          action={`https://formspree.io/f/placeholder`}
          method="POST"
          className="space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-bg-card border border-white/5 rounded-lg text-text-primary focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-bg-card border border-white/5 rounded-lg text-text-primary focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-text-secondary mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 bg-bg-card border border-white/5 rounded-lg text-text-primary focus:outline-none focus:border-accent-cyan transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            <FiMail size={18} />
            Send Message
          </button>
        </form>
        <p className="text-center text-text-muted text-sm mt-4">
          Or email directly at{' '}
          <a href={`mailto:${personalInfo.email}`} className="text-accent-cyan hover:underline">
            {personalInfo.email}
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default ContactGrid;
