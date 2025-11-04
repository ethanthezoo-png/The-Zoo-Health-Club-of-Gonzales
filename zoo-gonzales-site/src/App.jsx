export default function ZooGonzalesSite() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">Z</div>
            <div>
              <p className="text-lg font-semibold leading-tight">The Zoo Health Club — Gonzales</p>
              <p className="text-xs text-neutral-500">1210 N Airline Hwy, Suite 24, Gonzales, LA 70737</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#memberships" className="hover:text-emerald-700">Memberships</a>
            <a href="#amenities" className="hover:text-emerald-700">Amenities</a>
            <a href="#insurance" className="hover:text-emerald-700">Insurance</a>
            <a href="#schedule" className="hover:text-emerald-700">Schedule</a>
            <a href="#reviews" className="hover:text-emerald-700">Reviews</a>
            <a href="#staff" className="hover:text-emerald-700">Staff</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:+12256478442" className="hidden sm:inline-block px-3 py-2 text-sm rounded-lg border border-neutral-300 hover:border-neutral-400">Call Now</a>
            <a href="https://zoogym.com/gonzales-louisiana/#FreePass" className="px-4 py-2 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Get a Free Pass</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Gonzales’ neighborhood gym — 24/7 access, classes, tanning, sauna, and showers.</h1>
            <p className="mt-4 text-neutral-600">Clean equipment, AED-compliant staff, and simple pricing. Try a class on us or grab a free pass.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://zoogym.com/gonzales-louisiana/#FreePass" className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">Get a Free Pass</a>
              <a href="#memberships" className="px-5 py-3 rounded-xl border border-neutral-300 hover:border-neutral-400">See Memberships</a>
              <a href="https://zoogym.com/contact-us-members/" className="px-5 py-3 rounded-xl border border-neutral-300 hover:border-neutral-400">Contact Us</a>
            </div>
            <div className="mt-6 flex gap-3 text-xs text-emerald-800">
              <span className="px-2 py-1 rounded-full bg-emerald-100">AED compliant</span>
              <span className="px-2 py-1 rounded-full bg-emerald-100">Classes available</span>
              <span className="px-2 py-1 rounded-full bg-emerald-100">Free member tanning</span>
            </div>
          </div>
          <div className="rounded-2xl bg-white shadow-sm border p-6">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-neutral-50 border">
                <p className="font-semibold">Email</p>
                <a className="text-emerald-700 underline" href="mailto:gonzales-la@zoogym.com">gonzales-la@zoogym.com</a>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 border">
                <p className="font-semibold">Phone</p>
                <a className="text-emerald-700 underline" href="tel:+12256478442">(225) 647-8442</a>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 border col-span-2">
                <p className="font-semibold">Address</p>
                <p>1210 N Airline Hwy, Suite 24, Gonzales, LA 70737</p>
                <div className="mt-2 flex gap-2">
                  <a href="https://www.google.com/maps/dir//The+ZOO+Health+Club+of+Gonzales,+1210+N+Airline+Hwy+%2324,+Gonzales,+LA+70737/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x8626b5e176457d81:0xe379d68862192e19!3e0?sa=X&ved=1t:2040&ictx=111" className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700">Get Directions</a>
                  <a href="#map" className="px-3 py-2 rounded-lg border text-sm hover:border-neutral-400">View Map</a>
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-neutral-500">Open 24/7 for members • Staffed 6:00 AM – 10:00 PM • Phone 9:00 AM – 9:00 PM</div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section id="memberships" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Memberships & Pricing</h2>
        <p className="mt-2 text-neutral-600">Simple plans for every routine. Month-to-month or paid-in-full options.</p>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-sm border rounded-xl overflow-hidden">
            <thead className="bg-neutral-100">
              <tr>
                <th className="p-3 text-left">Membership Type</th>
                <th className="p-3 text-left">Month-to-Month</th>
                <th className="p-3 text-left">1-Year (Paid in Full)</th>
                <th className="p-3 text-left">2-Year (Paid in Full)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {type: 'Gym Only', m: '$29.99/mo', y: '$25.99/mo (≈ $311.88/yr)', y2: '$23.99/mo (≈ $575.76/2 yrs)'},
                {type: 'Classes Only', m: '$29.99/mo', y: '$23.99/mo (≈ $287.88/yr)', y2: '$22.99/mo (≈ $551.76/2 yrs)'},
                {type: 'Combo (Gym + Classes)', m: '$45.99/mo', y: '$43.99/mo (≈ $527.88/yr)', y2: '$41.99/mo (≈ $1,007.76/2 yrs)'},
                {type: 'Family Member Add-On', m: '$20.99/mo', y: '$19.99/mo (≈ $239.88/yr)', y2: '$18.99/mo (≈ $455.76/2 yrs)'},
                {type: 'First Responders (Gym Only – EMT/Doctors/Military/Police/Fire)', m: '$17.99/mo', y: '$16.99/mo (≈ $203.88/yr)', y2: '$15.99/mo (≈ $383.76/2 yrs)'},
                {type: 'Student (Gym Only)', m: '$25.99/mo', y: '$23.99/mo (≈ $287.88/yr)', y2: '$22.99/mo (≈ $551.76/2 yrs)'},
              ].map((row) => (
                <tr key={row.type} className="border-t">
                  <td className="p-3 font-medium">{row.type}</td>
                  <td className="p-3">{row.m}</td>
                  <td className="p-3">{row.y}</td>
                  <td className="p-3">{row.y2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="https://zoogym.com/gonzales-louisiana/#FreePass" className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Get a Free Pass</a>
          <a href="https://zoogym.com/contact-us-members/" className="px-4 py-2 rounded-lg border hover:border-neutral-400">Talk to Us</a>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Amenities & Equipment</h2>
          <p className="mt-2 text-neutral-600">Everything you need to train your way.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {title: 'Free Member Tanning', desc: 'On-site tanning at no extra cost. Goggles & lotion at the front desk.'},
              {title: 'Sauna', desc: 'Relax and recover after your workout.'},
              {title: 'Showers & Locker Room', desc: 'Clean, comfortable, and convenient.'},
              {title: 'Weights & Machines', desc: 'Free weights, benches, selectorized and plate-loaded equipment.'},
              {title: 'Cardio with Smart TVs', desc: 'Treadmills, ellipticals, bikes, and more.'},
              {title: 'Group Fitness Studio', desc: 'Zumba, Yoga, Silver Sneakers, Cycling, HIIT, and more.'},
              {title: 'Stretching Area', desc: 'Mats and open space for warm‑ups and cool‑downs.'},
              {title: 'Cleanliness Focus', desc: 'Daily sanitizing and re-rack standards.'},
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl border bg-neutral-50">
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-neutral-600 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section id="insurance" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Insurance Fitness Programs</h2>
        <p className="mt-2 text-neutral-600">We accept <span className="font-semibold">Tivity</span>, <span className="font-semibold">Healthy Contributions</span>, and <span className="font-semibold">Ashlink</span> (and anything that falls under them, like SilverSneakers / Active&Fit).</p>
        <ol className="mt-4 list-decimal ml-5 text-sm text-neutral-700 space-y-2">
          <li>Check your eligibility with your insurance provider.</li>
          <li>Bring your member ID or barcode to the front desk.</li>
          <li>We’ll get you set up so your benefit applies at check-in.</li>
        </ol>
      </section>

      {/* SCHEDULE (PDF/IMAGE INSERT) */}
      <section id="schedule" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Current Class Schedule</h2>
          <p className="mt-2 text-neutral-600">We’re finalizing our live schedule. For now, insert a PDF or image of the weekly schedule below and update anytime.</p>
          <div className="mt-6 rounded-2xl border-2 border-dashed p-8 text-center bg-neutral-50">
            <p className="font-medium">Schedule Placeholder</p>
            <p className="text-sm text-neutral-600">Embed a PDF or image here. In Next.js, replace this with a file component or a CMS image/PDF field.</p>
            <div className="mt-4 inline-flex gap-2">
              <a className="px-3 py-2 rounded-lg border text-sm" href="#">Upload PDF</a>
              <a className="px-3 py-2 rounded-lg border text-sm" href="#">Upload Image</a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS + MAP */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">What Members Say</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white p-4">
            <p className="text-sm text-neutral-500 mb-2">Google Reviews</p>
            <div className="aspect-video w-full bg-neutral-100 rounded-xl overflow-hidden">
              <iframe title="Google Reviews — Zoo Gonzales" width="100%" height="100%" loading="lazy" src="https://www.google.com/search?q=google+review+zoo+health+club+gonzales#lrd=0x8626b5e176457d81:0xe379d68862192e19,1,,,," />
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-4">
            <p className="text-sm text-neutral-500 mb-2">Facebook Reviews</p>
            <div className="aspect-video w-full bg-neutral-100 rounded-xl overflow-hidden">
              <iframe title="Facebook Reviews — Zoo Gonzales" width="100%" height="100%" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allow="encrypted-media" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fzoohealthclubgonzales%2F&tabs=reviews&width=500&height=280" />
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">What We’re Improving Next</h2>
        <ul className="mt-4 space-y-3 text-sm text-neutral-700">
            <li>• Lighting & mirror upgrades for brighter, safer training spaces.</li>
            <li>• Expanded equipment mix (accessories and select machines).</li>
            <li>• Class schedule expansion with new time slots and formats.</li>
            <li>• Member experience refinements based on Suggestion Box feedback.</li>
          </ul>
          <p className="mt-4 text-sm text-emerald-800">Status: AED updated and compliant with city and state requirements. • Updated November 1, 2025.</p>
        </div>
      </section>

      {/* STAFF */}
      <section id="staff" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Trainers & Staff</h2>
        <p className="mt-2 text-neutral-600">Team directory (personal phone numbers are not displayed on the website).</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'William Coppersmith', role: 'Club Manager' },
            { name: 'Micah Picou', role: 'General Manager' },
            { name: 'Khalid Saleh', role: 'Owner' },
            { name: 'Melinda Hodge', role: 'Front Desk' },
            { name: 'Melanie Lambert', role: 'Child Care' },
            { name: 'Chastity Daigle', role: 'Instructor' },
            { name: 'Nevonda Dobard', role: 'Instructor' },
            { name: 'Geraldine Simon', role: 'Instructor' },
            { name: 'Danielle Lanoux', role: 'Instructor' },
            { name: 'Monika Alaniz', role: 'Instructor' },
            { name: 'Aimee Hebert/Babin', role: 'Instructor' },
            { name: 'Amy Davis', role: 'Instructor' },
            { name: 'Jada Kerek', role: 'Instructor' },
            { name: 'Misty Fairchild', role: 'Instructor' },
            { name: 'Anna Hall/Nikki', role: 'Instructor' },
          ].map((p) => (
            <div key={p.name} className="p-5 rounded-2xl border bg-neutral-50">
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-neutral-600">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section id="contact" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Contact & Hours</h2>
          <div className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl border p-6 bg-neutral-50">
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Email:</span> <a className="text-emerald-700 underline" href="mailto:gonzales-la@zoogym.com">gonzales-la@zoogym.com</a></p>
                <p><span className="font-semibold">Phone:</span> <a className="text-emerald-700 underline" href="tel:+12256478442">(225) 647-8442</a></p>
                <p><span className="font-semibold">Address:</span> 1210 N Airline Hwy, Suite 24, Gonzales, LA 70737</p>
                <p><span className="font-semibold">Member Access:</span> 24/7 • <span className="font-semibold">Staffed Hours:</span> 6:00 AM – 10:00 PM • <span className="font-semibold">Phone Hours:</span> 9:00 AM – 9:00 PM</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="https://www.google.com/maps/dir//The+ZOO+Health+Club+of+Gonzales,+1210+N+Airline+Hwy+%2324,+Gonzales,+LA+70737/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x8626b5e176457d81:0xe379d68862192e19!3e0?sa=X&ved=1t:2040&ictx=111" className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700">Get Directions</a>
                <a href="https://zoogym.com/contact-us-members/" className="px-3 py-2 rounded-lg border text-sm hover:border-neutral-400">Contact Us</a>
                <a href="https://zoogym.com/gonzales-louisiana/#FreePass" className="px-3 py-2 rounded-lg border text-sm hover:border-neutral-400">Free Pass</a>
              </div>
            </div>
            <div id="map" className="rounded-2xl overflow-hidden border">
              <iframe
                title="Google Map — Zoo Gonzales"
                width="100%"
                height="350"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=1210+N+Airline+Hwy+Suite+24+Gonzales+LA+70737&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-neutral-300">
        <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="font-semibold">The Zoo Health Club — Gonzales</p>
            <p className="text-sm mt-2">1210 N Airline Hwy, Suite 24<br/>Gonzales, LA 70737</p>
            <p className="text-sm mt-2"><a className="underline" href="mailto:gonzales-la@zoogym.com">gonzales-la@zoogym.com</a> • <a className="underline" href="tel:+12256478442">(225) 647-8442</a></p>
          </div>
          <div>
            <p className="font-semibold">Explore</p>
            <ul className="text-sm mt-2 space-y-1">
              <li><a href="#memberships" className="hover:text-white">Memberships</a></li>
              <li><a href="#amenities" className="hover:text-white">Amenities</a></li>
              <li><a href="#insurance" className="hover:text-white">Insurance</a></li>
              <li><a href="#schedule" className="hover:text-white">Schedule</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Quick Links</p>
            <ul className="text-sm mt-2 space-y-1">
              <li><a href="https://zoogym.com/gonzales-louisiana/#FreePass" className="hover:text-white">Get a Free Pass</a></li>
              <li><a href="https://zoogym.com/contact-us-members/" className="hover:text-white">Member Contact</a></li>
              <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Readiness</p>
            <p className="text-sm mt-2">AED updated and compliant with city & state requirements. • Updated Nov 1, 2025.</p>
            <p className="text-xs text-neutral-400 mt-2">© {new Date().getFullYear()} Zoo Health Club — Gonzales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
