export default function WaveSeparator() {
  return (
    <div className="overflow-hidden">
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[60px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 C 360 0, 1080 60, 1440 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          className="text-muted-foreground"
        />
      </svg>
    </div>
  );
}
