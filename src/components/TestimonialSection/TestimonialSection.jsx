import { useEffect, useRef } from "react";
import "./TestimonialSection.css";

// Data testimoni
const testimonials = [
  {
    name: "Rizki Rahman",
    image:
      "https://img.freepik.com/free-photo/university-study-abroad-lifestyle-concept-smiling-cheerful-asian-guy-glasses-standing-with-backpack-laptop-student-his-way-classes-posing-white-background_1258-55845.jpg?t=st=1731779121~exp=1731782721~hmac=339304c52f4c1b155d8ea26cd9793c09b5636537eb98ee00915bc25869ef09c3&w=740",
    description:
      "Program Studi TI memberikan saya pengetahuan yang sangat berharga dalam dunia teknologi. Pengalaman belajar sangat menyenangkan dan bermanfaat!",
  },
  {
    name: "Dina Putri",
    image:
      "https://img.freepik.com/free-photo/beautiful-asian-girl-student-taking-notes-writing-down-studying-courses-learning-standing-bl_1258-168662.jpg?t=st=1731779162~exp=1731782762~hmac=f7a6ee58bc71fe0c5e3b397c65c65826a8aec42b00ad0cd1210390d07fe5db86&w=740",
    description:
      "Sebagai mahasiswa TI, saya merasa siap menghadapi tantangan di dunia kerja. Dosen yang berkompeten dan fasilitas yang memadai sangat mendukung perkembangan saya.",
  },
  {
    name: "Andi Hidayat",
    image: "https://i.pinimg.com/736x/76/ca/5d/76ca5d05422fec468ab6a9cb3947a682.jpg", 
    description:
      "Belajar di Prodi TI membuka banyak peluang untuk berinovasi. Dengan ilmu yang saya dapatkan, saya dapat mengembangkan banyak proyek teknologi.",
  },
  {
    name: "Siti Nurjanah",
    image: "https://img.freepik.com/free-photo/lifestyle-business-people-using-laptop-computer-pink_1150-15549.jpg?t=st=1731779219~exp=1731782819~hmac=06604461ff18f7d8c28288ef099df6ee4bf8af16ee473e44d7d36bbcacf3c695&w=360", 
    description:
      "Kuliah di Prodi TI memberikan pengalaman yang tidak hanya teori tetapi juga praktik. Hal ini membuat saya lebih siap dalam bekerja di bidang teknologi.",
  },
  {
    name: "Budi Santoso",
    image: "https://i.pinimg.com/736x/9f/8b/74/9f8b749c32edf47b1b3f098230a5584c.jpg", 
    description:
      "Prodi TI membantu saya mengembangkan keterampilan teknis yang sangat dibutuhkan di industri. Saya merasa bangga menjadi bagian dari Prodi TI.",
  },
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);

  // Auto scroll testimonials
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollInterval = setInterval(() => {
        scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
      }, 3000); // Scroll every 3 seconds

      return () => clearInterval(scrollInterval); // Clean up on unmount
    }
  }, []);

  return (
    <section className="testimonials">
      <h2>TESTIMONI</h2>
      <div className="testimonial-container" ref={scrollRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-description">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
