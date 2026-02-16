import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import Timeline from '../components/Timeline';
import ScrollReveal from '../components/ScrollReveal';
import { personalInfo } from '../data/resumeData';

const Experience = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Experience | {personalInfo.name}</title>
        <meta
          name="description"
          content="Professional experience of Dominique McClaney — from U.S. Navy service to AI Training and Software Engineering."
        />
      </Helmet>

      <main className="page-container">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <span className="section-label mb-4 block">Career Journey</span>
              <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4">
                Professional{' '}
                <span className="gradient-text">Experience</span>
              </h1>
              <p className="text-text-secondary max-w-2xl">
                From commanding decks at sea to commanding code — a journey of relentless
                dedication, leadership, and continuous growth.
              </p>
            </div>
          </ScrollReveal>

          <Timeline />
        </div>
      </main>
    </PageTransition>
  );
};

export default Experience;
