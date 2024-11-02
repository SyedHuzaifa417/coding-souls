export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      content:
        "The project-based approach helped me learn web development faster than any other platform.",
      image: "/api/placeholder/64/64",
    },
    {
      name: "Jane Smith",
      role: "Software Engineer",
      content:
        "The instructors are amazing and the community support is incredible. Highly recommended!",
      image: "/api/placeholder/64/64",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
