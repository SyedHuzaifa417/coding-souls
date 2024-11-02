export default function Services() {
  const services = [
    {
      icon: "fa-laptop",
      title: "Web App Development",
      description:
        "Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.",
    },
    {
      icon: "fa-android",
      title: "Mobile App Development",
      description:
        "We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.",
    },
    {
      icon: "fa-magic",
      title: "Digital Marketing",
      description:
        "The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.",
    },
  ];

  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12" id="service">
            <h1>Our Services</h1>
            <p>
              We help you to build high-quality digital solutions and products
              as well as deliver a wide range of related professional services.
              We are providing world-class service to our clients.
            </p>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <div className="item">
                <span className={`icon feature_box_col_${index + 1}`}>
                  <i className={`fa ${service.icon}`}></i>
                </span>
                <h6>{service.title}</h6>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
