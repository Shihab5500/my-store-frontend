import Link from "next/link";
import HeroSection from "./components/HeroSection"; 
import FadeIn from "./components/FadeIn"; // আমাদের নতুন অ্যানিমেশন কম্পোনেন্ট
import { FiTruck, FiShield, FiHeadphones, FiStar, FiArrowRight } from "react-icons/fi";

async function getFeaturedItems() {
  try {
    const res = await fetch('http://127.0.0.1:5000/api/items', { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.slice(0, 3);
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const featuredItems = await getFeaturedItems();

  return (
    <div className="overflow-hidden bg-gray-50">
      
      {/* SECTION 1: Animated Hero Section */}
      <HeroSection />

      {/* SECTION 2: Features/Service Info */}
      <section className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0.2} className="h-full">
            <ServiceCard icon={<FiTruck />} title="Super Fast Delivery" desc="Get your products delivered within 24h inside Dhaka." />
          </FadeIn>
          <FadeIn delay={0.4} className="h-full">
            <ServiceCard icon={<FiShield />} title="Secure Payment" desc="100% secure transaction with buyer protection." />
          </FadeIn>
          <FadeIn delay={0.6} className="h-full">
            <ServiceCard icon={<FiHeadphones />} title="24/7 Support" desc="Dedicated support team ready to help you anytime." />
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3: Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">New Arrivals</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Featured Products</h2>
            </div>
            <Link href="/items" className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition">
              View All <FiArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.length > 0 ? (
            featuredItems.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.2}>
                <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-gray-100 group h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-xl h-64 bg-gray-100 mb-5">
                    <img 
                      src={item.image || 'https://placehold.co/600x400'} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      New
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-blue-600 font-extrabold text-xl">{item.price}</p>
                    <Link href={`/items/${item.id}`}>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium text-sm">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))
          ) : (
             <p className="col-span-3 text-center py-10 text-gray-500">Connecting to server...</p>
          )}
        </div>
      </section>

      {/* SECTION 4: About Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <FadeIn className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="About Team" 
                className="rounded-3xl shadow-2xl w-full rotate-2 hover:rotate-0 transition duration-500"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="md:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 mt-2 leading-tight">We Provide The Best <br/> <span className="text-blue-600">Tech Experience</span></h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Founded in 2024, MyStore has quickly become the go-to destination for tech enthusiasts. We believe in quality, transparency, and speed.
              </p>
              <div className="flex gap-10 border-t border-gray-100 pt-8">
                <div>
                  <h4 className="text-4xl font-extrabold text-blue-600">5k+</h4>
                  <p className="text-gray-500 font-medium">Happy Users</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-blue-600">100%</h4>
                  <p className="text-gray-500 font-medium">Satisfaction</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5: Statistics */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-16 text-center">Trusted by Everyone</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50k+" label="Orders Completed" delay={0.1} />
            <StatCard number="98%" label="Positive Reviews" delay={0.2} />
            <StatCard number="120+" label="Premium Brands" delay={0.3} />
            <StatCard number="24/7" label="Global Support" delay={0.4} />
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials */}
      <section className="container mx-auto px-4 py-24">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <ReviewCard name="Shahariyar Sani" role="Full Stack Dev" review="The API integration was seamless and the product quality is just amazing. Highly recommended!" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <ReviewCard name="Sarah Khan" role="UI/UX Designer" review="I love the clean design of their website and the delivery was super fast. Great experience!" />
          </FadeIn>
          <FadeIn delay={0.3}>
            <ReviewCard name="Rafiqul Islam" role="Gamer" review="Bought a mechanical keyboard and mouse. The packaging was secure and products are genuine." />
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7: Newsletter */}
      <section className="container mx-auto px-4 pb-24">
        <FadeIn>
          <div className="bg-blue-600 rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/30">
            {/* Background Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with MyStore</h2>
              <p className="mb-10 text-blue-100 text-lg">Join 10,000+ subscribers and get exclusive coupons every week.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/20">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                />
                <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition shadow-lg whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}

// --- Components ---

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition duration-300 h-full">
      <div className="bg-blue-50 text-blue-600 p-5 rounded-2xl text-3xl mb-6 shadow-sm">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function StatCard({ number, label, delay }) {
  return (
    <FadeIn delay={delay} className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition cursor-default text-center">
      <h3 className="text-4xl md:text-5xl font-bold mb-2 text-blue-300">{number}</h3>
      <p className="text-gray-300 font-medium tracking-wide">{label}</p>
    </FadeIn>
  );
}

function ReviewCard({ name, role, review }) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 relative">
      <div className="absolute top-8 right-8 text-6xl text-blue-100 font-serif leading-none opacity-50">"</div>
      <div className="flex text-yellow-400 mb-6 gap-1 text-lg">
        <FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" />
      </div>
      <p className="text-gray-600 italic mb-8 leading-relaxed text-lg relative z-10">{review}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
          {name[0]}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </div>
  );
}