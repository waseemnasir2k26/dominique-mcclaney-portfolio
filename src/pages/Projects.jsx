import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { projects, personalInfo } from '../data/resumeData';

const Projects = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Projects | {personalInfo.name}</title>
        <meta
          name="description"
          content="Portfolio projects by Dominique McClaney — Full Stack web apps, AI-powered games, and collaborative team projects."
        />
      </Helmet>

      <main className="page-container">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <span className="section-label mb-4 block">Portfolio</span>
              <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4">
                My{' '}
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-text-secondary max-w-2xl">
                From full-stack web applications to AI-powered experiences — showcasing
                creativity, collaboration, and technical expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                <div className="h-48 bg-gradient-to-br from-accent-cyan/20 via-accent-blue/20 to-accent-emerald/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent" />
                  <span className="text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-syne font-bold text-2xl mb-3">{project.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline py-2 px-4 text-sm"
                      >
                        <FiGithub size={16} />
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2 px-4 text-sm"
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
      </main>
    </PageTransition>
  );
};

export default Projects;
