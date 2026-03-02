import ExploreByCategory from "@/components/Home/CategorySection/CategorySection";
import CompaniesSection from "@/components/Home/CompaniesSection/CompaniesSection";
import FeaturedJobs from "@/components/Home/FeatureJobs/FeatureJobs";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import LatestJobsOpen from "@/components/Home/LatestJobOpen/LatestJobOpen";
import StartPostingJobSection from "@/components/Home/StartPostingJobSection/StartPostingJobSection";

const page = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <CompaniesSection></CompaniesSection>
      <ExploreByCategory></ExploreByCategory>
      <StartPostingJobSection></StartPostingJobSection>
      <FeaturedJobs></FeaturedJobs>
      <LatestJobsOpen></LatestJobsOpen>
    </div>
  );
};

export default page;
