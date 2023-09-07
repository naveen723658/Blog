import FeaturedPost from "./main/page";
import Trending from "./trending/page";
export default function page() {
  return (
    <section id="hero">
      <div className="container-xl">
        <div className="row gy-4">
            <FeaturedPost />
            <Trending />
        </div>
      </div>
    </section>
  );
}
