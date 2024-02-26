import HomePageContent from "components/home/HomePageContent";
import Title from "components/ui/Title";

const HomePage = () => {
  return (
    <article>
      <div>
        <p className="title-caption">Hi Mr. Michael</p>
        <Title type="main">Welcome Back!</Title>
      </div>
      <HomePageContent />
    </article>
  );
};

export default HomePage;
