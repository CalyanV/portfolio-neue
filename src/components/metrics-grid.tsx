export interface Metric {
  value: string;
  label: string;
  description?: string;
}

interface MetricsGridProps {
  metrics: Metric[];
  columns?: 2 | 3 | 4;
}

export function MetricsGrid({ metrics, columns = 4 }: MetricsGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 my-8`}>
      {metrics.map((metric, index) => (
        <div key={index} className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
          <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
            {metric.value}
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold text-foreground mb-1">
              {metric.label}
            </p>
            {metric.description && (
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
