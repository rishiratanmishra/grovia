import React from "react";

const teamMembers = [
  {
    name: "Maipal Singh Mangaliya",
    role: "Founder & CEO",
    bio: "Ex-Tech lead building scale enterprise products. Passionate about bringing technological efficiency to Indian construction operations.",
    initials: "MM",
  },
  {
    name: "Varun Patil",
    role: "VP of Engineering",
    bio: "Systems architect specialize in offline-first databases and real-time messaging structures. Leads the Blurick OS dev team.",
    initials: "VP",
  },
  {
    name: "Priya Nair",
    role: "Head of Success",
    bio: "10+ years experience in PMC coordination and site audits. Ensures seamless onboarding for site stores and managers.",
    initials: "PN",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-20 border-t border-border-default/60 bg-transparent mb-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
            Meet the Team
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-2">
            The operators, builders, and engineers crafting the future of site management.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-bg-card/50 border border-border-default rounded-2xl p-6 text-center hover:shadow-sm hover:border-border-default/80 transition-all"
            >
              {/* Avatar circle with initials */}
              <div className="h-16 w-16 mx-auto rounded-full bg-blue-600 text-bg-canvas flex items-center justify-center text-lg font-bold shadow-sm mb-4">
                {member.initials}
              </div>
              <h3 className="text-sm font-bold text-text-primary">{member.name}</h3>
              <p className="text-[10px] text-blue-700 bg-blue-500/10 px-2.5 py-0.5 rounded-full inline-block font-semibold mt-1">
                {member.role}
              </p>
              <p className="text-xs text-text-secondary leading-relaxed mt-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
