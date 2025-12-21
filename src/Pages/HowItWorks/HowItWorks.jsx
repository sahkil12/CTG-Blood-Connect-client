import { FaUserPlus, FaSearch, FaHandsHelping } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";

const cardDetails = [
  {
    icon: FaUserPlus,
    title: 'Become a Donor',
    subtitle: 'Register as a donor by filling up a simple form with your blood group, area and some other details.'
  },
  {
    icon: FaSearch,
    title: 'Search Donors',
    subtitle: 'Search donors by selecting blood group and area in Chittagong.'
  },
  {
    icon: FaHandsHelping,
    title: 'Contact & Save Lives',
    subtitle: 'Contact donors directly and get help when it matters most.'
  },
  {
    icon: MdUpdate,
    title: 'Stay Available',
    subtitle: 'Keep your donor profile updated so people can reach you when blood is needed.'
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-base-100 py-16 md:py-28">
      <div className="md:max-w-10/12 mx-auto px-4">
        {/* header part */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            How CTG <span className="text-red-500">Blood</span> Connect Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Simple and reliable steps to connect blood donors with those in need across Chittagong.
          </p>
        </div>
        {/* cards data*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {cardDetails.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 hover:border-red-300 p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300 group"
              >
                {/* icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition">
                  <Icon className="text-3xl text-red-500" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-active:text-red-500 md:group-hover:text-red-500 transition-colors duration-400">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
