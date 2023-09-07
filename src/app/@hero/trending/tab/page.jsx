export default function page() {
  return (
    <ul
      className="nav nav-tabs nav-pills nav-fill"
      id="postsTab"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <button
          aria-controls="popular"
          aria-selected="true"
          className="nav-link active"
          data-bs-target="#popular"
          data-bs-toggle="tab"
          id="popular-tab"
          role="tab"
          type="button"
        >
          Popular
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          aria-controls="recent"
          aria-selected="false"
          className="nav-link"
          data-bs-target="#recent"
          data-bs-toggle="tab"
          id="recent-tab"
          role="tab"
          type="button"
        >
          Recent
        </button>
      </li>
    </ul>
  );
}
