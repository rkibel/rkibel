export default function SectionHeader({ title }) {
  return (
    <div className="mb-8 sm:mb-10">
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
