import { Layout } from "../styles/Layout.styled";
import MainLayoutLayout from "../components/ui/layout/MainLayout/MainLayout.layout";
import MyPoolsSection from "../components/ui/templates/MyPoolsSection/MyPools.section";
import { ProfileH1, profileH1Wrapper } from "../styles/Profile.styled";

const Profile = () => {
  return (
    // @ts-ignore
    <MainLayoutLayout>
      {/* @ts-ignore */}
      <profileH1Wrapper>
        {/* @ts-ignore */}

        <ProfileH1>PORTFOLIO</ProfileH1>
        {/* @ts-ignore */}
      </profileH1Wrapper>
      <MyPoolsSection />
    </MainLayoutLayout>
  );
};

export default Profile;
