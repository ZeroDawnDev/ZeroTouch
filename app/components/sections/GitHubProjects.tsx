import { getRepos } from "@/lib/github";

export default async function GitHubProjects() {
  const repos = await getRepos();

  return (
    <section id="projects" className="relative z-10 px-6 pb-32">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-purple-400 tracking-[0.35em] text-sm mb-10">
          LIVE GITHUB PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {repos.map((repo: any) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              className="
                p-6
                rounded-2xl
                bg-white/[0.03]
                border border-purple-500/10
                hover:border-purple-500/30
                transition
                backdrop-blur-xl
              "
            >
              <h3 className="text-lg font-semibold">
                {repo.name}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {repo.description || "No description"}
              </p>

              <div className="mt-4 flex justify-between text-xs text-purple-300">
                <span>{repo.language}</span>
                <span>⭐ {repo.stars}</span>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}