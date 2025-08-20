function scrollToExperiment(id) {
  const allSections = document.querySelectorAll('.experiment-details-section');
  allSections.forEach(section => section.classList.add('hidden'));

  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('hidden');

    const navbar = document.getElementById("mainNav");
    const navHeight = navbar ? navbar.offsetHeight : 80;
    const yOffset = -navHeight;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}

window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 10) {
    nav.classList.add("nav-colored");
  } else {
    nav.classList.remove("nav-colored");
  }
});

window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("preloader");
    loader.classList.add("hidden");
  }, 3000);
});

// signin/signup modal toggle
const loginNav = document.getElementById("text");
const authModal = document.getElementById("authModal");
const closeBtn = document.getElementById("closeBtn");

if (loginNav && authModal) {
  loginNav.addEventListener("click", () => {
    authModal.classList.add("active");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    authModal.classList.remove("active");
  });
}

// toggle login/signup views
const showSignupBtn = document.getElementById("showSignup");
const showLoginBtn = document.getElementById("showLogin");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginImage = document.getElementById("loginImage");
const signupImage = document.getElementById("signupImage");

if (showSignupBtn && showLoginBtn && loginForm && signupForm && loginImage && signupImage) {
  showSignupBtn.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    loginImage.classList.add("hidden");
    signupImage.classList.remove("hidden");
  });

  showLoginBtn.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    signupImage.classList.add("hidden");
    loginImage.classList.remove("hidden");
  });
}

// password visibility toggle
document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', function () {
    const input = this.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text';
      this.classList.add("fa-eye-slash");
      this.classList.remove("fa-eye");
    } else {
      input.type = 'password';
      this.classList.add("fa-eye");
      this.classList.remove("fa-eye-slash");
    }
  });
});

// scroll to chapter section
document.querySelector('.btn').addEventListener('click', function () {
  const target = document.querySelector('#chapterSection');
  const offset = -80;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = target.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});

// ✅ Registration submit
const signupFormElement = document.getElementById("signupFormElement");

if (signupFormElement) {
  signupFormElement.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = signupFormElement.querySelector('input[name="name"]').value.trim();
    const email = signupFormElement.querySelector('input[name="email"]').value.trim();
    const password = signupFormElement.querySelector('input[name="password"]').value;
    const confirmPassword = signupFormElement.querySelector('input[name="confirmPassword"]').value;
    const institution = signupFormElement.querySelector('input[name="institution"]').value.trim();
    const role = signupFormElement.querySelector('input[name="role"]:checked').value;

    if (!name || !email || !password || !confirmPassword || !institution) {
      alert("সব ফিল্ড পূরণ করুন");
      return;
    }

    if (password !== confirmPassword) {
      alert("পাসওয়ার্ড মিলছে না");
      return;
    }

    const data = { name, email, password, confirmPassword, institution, role };

    try {
      const response = await fetch("http://localhost/onusiloni/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        showLoginBtn.click();
        signupFormElement.reset();
      } else {
        alert(result.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
      }
    } catch (error) {
      alert("রেজিস্ট্রেশন করার সময় সমস্যা হয়েছে");
      console.error(error);
    }
  });
}


// ✅ Login submit (আমার নতুন অংশ — এটা নিচে যোগ করবে)
const loginFormElement = document.getElementById("loginFormElement");

if (loginFormElement) {
  loginFormElement.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("ইমেইল এবং পাসওয়ার্ড দিন");
      return;
    }

    try {
      const response = await fetch("http://localhost/onusiloni/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        // ✅ লগইন হলে redirect করবে
        window.location.href = "http://localhost/onusiloni/chapter1.html"; 
      } else {
        alert(result.message || "লগইন ব্যর্থ হয়েছে");
      }
    } catch (error) {
      alert("লগইন করার সময় সমস্যা হয়েছে");
      console.error(error);
    }
  });
}


// dynamic count

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost/onusiloni/counts.php")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("institutionCount").innerText = data.institution;
      document.getElementById("teacherCount").innerText = data.teacher;
      document.getElementById("studentCount").innerText = data.student;
      document.getElementById("memberCount").innerText = data.member;
    })
    .catch((err) => {
      console.error("Error fetching stats:", err);
    });
});