// components/Features.js
export default function Features() {
  const features = [
    {
      title: "Project-Based Learning",
      description: "Learn by building real-world applications",
      icon: "🚀",
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals",
      icon: "👨‍🏫",
    },
    {
      title: "Community Support",
      description: "Join our active learning community",
      icon: "👥",
    },
    {
      title: "Lifetime Access",
      description: "Access course content forever",
      icon: "🔑",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose CodingSouls?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
