
const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mt-8 mb-4">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{subtitle}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
            </p>
        </div>
    );
};

export default SectionTitle;