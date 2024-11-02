export default function CourseSection() {
  const courses = [
    {
      title: "Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, and Node.js",
      duration: "12 weeks",
      level: "Beginner",
    },
    {
      title: "Python Programming",
      description: "Master Python from basics to advanced concepts",
      duration: "8 weeks",
      level: "Intermediate",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Essential computer science concepts",
      duration: "10 weeks",
      level: "Advanced",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Courses
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
