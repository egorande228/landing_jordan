export function ComplianceNotice({
  content,
  status,
}: {
  content: { label: string; message: string };
  status: "approved" | "requires-review" | "blocked";
}) {
  if (status === "approved") return null;

  return (
    <aside className="compliance-notice" id="availability">
      <span>{content.label}</span>
      <p>{content.message}</p>
    </aside>
  );
}
