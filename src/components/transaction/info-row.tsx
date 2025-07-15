export default function InfoRow({
  icon: Icon,
  label,
  value,
  disabled = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center ${
        disabled ? "opacity-40 pointer-events-none" : ""
      }`}
    >
      <div className="flex items-center space-x-2">
        <Icon className="w-3.5 h-3.5 text-[#6B7280]" />
        <span>{label}</span>
      </div>
      <span className="font-semibold text-[#1F2937]">{value}</span>
    </div>
  );
}
