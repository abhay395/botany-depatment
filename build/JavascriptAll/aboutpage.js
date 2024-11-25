// Target the aboutContainer div
const aboutContainer = document.getElementById("aboutcontainer");

// Optimized object structure
let aboutData = {
  missionVision: [
    {
      title: "Our Mission",
      desc: "We are dedicated to providing cutting-edge scientific education to both rural and urban students, ensuring alignment with the principles of the New Education Policy 2020. Our aim is to promote interdisciplinary learning through a flexible and modular curriculum, empowering students to design their own educational journeys. By fostering creativity and innovation, we offer opportunities for research, internships, and experiential learning, preparing students to excel in their chosen fields.",
    },
    {
      title: "Our Vision",
      desc: "To be a leading institution in scientific education, empowering students to become innovative problem-solvers and actively contribute to the advancement of society.",
    },
  ],
  history: {
    title: "Our History",
    desc: "Established in 1989, Govt. Nirbhay Singh Patel Science College, Indore, originally known as Government New Science College, was renamed to honor Late Shri Nirbhay Singh Patel, a freedom fighter and former Forest Minister of Madhya Pradesh.<br>The college offers undergraduate programs in Biology, Mathematics, Biotechnology, Computer Science, and Computer Applications, as well as a postgraduate degree in Computer Science. Located in the heart of Indore, it caters to both urban and rural students, with many benefiting from scholarships provided by the Department of Higher Education, Madhya Pradesh, and the Central Government.<br>The campus is equipped with Wi-Fi, modern laboratories, smart classrooms featuring interactive touch panels, and an English language lab. Additional facilities include indoor and outdoor gyms, a state-of-the-art basketball court meeting international standards, and sports arenas, including a cricket practice pitch.<br>The institution boasts a highly qualified faculty, sports officer, librarian, and dedicated administrative staff. Committed to the National Education Policy 2020, the college provides flexible and interdisciplinary learning options, including vocational subjects, internships, field projects, and community engagement opportunities, fostering holistic student development.",
  },
};

// Generate HTML content
let aboutHTML = `
  <div class="container my-5">
    <!-- Mission & Vision Section -->
    <div class="row mb-4">
      ${aboutData.missionVision
        .map(
          (item) => `
        <div class="col-md-6">
          <h2 class="about-cont-heading">${item.title}</h2>
          <p>${item.desc}</p>
        </div>
      `
        )
        .join("")}
    </div>

    <!-- History Section -->
    <div class="row mb-4">
      <div class="col">
        <h2 class="about-cont-heading">${aboutData.history.title}</h2>
        <p>${aboutData.history.desc}</p>
      </div>
    </div>
  </div>
`;

// Inject the HTML into the aboutContainer
aboutContainer.innerHTML = aboutHTML;
