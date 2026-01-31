"use client";

import { useEffect, useRef } from "react";

function RainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const drops: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];
    const dropCount = 200;

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 15 + 10,
        length: Math.random() * 20 + 10,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 1, drop.y + drop.length);
        ctx.strokeStyle = `rgba(174, 194, 224, ${drop.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        drop.y += drop.speed;
        drop.x += 0.5;

        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: "transparent" }}
    />
  );
}

function Lightning() {
  return (
    <div className="fixed inset-0 pointer-events-none z-5 animate-lightning opacity-0" />
  );
}

export default function Home() {
  const featuredHooks = [
    {
      name: "auto-commit",
      author: "rainmaker",
      description: "Automatically formats and commits code changes with semantic messages",
      downloads: "12.4k",
      tags: ["git", "automation"],
    },
    {
      name: "test-guard",
      author: "stormchaser",
      description: "Runs tests before allowing any file modifications",
      downloads: "8.2k",
      tags: ["testing", "safety"],
    },
    {
      name: "lint-fix",
      author: "thunderbolt",
      description: "Auto-fixes linting issues on every code generation",
      downloads: "15.7k",
      tags: ["linting", "quality"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
      <RainCanvas />
      <Lightning />

      {/* Ambient glow effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <span className="text-lg">⚡</span>
          </div>
          <span className="text-xl font-bold tracking-tight">HookHub</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#hooks" className="hover:text-white transition-colors">Browse Hooks</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm text-slate-400 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 flex flex-col items-center justify-center px-8 pt-24 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-slate-300">Now in public beta</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          Supercharge Your
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Claude Code
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          Discover, share, and install powerful hooks that automate your workflow.
          Join thousands of developers building the future of AI-assisted coding.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group px-8 py-4 text-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl shadow-cyan-500/25 flex items-center gap-2">
            Browse Hooks
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="px-8 py-4 text-lg font-medium bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
            Publish Your Hook
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 mt-20 pt-12 border-t border-white/5">
          <div className="text-center">
            <div className="text-4xl font-bold text-white">2,847</div>
            <div className="text-sm text-slate-500 mt-1">Published Hooks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">48.2k</div>
            <div className="text-sm text-slate-500 mt-1">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">1.2M</div>
            <div className="text-sm text-slate-500 mt-1">Downloads</div>
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="relative z-20 px-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-sm text-slate-500 font-mono">~/.claude/hooks.json</span>
            </div>
            <pre className="p-6 text-sm font-mono overflow-x-auto">
              <code className="text-slate-300">
{`{
  `}<span className="text-purple-400">&quot;hooks&quot;</span>{`: {
    `}<span className="text-purple-400">&quot;PreToolUse&quot;</span>{`: [
      {
        `}<span className="text-cyan-400">&quot;matcher&quot;</span>{`: `}<span className="text-green-400">&quot;Bash&quot;</span>{`,
        `}<span className="text-cyan-400">&quot;command&quot;</span>{`: `}<span className="text-green-400">&quot;hookhub run safety-check&quot;</span>{`
      }
    ],
    `}<span className="text-purple-400">&quot;PostToolUse&quot;</span>{`: [
      {
        `}<span className="text-cyan-400">&quot;matcher&quot;</span>{`: `}<span className="text-green-400">&quot;Write|Edit&quot;</span>{`,
        `}<span className="text-cyan-400">&quot;command&quot;</span>{`: `}<span className="text-green-400">&quot;hookhub run auto-format&quot;</span>{`
      }
    ]
  }
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-20 px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything you need
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            A complete ecosystem for Claude Code hooks
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔌",
                title: "One-Click Install",
                description: "Install any hook with a single command. No configuration needed.",
              },
              {
                icon: "🔒",
                title: "Security Audited",
                description: "Every hook is reviewed for security. Run with confidence.",
              },
              {
                icon: "🌐",
                title: "Community Driven",
                description: "Built by developers, for developers. Open source at heart.",
              },
              {
                icon: "⚡",
                title: "Blazing Fast",
                description: "Hooks run locally with zero latency. No cloud dependency.",
              },
              {
                icon: "🔄",
                title: "Auto Updates",
                description: "Keep your hooks current with automatic version management.",
              },
              {
                icon: "📊",
                title: "Analytics",
                description: "Track hook usage and performance with built-in insights.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hooks */}
      <section id="hooks" className="relative z-20 px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Trending Hooks
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Discover the most popular hooks this week
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredHooks.map((hook, i) => (
              <div
                key={i}
                className="group p-6 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold font-mono text-cyan-400">
                      {hook.name}
                    </h3>
                    <p className="text-sm text-slate-500">by @{hook.author}</p>
                  </div>
                  <div className="text-sm text-slate-400 flex items-center gap-1">
                    <span>↓</span>
                    {hook.downloads}
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-4">{hook.description}</p>
                <div className="flex gap-2">
                  {hook.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-white/5 rounded-md text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="px-6 py-3 text-sm font-medium bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              View All Hooks →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-20 px-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl border border-white/10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to automate?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Get started with HookHub in seconds. Install the CLI and explore
                thousands of hooks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="px-6 py-3 bg-slate-900/80 rounded-xl font-mono text-sm border border-white/10">
                  <span className="text-slate-500">$</span>{" "}
                  <span className="text-cyan-400">npm install -g hookhub</span>
                </div>
                <button className="px-6 py-3 text-sm font-medium bg-white text-slate-900 rounded-xl hover:bg-slate-200 transition-all">
                  Read the Docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-20 px-8 pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to know about HookHub
          </p>

          <div className="space-y-4">
            {[
              {
                question: "What are Claude Code hooks?",
                answer: "Hooks are custom scripts that run automatically at specific points during Claude Code's operation. They can intercept tool calls, validate code changes, run tests, format files, and much more — all without manual intervention.",
              },
              {
                question: "Is HookHub free to use?",
                answer: "Yes! HookHub is completely free for individuals. We offer paid team plans with additional features like private hooks, analytics dashboards, and priority support.",
              },
              {
                question: "How do I install a hook?",
                answer: "Simply run 'hookhub install <hook-name>' in your terminal. The hook will be automatically configured in your ~/.claude/hooks.json file and ready to use immediately.",
              },
              {
                question: "Are hooks safe to run?",
                answer: "Every hook published on HookHub goes through a security review process. We scan for malicious code, verify permissions, and require authors to follow our security guidelines. You can also inspect the source code before installing.",
              },
              {
                question: "Can I create and publish my own hooks?",
                answer: "Absolutely! Anyone can create and publish hooks. Just write your hook following our documentation, test it locally, and run 'hookhub publish' to share it with the community.",
              },
              {
                question: "Do hooks slow down Claude Code?",
                answer: "Hooks run locally on your machine with minimal overhead. Most hooks add less than 100ms to operations. You have full control over which hooks are active and can disable them anytime.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <summary className="flex items-center justify-between text-lg font-semibold list-none">
                  {faq.question}
                  <span className="text-cyan-400 group-open:rotate-45 transition-transform text-2xl">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 px-8 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-sm">⚡</span>
            </div>
            <span className="font-semibold">HookHub</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <p className="text-sm text-slate-600">
            © 2025 HookHub. Made with ☔ in the cloud.
          </p>
        </div>
      </footer>
    </div>
  );
}
