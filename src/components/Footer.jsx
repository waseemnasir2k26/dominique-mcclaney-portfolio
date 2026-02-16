import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/resumeData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-secondary/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-emerald flex items-center justify-center">
                <span className="font-syne font-bold text-bg-primary text-xs">DM</span>
              </div>
              <span className="font-syne font-bold">
                Dominique<span className="gradient-text">.</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm">
              © {currentYear} {personalInfo.name} · Built with passion · {personalInfo.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-bg-card border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-bg-card border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full bg-bg-card border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
