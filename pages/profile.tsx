import { Layout } from "../styles/Layout.styled";
import MainLayoutLayout from "../components/ui/layout/MainLayout/MainLayout.layout";
import MyPoolsSection from "../components/ui/templates/MyPoolsSection/MyPools.section";

const Profile = () => {
  return (
    <MainLayoutLayout>
        <MyPoolsSection/>
    </MainLayoutLayout>
  );
};

export default Profile;
