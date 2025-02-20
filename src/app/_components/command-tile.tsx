interface Props {
  label: string;
  fullCommand: string;
  description: string;
}

export function CommandTile({ label, description, fullCommand }: Props) {
  return (
    <div className="rounded-lg border border-powershell-text/10 bg-card p-6 hover:[box-shadow:0_0_20px_rgba(239,181,113,0.15)] transition-shadow">
      <h3 className="font-semibold text-powershell-command">{label}</h3>
      <p className="text-sm text-powershell-text/70">{description}</p>
      <code className="mt-2 inline-block rounded w-full bg-powershell-bg px-2 py-1 text-sm font-mono text-powershell-command">
        {fullCommand}
      </code>
    </div>
  );
}
