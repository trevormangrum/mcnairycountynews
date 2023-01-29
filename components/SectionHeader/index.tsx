interface Props {
  text: string;
}
const SectionHeader: React.FC<Props> = ({ text }) => {
  return (
    <h2 className="text-text-primary tracking-wide relative  mb-3 font-semibold uppercase text-2xl after:w-full after:h-[5px] after:absolute after:-bottom-1 after:left-0 after:bg-primary">
      {text}
    </h2>
  );
};

export default SectionHeader;
