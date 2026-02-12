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
    <div className={`mb-16 space-y-4 ${centered ? "text-center" : ""}`}>
      <div className={`inline-flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <div className="h-[2px] w-8 bg-accent/50 rounded-full" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
        <div className="h-[2px] w-8 bg-accent/50 rounded-full" />
      </div>
      
      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-silver-dark font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
