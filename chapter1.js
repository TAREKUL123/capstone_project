

const topicData = {
  "topic1": {
    title: "পদার্থের ধারণা",
    experiments: [
      { id: "Experiment1", name: "এক্সপেরিমেন্ট ০১", image: "http://localhost/onusiloni/vdo/download.jpg" },
      { id: "Experiment1.01", name: "এক্সপেরিমেন্ট ১.০১", image: "http://localhost/onusiloni/vdo/download.jpg" },
      { id: "Experiment1.02", name: "এক্সপেরিমেন্ট ১.০২", image: "http://localhost/onusiloni/vdo/download.jpg" },
      { id: "Experiment1.03", name: "এক্সপেরিমেন্ট ১.০৩", image: "http://localhost/onusiloni/vdo/download.jpg" } 
    ]
  },
  "topic2": {
    title: "পরমাণু ও অণু",
    experiments: [
      { id: "Experiment2", name: "এক্সপেরিমেন্ট ০২", image: "http://localhost/onusiloni/vdo/download.jpg" },
      { id: "Experiment2.01", name: "এক্সপেরিমেন্ট ০২.০১", image: "http://localhost/onusiloni/vdo/download.jpg" },
      { id: "Experiment2.02", name: "এক্সপেরিমেন্ট ০২.০২", image: "http://localhost/onusiloni/vdo/download.jpg" }
    ]
  },
  "topic3": {
    title: "পদার্থের অবস্থা",
    experiments: [
      { id: "Experiment3", name: "এক্সপেরিমেন্ট ০৩", image: "http://localhost/onusiloni/vdo/download.jpg" }
    ]
  },
  "topic4": {
    title: "পদার্থের অবস্থা",
    experiments: [
      { id: "Experiment4", name: "এক্সপেরিমেন্ট ০৪", image: "http://localhost/onusiloni/vdo/download.jpg" }
    ]
  },
  "topic5": {
    title: "পদার্থের অবস্থা",
    experiments: [
      { id: "Experiment5", name: "এক্সপেরিমেন্ট ০৫", image: "http://localhost/onusiloni/vdo/download.jpg" }
    ]
  },
  "topic6": {
    title: "পদার্থের অবস্থা",
    experiments: [
      { id: "Experiment6", name: "এক্সপেরিমেন্ট ০৬", image: "http://localhost/onusiloni/vdo/download.jpg" }
    ]
  },
  "topic7": {
    title: "পদার্থের অবস্থা",
    experiments: [
      { id: "Experiment7", name: "এক্সপেরিমেন্ট ০৭", image: "http://localhost/onusiloni/vdo/download.jpg" }
    ]
  },
  "topic8": {
    title: "পদার্থের অবস্থা",
    experiments: [
      { id: "Experiment8", name: "এক্সপেরিমেন্ট ০৮", image: "http://localhost/onusiloni/vdo/download.jpg" }
    ]
  },
  "topic9": {
    title: "পদার্থের অবস্থা",
    experiments: [
      { id: "Experiment9", name: "এক্সপেরিমেন্ট ০৯", image: "http://localhost/onusiloni/vdo/download.jpg" }
    ]
  },
  "topic10": {
    title: "পদার্থের অবস্থা",
    experiments: [
      { id: "Experiment10", name: "এক্সপেরিমেন্ট ১০", image: "http://localhost/onusiloni/vdo/download.jpg" }
    ]
  }
};


function showExperiments(topicKey) {
  const container = document.getElementById("experimentGridContainer");
  
  // Show heading when topic is clicked
  const heading = document.getElementById('experiment-heading');
  heading.style.display = 'block';
  
  // Restart animation every time
  heading.style.animation = 'none';
  void heading.offsetWidth; // trigger reflow
  heading.style.animation = 'fadeInUp 0.8s ease forwards';

  container.innerHTML = ""; // Clear previous

  const topic = topicData[topicKey];
  if (!topic) return;

  const grid = document.createElement("div");
  grid.className = "experiment-grid";

  topic.experiments.forEach(exp => {
    const card = document.createElement("div");
    card.className = "experiment-card";
    card.onclick = () => scrollToExperiment(exp.id);

    card.innerHTML = `
      <img src="${exp.image}" alt="${exp.name}">
      <h4>${exp.name}</h4>
    `;
    grid.appendChild(card);
  });

  container.appendChild(grid);

  // ✅ Scroll to the container with offset (Option 1)
  setTimeout(() => {
    const navbar = document.getElementById("mainNav");
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const offset = -navHeight;

    const y = container.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }, 100);
}


function scrollToExperiment(id) {
  // Hide all experiment detail sections
  const allSections = document.querySelectorAll('.experiment-details-section');
  allSections.forEach(section => section.classList.add('hidden'));

  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('hidden');

    const navbar = document.getElementById("mainNav");
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const offset = -navHeight;

    const y = target.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}


// Navbar color change on scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 10) {
    nav.classList.add("nav-colored");
  } else {
    nav.classList.remove("nav-colored");
  }
});


// Body loaded animation
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});



