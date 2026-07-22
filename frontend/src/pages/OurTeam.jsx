import Ankit from "../assets/Ankit.png";
import Archana from "../assets/Archana.png";
import Harshmani from "../assets/Harsh.png";
import Ayush from "../assets/Ayush.png";
import Arjun from "../assets/Arjun.png";

const team = [
  {
    name: 'Archana Uniyal',
    role: 'Founder',
    initials: 'AU',
    photo: Archana,
    av: 'bg-amber-100 text-amber-900',
    badge: 'Leadership',
    badgeColor: 'bg-amber-100 text-amber-800',
  },
  {
    name: 'Harshmani Uniyal',
    role: 'CEO',
    initials: 'HU',
    photo: Harshmani,
    av: 'bg-[#0a1628] text-yellow-400',
    badge: 'Leadership',
    badgeColor: 'bg-[#0a1628] text-yellow-400',
  },
  {
    name: 'Ankit Sajwan',
    role: 'Company Manager',
    initials: 'AS',
    photo: Ankit,
    av: 'bg-amber-100 text-amber-900',
    badge: 'Operations',
    badgeColor: 'bg-blue-50 text-blue-800',
  },
  {
    name: 'Arjun Uniyal',
    role: 'Accounts Manager',
    initials: 'AU',
    photo: Arjun,
    av: 'bg-[#0a1628] text-yellow-400',
    badge: 'Finance',
    badgeColor: 'bg-green-50 text-green-800',
  },
  {
 name: 'Ayush Sindhwal',
  role: 'Marketing Manager',
  initials: 'AY',
  photo: Ayush,
  av: 'bg-amber-100 text-amber-900',
  badge: 'Growth',
  badgeColor: 'bg-purple-50 text-purple-800',
  },
];

const OurTeam = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0a1628] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-800 bg-amber-100 px-4 py-1.5 rounded-full mb-3">
            The People Behind the Magic
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Meet the Team
          </h1>
          <p className="text-gray-400 text-sm">Five passionate people. One mission.</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-100 hover:border-yellow-400 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative w-18 h-18 mx-auto mb-4" style={{ width: '72px', height: '72px' }}>
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 group-hover:border-yellow-400 transition-colors duration-300"
                    style={{
                      inset: '-6px',
                      position: 'absolute',
                      borderRadius: '50%',
                      width: 'calc(100% + 12px)',
                      height: 'calc(100% + 12px)',
                    }}
                  />
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover object-center"
                    />
                  ) : (
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center text-sm font-bold ${member.av}`}
                    >
                      {member.initials}
                    </div>
                  )}
                </div>

                <p className="font-bold text-[#0a1628] text-sm leading-tight mb-1">{member.name}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">{member.role}</p>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${member.badgeColor}`}>
                  {member.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
