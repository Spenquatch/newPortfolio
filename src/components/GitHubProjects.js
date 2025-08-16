import { Fragment, useEffect, useState } from "react";
import { parallax } from "../utils";
import portfolioConfig from "../../portfolio.config.json";

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    parallax();
    fetchGitHubRepos();
  }, []);

  // Fisher-Yates shuffle for randomizing array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const fetchGitHubRepos = async () => {
    try {
      // Get configuration settings
      const {
        displayRepos,
        hideRepos,
        useAllowlist,
        maxRepos,
        pinnedRepos,
        randomizeOrder,
      } = portfolioConfig;

      // Fetch personal repos
      const personalResponse = await fetch(
        "https://api.github.com/users/Spenquatch/repos?sort=updated&per_page=30"
      );

      let personalData = [];
      let orgData = [];

      if (personalResponse.ok) {
        personalData = await personalResponse.json();
      }

      // Try to fetch org repos, but don't fail if it doesn't work
      try {
        const orgResponse = await fetch(
          "https://api.github.com/orgs/atomize-codes/repos?sort=updated&per_page=30"
        );
        if (orgResponse.ok) {
          orgData = await orgResponse.json();
        }
      } catch (orgError) {
        // Continue with just personal repos
      }

      // Combine both arrays
      const allRepos = [...personalData, ...orgData];

      // Filter repos based on configuration
      let filteredRepos = allRepos.filter(
        (repo) => !repo.fork && !repo.private
      );

      // Apply allowlist or blocklist filtering
      if (useAllowlist && displayRepos && displayRepos.length > 0) {
        // Only show repos in the displayRepos list
        filteredRepos = filteredRepos.filter((repo) =>
          displayRepos.includes(repo.name)
        );
      } else if (hideRepos && hideRepos.length > 0) {
        // Hide repos in the hideRepos list
        filteredRepos = filteredRepos.filter(
          (repo) => !hideRepos.includes(repo.name)
        );
      }

      // Remove duplicates
      const uniqueRepos = filteredRepos.filter(
        (repo, index, self) => index === self.findIndex((r) => r.id === repo.id)
      );

      // Separate pinned and unpinned repos
      const pinned = [];
      const unpinned = [];

      uniqueRepos.forEach((repo) => {
        if (pinnedRepos && pinnedRepos.includes(repo.name)) {
          pinned.push(repo);
        } else {
          unpinned.push(repo);
        }
      });

      // Sort or randomize unpinned repos
      let sortedUnpinned;
      if (randomizeOrder) {
        sortedUnpinned = shuffleArray(unpinned);
      } else {
        sortedUnpinned = unpinned.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
      }

      // Combine pinned (at top) with unpinned repos
      const finalRepos = [...pinned, ...sortedUnpinned].slice(
        0,
        maxRepos || 12
      );

      setRepos(finalRepos);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching GitHub repos:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  // Truncate description to a reasonable length
  const truncateDescription = (desc, maxLength = 120) => {
    if (!desc) return "No description available";
    if (desc.length <= maxLength) return desc;
    return desc.substring(0, maxLength) + "...";
  };

  // Get language color based on GitHub's language colors
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      CSS: "#563d7c",
      HTML: "#e34c26",
      Shell: "#89e051",
      Java: "#b07219",
      Go: "#00ADD8",
      Ruby: "#701516",
      "C++": "#f34b7d",
      C: "#555555",
      PHP: "#4F5D95",
      Swift: "#FA7343",
      Kotlin: "#A97BFF",
      Rust: "#dea584",
      Vue: "#4fc08d",
      React: "#61dafb",
    };
    return colors[language] || "#8b949e";
  };

  // Get language icon
  const getLanguageIcon = (language) => {
    const icons = {
      JavaScript: "fab fa-js",
      TypeScript: "devicon-typescript-plain", // Using Devicon for TypeScript
      Python: "fab fa-python",
      CSS: "fab fa-css3",
      HTML: "fab fa-html5",
      Shell: "fas fa-terminal",
      Java: "fab fa-java",
      Go: "fab fa-google",
      Ruby: "fas fa-gem",
      PHP: "fab fa-php",
      Swift: "fab fa-swift",
      React: "fab fa-react",
      Vue: "fab fa-vuejs",
      default: "fas fa-code",
    };
    return icons[language] || icons["default"];
  };

  useEffect(() => {
    // Initialize hover effect for portfolio items
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
        }
      });
      e.addEventListener("mouseleave", () => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, [repos]); // Re-run when repos load

  if (loading) {
    return (
      <Fragment>
        <div className="filter-menu content-box">
          <div className="name">Projects</div>
          <div
            className="text"
            style={{
              marginTop: "10px",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#bbb",
            }}
          >
            Loading repositories from GitHub...
          </div>
        </div>
      </Fragment>
    );
  }

  if (error) {
    return (
      <Fragment>
        <div className="filter-menu content-box">
          <div className="name">Projects</div>
          <div
            className="text"
            style={{
              marginTop: "10px",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#bbb",
            }}
          >
            Unable to load GitHub repositories. Showing featured projects
            instead.
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="name">Projects</div>
        <div
          className="text"
          style={{
            marginTop: "10px",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#bbb",
          }}
        >
          AI tools and automation systems built to solve specific problems.
        </div>
        <div
          className="text"
          style={{ marginTop: "5px", fontSize: "14px", color: "#888" }}
        >
          <i className="fab fa-github" style={{ marginRight: "6px" }}></i>
          Showing {repos.length} public repositories • Updated live from GitHub
        </div>
      </div>

      {/* portfolio items */}
      <div className="box-items portfolio-items github-projects">
        {repos.map((repo) => (
          <div key={repo.id} className="box-item f-links">
            <div className="image github-card">
              <a
                href={repo.html_url}
                className="has-popup-link hover-animated"
                target="_blank"
                rel="noreferrer"
              >
                {/* GitHub repo card with better design */}
                <div
                  className="github-card-header"
                  style={{
                    width: "100%",
                    height: "140px",
                    background: `linear-gradient(135deg, ${getLanguageColor(
                      repo.language
                    )}15 0%, ${getLanguageColor(repo.language)}30 100%)`,
                    borderBottom: `2px solid ${getLanguageColor(
                      repo.language
                    )}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Language icon */}
                  <i
                    className={getLanguageIcon(repo.language)}
                    style={{
                      fontSize: "36px",
                      color: getLanguageColor(repo.language),
                      opacity: "0.8",
                    }}
                  ></i>
                </div>

                {/* Card content */}
                <div
                  className="github-card-content"
                  style={{
                    padding: "15px",
                    background: "#1a1a1a",
                    minHeight: "140px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#4bffa5",
                      marginBottom: "8px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      textDecoration: "none",
                    }}
                  >
                    {repo.name}
                  </div>

                  <div
                    style={{
                      fontSize: "13px",
                      color: "#aaa",
                      lineHeight: "1.4",
                      marginBottom: "12px",
                      minHeight: "40px",
                      maxHeight: "40px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {truncateDescription(repo.description)}
                  </div>

                  {/* Stats row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "11px",
                      color: "#777",
                      borderTop: "1px solid #2a2a2a",
                      paddingTop: "10px",
                      marginTop: "auto",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      {repo.language && (
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <span
                            style={{
                              width: "11px",
                              height: "11px",
                              borderRadius: "50%",
                              backgroundColor: getLanguageColor(repo.language),
                              marginRight: "4px",
                              display: "inline-block",
                              verticalAlign: "middle",
                            }}
                          ></span>
                          <span style={{ lineHeight: "1" }}>
                            {repo.language}
                          </span>
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <i
                            className="fas fa-star"
                            style={{ marginRight: "3px", fontSize: "11px" }}
                          ></i>
                          <span style={{ lineHeight: "1" }}>
                            {repo.stargazers_count}
                          </span>
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <i
                            className="fas fa-code-branch"
                            style={{ marginRight: "3px", fontSize: "11px" }}
                          ></i>
                          <span style={{ lineHeight: "1" }}>
                            {repo.forks_count}
                          </span>
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: "10px", color: "#888" }}>
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default GitHubProjects;
