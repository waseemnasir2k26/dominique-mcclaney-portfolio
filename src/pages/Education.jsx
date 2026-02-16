import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import EducationGrid from '../components/EducationGrid';
import ScrollReveal from '../components/ScrollReveal';
import { personalInfo } from '../data/resumeData';

const Education = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Education | {personalInfo.name}</title>
        <meta
          name="description"
          content="Education and certifications of Dominique McClaney — Code Fellows certificates, degrees, and continuous learning."
        />
      </Helmet>

      <main className="page-container">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <span className="section-label mb-4 block">Academic Background</span>
              <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4">
                Education &{' '}
                <span className="gradient-text">Certifications</span>
              </h1>
              <p className="text-text-secondary max-w-2xl">
                Committed to continuous learning — from technical bootcamps to advanced
                software development and beyond.
              </p>
            </div>
          </ScrollReveal>

          <EducationGrid />
        </div>
      </main>
    </PageTransition>
  );
};

export default Education;
