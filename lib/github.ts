const GITHUB_USERNAME = "ZeroDawnDev";

export async function getRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 }, // cache 1 hour
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repos");
  }

  const data = await res.json();

  return data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    stars: repo.stargazers_count,
    url: repo.html_url,
    language: repo.language,
  }));
}