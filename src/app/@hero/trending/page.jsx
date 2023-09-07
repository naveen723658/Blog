import Tab from "./tab/page";
import Popular from "./popular/page";
export default function page() {
  return (
    <div className="col-lg-4">
      {/* post tabs */}
      <div className="post-tabs rounded bordered">
        <Tab />
        <div className="tab-content" id="postsTabContent">
          <Popular />
        </div>
      </div>
    </div>
  );
}
