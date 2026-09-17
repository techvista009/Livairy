import Link from "next/link";
import type { Opportunity } from "@/data/opportunities";

export default function OpportunityCard({ opp, compact = false }: { opp: Opportunity; compact?: boolean }) {
  return (
    <article className="card group relative flex flex-col gap-3 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-elevated)] text-sm font-bold text-[var(--accent)]">
            {opp.organization.charAt(0)}
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-tight text-white group-hover:text-[var(--accent)] transition-colors">
              {opp.title}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">{opp.organization}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {opp.isNew && <span className="badge-new">NEW</span>}
          {opp.match !== undefined && (
            <span className="text-xs font-medium text-[var(--accent)]">{opp.match}% match</span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-dim)]">
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
          </svg>
          {opp.location}
        </span>
        <span className="rounded bg-[var(--bg-elevated)] px-1.5 py-0.5 text-[10px] uppercase tracking-wide">
          {opp.category}
        </span>
        {opp.tags.slice(0, 2).map((t) => (
          <span key={t} className="rounded bg-[var(--bg-elevated)] px-1.5 py-0.5 text-[10px]">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="flex items-center gap-1.5 text-xs text-[var(--amber)]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
          </svg>
          {opp.daysLeft} days left
        </span>
        <Link
          href={`/opportunity/${opp.slug}`}
          className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          View
        </Link>
      </div>
    </article>
  );
}
