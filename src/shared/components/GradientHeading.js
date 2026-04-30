export default function GradientHeading({ title }) {
  return (
    <h1 className="whitespace-pre-line text-4xl tablet:text-5xl laptop:text-7xl text-center font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-0 to-secondary-300 laptop:leading-normal">
      {title}
    </h1>
  );
}
