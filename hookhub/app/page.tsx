"use client";

import { useState } from "react";
import { hooks } from "@/data/hooks";
import { HookGrid } from "@/components/HookGrid";
import { CategoryFilter } from "@/components/CategoryFilter";
import { HookCategory } from "@/types";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories from hooks data
  const categories = Array.from(
    new Set(hooks.map((hook) => hook.category))
  ) as HookCategory[];

  // Filter hooks based on selected category
  const filteredHooks =
    selectedCategory === "All"
      ? hooks
      : hooks.filter((hook) => hook.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              HookHub
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover Claude Code Hooks
            </p>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Hooks Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <HookGrid hooks={filteredHooks} />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            Open Source | Contribute on{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
