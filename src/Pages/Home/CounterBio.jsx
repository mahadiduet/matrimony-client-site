import SectionTitle from "../../Components/Share/SectionTitle";

const CounterBio = ({ data }) => {
    const totalBiodates = data.length;
    const totalMaleBiodates = data.filter(item => item.biodata_type === 'Male').length;
    const totalFemaleBiodates = data.filter(item => item.biodata_type === 'Female').length;

    return (
        <div className="bg-gray-100 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Our Achievements" subtitle="Statistics" ></SectionTitle>

                <div className="mt-10">
                    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 text-center">
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">Total Biodate</dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">{totalBiodates}</dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">Total Male Biodate</dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">{totalMaleBiodates}</dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">Total Female Biodate</dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">{totalFemaleBiodates}</dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">Total Marriage Story</dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">15</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default CounterBio;