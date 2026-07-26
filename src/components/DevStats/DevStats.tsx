import { STATS } from "@/data/profile";
import "./DevStats.scss";

export function DevStats() {
  return (
    <div className="dev-stats" role="group" aria-label="Estadísticas profesionales">
      {STATS.map(({ value, label }) => (
        <dl key={label} className="dev-stats__stat">
          <dt className="dev-stats__stat-value">
            <span className="dev-stats__stat-value-prefix">+</span>
            {value}
          </dt>
          <dd className="dev-stats__stat-label">{label}</dd>
        </dl>
      ))}
    </div>
  );
}
