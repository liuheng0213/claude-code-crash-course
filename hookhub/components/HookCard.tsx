import { Hook } from "@/types";

const categoryColors: Record<string, string> = {
  "Development Tools": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Code Quality": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Multi-Agent": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Notifications": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "Language Support": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  "Testing": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Monitoring": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
};

interface HookCardProps {
  hook: Hook;
}

export function HookCard({ hook }: HookCardProps) {
  return (
    <a
      href={hook.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
    >
      <div className="flex flex-col h-full">
        {/* Category Badge */}
        <span
          className={`inline-block w-fit px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
            categoryColors[hook.category] || "bg-gray-100 text-gray-800"
          }`}
        >
          {hook.category}
        </span>

        {/* Hook Name */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {hook.name}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          by @{hook.author}
        </p>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
          {hook.description}
        </p>

        {/* GitHub Link */}
        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          View on GitHub
        </div>
      </div>
    </a>
  );
}
