type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className="text-3xl sm:text-4xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 mx-auto h-1 w-16 rounded-full ${
          centered ? "" : "mx-0"
        } bg-accent`}
      />
    </div>
  );
}
