import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import SkillsGrid from '../components/SkillsGrid';
import ProjectPreview from '../components/ProjectPreview';
import CTASection from '../components/CTASection';
import { personalInfo } from '../data/resumeData';

const Home = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>{personalInfo.name} | Full Stack Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Dominique McClaney — Full Stack Software Engineer, Sales Professional, AI Trainer, and U.S. Navy Veteran with active Secret clearance."
        />
        <meta property="og:title" content={`${personalInfo.name} | Portfolio`} />
        <meta
          property="og:description"
          content="Full Stack Software Engineer, Sales Pro, AI Trainer, and U.S. Navy Veteran."
        />
      </Helmet>

      <main>
        <HeroSection />
        <StatsBar />
        <SkillsGrid />
        <ProjectPreview />
        <CTASection />
      </main>
    </PageTransition>
  );
};

export default Home;
