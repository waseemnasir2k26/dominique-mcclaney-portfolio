import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/resumeData';
import ScrollReveal from './ScrollReveal';

const ProjectPreview = () => {
  const previewProjects = projects.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-bg-secondary/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="section-label mb-4 block">Portfolio</span>
              <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-blue transition-colors group"
            >
              View All Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group"
            >
              {/* Banner */}
              <div className="h-32 bg-gradient-to-br from-accent-cyan/20 via-accent-blue/20 to-accent-emerald/20 flex items-center justify-center">
                <span className="text-5xl">{project.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-syne font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors"
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;
