// Navigation scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll progress indicator
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
});

// Animated counters
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start).toLocaleString();
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    }
  }, 16);
}

// Intersection Observer for stats animation
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(document.getElementById("users"), 50000);
      animateCounter(document.getElementById("projects"), 1200);
      animateCounter(document.getElementById("countries"), 45);
      animateCounter(document.getElementById("experience"), 8);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

observer.observe(document.querySelector(".stats"));

// FAQ functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains("active");

    // Close all other FAQ items
    document.querySelectorAll(".faq-question").forEach((q) => {
      q.classList.remove("active");
      q.nextElementSibling.classList.remove("active");
    });

    // Toggle current item
    if (!isActive) {
      question.classList.add("active");
      answer.classList.add("active");
    }
  });
});

// Form submissions
document.querySelector(".contact-form form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong 24h.");
});

document.querySelector(".newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Đăng ký thành công! Cảm ơn bạn đã quan tâm đến InnovateTech.");
});

// Add parallax effect to floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = scrolled * 0.5;

  document.querySelectorAll(".floating-circle").forEach((circle, index) => {
    circle.style.transform = `translateY(${parallax * (index + 1) * 0.1}px)`;
  });
});

// Add hover effects to cards
document
  .querySelectorAll(".service-card, .testimonial-card, .team-card")
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

// Pricing card clicks
document.querySelectorAll(".plan-button").forEach((button) => {
  button.addEventListener("click", () => {
    alert(
      "Chúng tôi sẽ liên hệ với bạn để tư vấn chi tiết về gói dịch vụ này!"
    );
  });
});

// Loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Add scroll animations for sections
const animateOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(
    ".service-card, .testimonial-card, .team-card, .pricing-card"
  )
  .forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    animateOnScroll.observe(card);
  });
