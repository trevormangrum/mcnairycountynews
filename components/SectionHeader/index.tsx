interface Props {
    text: string;
}
const SectionHeader: React.FC<Props> = ({text}) => {
    return <h2 className="section-header">{text}</h2>
}

export default SectionHeader;
