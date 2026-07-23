import { STATS } from "@/data/hero";
import "./DevStats.scss";

export function DevStats() {
  return (
    <dl className="dev-stats">
      {STATS.map(({ value, label }) => (
        <div key={label} className="dev-stats__stat">
          <dt className="dev-stats__stat-value">+{value}</dt>
          <dd className="dev-stats__stat-label">{label}</dd>
        </div>
      ))}
    </dl>
  );
}
