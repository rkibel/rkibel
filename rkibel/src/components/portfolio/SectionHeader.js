export default function SectionHeader({ title }) {
  return (
    <div className="mb-6 sm:mb-7">
      <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
