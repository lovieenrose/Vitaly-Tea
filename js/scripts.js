function setActiveLink() {
    const links = document.querySelectorAll("#navbar a");
    
    links.forEach(link => {
    link.addEventListener("click", function() {
    links.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
    });
    });
    }
    
    document.addEventListener("DOMContentLoaded", setActiveLink);
    
    const slides = document.querySelectorAll(".carousel img");
    const dots = document.querySelectorAll(".dot");
    let index = 0;
    
    function showSlide() {
    document.querySelector(".carousel").style.transform = `translateX(-${index * 100}vw)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
    }
    
    function goToSlide(n) {
    index = n;
    showSlide();
    }
    
    function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
    }
    
    function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
    }
    
    setInterval(nextSlide, 10000);
    
    dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
    });
    
    document.querySelector(".left-arrow").addEventListener("click", prevSlide);
    document.querySelector(".right-arrow").addEventListener("click", nextSlide);
    
    showSlide();
    
    const testimonials = [
    {
    img: 'client2.jpg',
    name: 'Roscoe Del Fierro',
    title: 'CEO, Tech Company',
    rating: '⭐⭐⭐⭐⭐',
    score: '5.0',
    message: 'The printing service was fast and high quality. I loved the cozy nook while waiting!'
    },
    {
    img: 'client3.jpg',
    name: 'Schuyler Rockwell',
    title: 'Model',
    rating: '⭐⭐⭐⭐⭐',
    score: '5.0',
    message: 'The printing service was fast and high quality. I loved the cozy nook while waiting!'
    },
    {
    img: 'client4.jpg',
    name: 'Matt Yu',
    title: 'Photographer',
    rating: '⭐⭐⭐⭐',
    score: '4.0',
    message: 'Their drinks are surprisingly good! I was genuinely impressed by the overall service'
    },
    {
    img: 'client5.jpg',
    name: 'Royce Solarez',
    title: 'Manager, Retail Store',
    rating: '⭐⭐⭐',
    score: '3.0',
    message: 'Good service, but the wait time was longer than expected. Drinks were nice though.'
    },
    {
    img: 'client6.jpg',
    name: 'Aestherille Zeraphine',
    title: 'Student',
    rating: '⭐⭐⭐⭐',
    score: '4.0',
    message: 'The cozy atmosphere and excellent printing service make Vitaly Tea my go-to spot!'
    },
    {
    img: 'client7.jpg',
    name: 'Ali Mercadejas',
    title: 'Doctor',
    rating: '⭐⭐⭐⭐',
    score: '4.0',
    message: 'Great quality prints and a fantastic place to relax with a cup of tea.'
    },
    {
    img: 'client8.jpg',
    name: 'Zariyah Isla Leviste',
    title: 'Business Owner',
    rating: '⭐⭐⭐⭐⭐',
    score: '4.0',
    message: 'Vitaly Tea’s printing service exceeded my expectations with its efficiency. Plus, their chai latte keeps me coming back!'
    },
    {
    img: 'client9.jpg',
    name: 'Radleigh Vesarius Riego',
    title: 'Nurse',
    rating: '⭐⭐⭐⭐',
    score: '4.0',
    message: 'The atmosphere is perfect for getting work done while enjoying a delicious cup of tea'
    },
    {
    img: 'client10.jpg',
    name: 'Eurydyce Amethyst Hidalgo',
    title: 'Marketing Executive',
    rating: '⭐⭐⭐',
    score: '3.0',
    message: 'Printing quality was decent, but the environment was a bit noisy for my taste.'
    }
    ];
    
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
    
    function updateTestimonial(index) {
    const testimonialImage = document.querySelector('.testimonial-image img');
    const clientName = document.querySelector('.client-name');
    const clientTitle = document.querySelector('.client-title');
    const ratingStars = document.querySelector('.stars');
    const ratingScore = document.querySelector('.score');
    const message = document.querySelector('.testimonial-message');
    
    testimonialImage.src = testimonials[index].img;
    testimonialImage.alt = testimonials[index].name;
    clientName.textContent = testimonials[index].name;
    clientTitle.textContent = testimonials[index].title;
    ratingStars.textContent = testimonials[index].rating;
    ratingScore.textContent = testimonials[index].score;
    message.textContent = testimonials[index].message;
    }
    
    rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
    });
    
    leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
    });
