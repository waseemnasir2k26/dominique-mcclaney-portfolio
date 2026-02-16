import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import HonorsGrid from '../components/HonorsGrid';
import ScrollReveal from '../components/ScrollReveal';
import { personalInfo } from '../data/resumeData';

const Honors = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Honors & Activities | {personalInfo.name}</title>
        <meta
          name="description"
          content="Honors and achievements of Dominique McClaney — ESWS qualification, Secret clearance, sales records, and community leadership."
        />
      </Helmet>

      <main className="page-container">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <span className="section-label mb-4 block">Achievements</span>
              <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4">
                Honors &{' '}
                <span className="gradient-text">Activities</span>
              </h1>
              <p className="text-text-secondary max-w-2xl">
                Recognition earned through dedication, excellence, and service — from military
                qualifications to sales achievements and community leadership.
              </p>
            </div>
          </ScrollReveal>

          <HonorsGrid />
        </div>
      </main>
    </PageTransition>
  );
};

export default Honors;
