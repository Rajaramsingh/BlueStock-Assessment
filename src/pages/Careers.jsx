import Breadcrumb from '../components/common/Breadcrumb';
import CareerHero from '../components/careers/CareerHero';
import TeamSection from '../components/careers/TeamSection';
import TeamMembers from '../components/careers/TeamMembers';
import CareerInfo from '../components/careers/CareerInfo';
import OpenPositions from '../components/careers/OpenPositions';

export default function Careers() {
  return (
    <div className="min-h-screen">
      <Breadcrumb />
      <CareerHero />
      <CareerInfo />
      <OpenPositions />
      <TeamSection />
      <TeamMembers />
    </div>
  );
}
  