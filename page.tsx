import Header from "@/components/Header";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import Link from "next/link";

export default function RadarPage() {
  const recommended = opportunities.filter((o) => (o.match ?? 0) >= 80);

  return (
    <div className="min-h-screen">
      <Header variant="app" />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Good morning</h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Here&apos;s what&apos;s happening with your opportunities.
          </p>
        </div>

        {/* Radar widget */}
        <div className="card mb-8 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                ●
              </span>
              <div>
                <div className="text-sm font-medium">Your opportunity radar</div>
                <div className="text-xs text-[var(--text-dim)]">
                  12 new opportunities match your interests
                </div>
              </div>
            </div>
            <Link href="/discover" className="text-xs text-[var(--accent)] hover:underline">
              View all →
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span>AI & Machine Learning</span>
                <span className="text-[var(--accent)]">85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }} />
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span>Software</span>
                <span className="text-[var(--accent)]">72%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "72%" }} />
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span>Cybersecurity</span>
                <span className="text-[var(--accent)]">56%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "56%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">Recommended for you</h2>
          <Link href="/discover" className="text-sm text-[var(--accent)] hover:underline">
            View all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {recommended.map((opp) => (
            <div key={opp.id} className="relative">
              <OpportunityCard opp={opp} />
              {opp.match && (
                <div className="absolute right-3 top-3 rounded-full bg-[var(--accent-muted)] px-2 py-0.5 text-[10px] font-bold text-[var(--accent)]">
                  {opp.match}% MATCH
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
