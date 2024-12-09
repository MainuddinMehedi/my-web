import Greetings from "../components/Greetings";
import RecentPosts from "../components/RecentPosts";
import ThingsIDo from "../components/ThingsIDo";

const Home = () => {
  return (
    <div className="space-y-9">
      <Greetings />
      <ThingsIDo />
      <RecentPosts />
    </div>
  );
};

export default Home;
