import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import ContactGrid from '../components/ContactGrid';
import ScrollReveal from '../components/ScrollReveal';
import { personalInfo } from '../data/resumeData';

const Contact = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact | {personalInfo.name}</title>
        <meta
          name="description"
          content="Get in touch with Dominique McClaney — available for opportunities in software engineering, AI training, and more."
        />
      </Helmet>

      <main className="page-container">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="section-label justify-center mb-4">Let's Connect</span>
              <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4">
                Get in{' '}
                <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Ready to collaborate? Whether you're looking for a software engineer, AI trainer,
                or someone to drive results — let's connect and build something extraordinary.
              </p>
            </div>
          </ScrollReveal>

          <ContactGrid />
        </div>
      </main>
    </PageTransition>
  );
};

export default Contact;
