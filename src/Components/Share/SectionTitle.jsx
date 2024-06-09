
const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center bg-purple-200 py-4 mb-4">
            <h2 className="text-3xl font-bold text-orange-600">{title}</h2>
            <p className="mt-2 text-xl text-orange-300">---{subtitle}---</p>
        </div>
    );
};

export default SectionTitle;