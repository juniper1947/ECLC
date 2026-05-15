import React from "react";
import {
  Heart,
  BookOpen,
  Users,
  Star,
  Home,
  Gift,
  CalendarDays,
  Monitor,
  CheckCircle2,
  Search,
  Footprints,
  Shield,
} from "lucide-react";

const burgundy = "#651625";
const deepBurgundy = "#3f0d18";
const cream = "#fff7e8";
const gold = "#d8a441";

function Panda({ variant = "girl" }) {
  const isGirl = variant === "girl";

  return (
    <div className="relative mx-auto h-56 w-44">
      <div className="absolute left-8 top-2 h-32 w-32 rounded-full border-4 border-neutral-900 bg-white shadow-lg">
        <div className="absolute -left-5 top-5 h-12 w-12 rounded-full bg-neutral-950" />
        <div className="absolute -right-5 top-5 h-12 w-12 rounded-full bg-neutral-950" />
        <div className="absolute left-5 top-10 h-10 w-8 rotate-12 rounded-full bg-neutral-950" />
        <div className="absolute right-5 top-10 h-10 w-8 -rotate-12 rounded-full bg-neutral-950" />
        <div className="absolute left-8 top-14 h-4 w-4 rounded-full bg-white" />
        <div className="absolute right-8 top-14 h-4 w-4 rounded-full bg-white" />
        <div className="absolute left-14 top-20 h-4 w-5 rounded-full bg-neutral-950" />
        <div className="absolute left-12 top-[98px] h-8 w-9 rounded-full border-b-4 border-neutral-950" />
        {isGirl && (
          <div className="absolute left-14 -top-5 h-9 w-12 rotate-12 rounded-full border-2 border-white bg-[#9d1f35]" />
        )}
      </div>

      <div
        className={`absolute left-7 top-[120px] h-24 w-[136px] rounded-2xl border-4 border-neutral-900 ${
          isGirl ? "bg-white" : "bg-[#7b1a2c]"
        }`}
      >
        <div
          className="absolute left-10 top-6 text-center text-lg font-black"
          style={{ color: isGirl ? burgundy : cream }}
        >
          ECLC
        </div>
        {!isGirl && <div className="absolute left-2 top-0 h-20 w-5 bg-[#253047]" />}
        {isGirl && (
          <div className="absolute -bottom-10 left-3 h-14 w-28 rounded-b-2xl border-4 border-neutral-900 bg-[#7b1a2c]" />
        )}
      </div>

      <div className="absolute left-1 top-36 h-14 w-10 rotate-12 rounded-full border-4 border-neutral-900 bg-white" />
      <div className="absolute right-1 top-36 h-14 w-10 -rotate-12 rounded-full border-4 border-neutral-900 bg-white" />
    </div>
  );
}

function HorseMascot() {
  return (
    <div className="relative mx-auto h-80 w-full max-w-sm">
      <div className="absolute left-[104px] top-5 h-20 w-24 rotate-12 rounded-full border-4 border-neutral-900 bg-[#df7a2d]" />
      <div className="absolute left-32 top-0 h-16 w-8 rotate-12 rounded-t-full border-4 border-neutral-900 bg-[#df7a2d]" />
      <div className="absolute left-44 top-0 h-16 w-8 rotate-[24deg] rounded-t-full border-4 border-neutral-900 bg-[#df7a2d]" />
      <div className="absolute left-[140px] top-9 h-8 w-8 rounded-full border-2 border-neutral-900 bg-white" />
      <div className="absolute left-[172px] top-12 h-3 w-3 rounded-full bg-neutral-950" />
      <div className="absolute left-[68px] top-20 h-24 w-32 -rotate-12 rounded-[45%] border-4 border-neutral-900 bg-[#b95e27]" />
      <div className="absolute left-12 top-[136px] h-7 w-7 rounded-full bg-neutral-950" />
      <div className="absolute left-10 top-[172px] h-12 w-32 rounded-full border-b-4 border-neutral-900" />
      <div className="absolute left-56 top-[88px] h-28 w-10 rotate-12 rounded-full border-4 border-neutral-900 bg-[#4b3b35]" />
      <div className="absolute left-32 top-[200px] h-28 w-40 rounded-2xl border-4 border-neutral-900 bg-[#263d73] shadow-xl">
        <div className="absolute left-10 top-8 text-5xl font-black text-white">C</div>
        <div className="absolute left-24 top-10 h-8 w-7 rounded border-2 border-white bg-[#d8a441]" />
      </div>
      <div className="absolute left-[72px] top-60 h-14 w-[72px] rotate-12 rounded-full border-4 border-neutral-900 bg-[#263d73]" />
      <div className="absolute right-6 top-60 h-14 w-[72px] -rotate-12 rounded-full border-4 border-neutral-900 bg-[#263d73]" />
      <div className="absolute bottom-4 left-[152px] h-16 w-10 rounded-b-xl border-4 border-neutral-900 bg-white" />
      <div className="absolute bottom-4 left-[220px] h-16 w-10 rounded-b-xl border-4 border-neutral-900 bg-white" />
      <div className="absolute bottom-0 left-[120px] h-9 w-[88px] rounded-full border-4 border-neutral-900 bg-white">
        <span className="absolute left-9 top-3 h-2 w-8 rounded bg-[#c21d36]" />
      </div>
      <div className="absolute bottom-0 left-[200px] h-9 w-[88px] rounded-full border-4 border-neutral-900 bg-white">
        <span className="absolute left-9 top-3 h-2 w-8 rounded bg-[#c21d36]" />
      </div>
    </div>
  );
}

function IconCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-[#ead9bd] bg-white/80 p-5 text-center shadow-sm">
      <div
        className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full"
        style={{ backgroundColor: burgundy, color: cream }}
      >
        <Icon size={26} />
      </div>
      <h3 className="font-bold text-[#651625]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#5d4b3e]">{text}</p>
    </div>
  );
}

function FeatureRow({ children }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#651625]" />
      <span>{children}</span>
    </li>
  );
}

export default function ECLCLandingPage() {
  return (
    <main className="min-h-screen bg-[#f7edda] text-[#351a18]">
      <section
        className="relative overflow-hidden border-b-8 border-[#d8a441]"
        style={{ background: `linear-gradient(135deg, ${deepBurgundy}, ${burgundy} 55%, #8a2639)` }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div className="hidden lg:block">
            <div className="rounded-3xl border-4 border-[#d8a441] bg-[#f9f0dd] p-4 shadow-2xl">
              <div className="rounded-2xl bg-[#203226] p-7 text-white shadow-inner">
                <p className="text-3xl font-semibold leading-tight tracking-wide">
                  TEACH.
                  <br />
                  INSPIRE.
                  <br />
                  CARE.
                </p>
                <div className="mt-6 text-3xl">♡</div>
              </div>
              <Panda variant="girl" />
            </div>
          </div>

          <div className="text-center text-[#fff7e8]">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#f1d28f]">
              Elite Children Learning Center
            </p>
            <div className="mx-auto mb-5 flex h-40 w-40 items-center justify-center rounded-full border-4 border-[#d8a441] bg-[#fff7e8] shadow-2xl">
              <div>
                <div className="text-6xl font-black tracking-wide" style={{ color: burgundy }}>
                  ECLC
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.35em]" style={{ color: burgundy }}>
                  Love • Education • Unity
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Elite Children Learning Center
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#fbe8c3]">
              A warm early learning home where children are nurtured, encouraged, and prepared for confident growth.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#enroll"
                className="rounded-full bg-[#d8a441] px-8 py-4 font-bold text-[#3f0d18] shadow-lg transition hover:scale-105"
              >
                Enroll Today
              </a>
              <a
                href="#tour"
                className="rounded-full border-2 border-[#f5d99d] px-8 py-4 font-bold text-[#fff7e8] transition hover:bg-white/10"
              >
                Schedule a Tour
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl border-4 border-[#d8a441] bg-[#f9f0dd] p-4 shadow-2xl">
              <Panda variant="boy" />
              <div className="grid grid-cols-2 gap-3 text-center text-sm font-bold text-[#651625]">
                <div className="rounded-xl bg-white p-3">Knowledge</div>
                <div className="rounded-xl bg-white p-3">Character</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#651625] px-6 py-4 text-[#fff7e8]">
        <div className="mx-auto grid max-w-7xl gap-3 text-sm font-bold uppercase tracking-wide md:grid-cols-5">
          <div className="flex items-center justify-center gap-2">
            <Heart size={18} /> Nurturing Hearts
          </div>
          <div className="flex items-center justify-center gap-2">
            <BookOpen size={18} /> Building Minds
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users size={18} /> Stronger Together
          </div>
          <div className="flex items-center justify-center gap-2">
            <Star size={18} /> Shaping Futures
          </div>
          <div className="flex items-center justify-center rounded-full bg-[#d8a441] px-4 py-2 text-[#3f0d18]">
            Enroll. Grow. Shine.
          </div>
        </div>
      </section>

      <section id="tour" className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_1.2fr]">
        <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-xl">
          <div className="h-96 bg-[linear-gradient(135deg,#d6b583,#f6e6c3)] p-8">
            <div className="relative h-full overflow-hidden rounded-[2rem] border-4 border-[#8b4a2e] bg-[#f4e1bf] shadow-inner">
              <div className="absolute bottom-0 left-0 right-0 h-36 bg-[#6b3f27]" />
              <div className="absolute left-1/2 top-[72px] h-52 w-72 -translate-x-1/2 rounded-t-[5rem] border-4 border-[#8b4a2e] bg-[#fff7e8] shadow-xl" />
              <div className="absolute left-1/2 top-4 h-24 w-56 -translate-x-1/2 rounded-t-full border-4 border-[#6b3f27] bg-[#8f1e2f]" />
              <div className="absolute left-1/2 top-[124px] -translate-x-1/2 text-center text-4xl font-black text-[#651625]">
                ECLC
              </div>
              <div className="absolute left-1/2 top-[168px] -translate-x-1/2 text-center text-sm font-bold text-[#651625]">
                Elite Children
                <br />
                Learning Center
              </div>
              <div className="absolute bottom-0 left-1/2 h-32 w-[88px] -translate-x-1/2 rounded-t-full border-4 border-[#30140f] bg-[#4b261d]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[2rem] border border-[#ead9bd] bg-white/80 p-8 shadow-xl">
          <p className="font-serif text-2xl italic text-[#7b4f38]">Welcome to</p>
          <h2 className="mt-2 text-4xl font-black text-[#651625] sm:text-5xl">
            Elite Children Learning Center
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5d4b3e]">
            At ECLC, we believe every child is a gift with endless potential. Our mission is to provide a safe,
            loving, and stimulating environment where children learn, grow, and thrive academically, socially, and
            emotionally.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <IconCard icon={Heart} title="Nurturing Hearts" text="We care for every child like family." />
            <IconCard icon={BookOpen} title="Building Minds" text="We inspire curiosity and a love for learning." />
            <IconCard icon={Users} title="Stronger Together" text="We partner with families for lifelong success." />
            <IconCard icon={Star} title="Shaping Futures" text="We prepare children to be confident leaders." />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-[#651625] p-8 text-[#fff7e8] shadow-xl">
          <h2 className="text-5xl font-black leading-tight">
            Meet Blaze
            <br />
            <span className="text-[#d8a441]">the Horse</span>
          </h2>
          <p className="mt-4 text-lg font-semibold">The One’s Classroom Mascot</p>
          <p className="mt-4 leading-relaxed text-[#f7dec1]">
            Blaze is full of energy, curiosity, and a love for adventure, just like our incredible One’s learners.
          </p>
          <div className="mt-6 inline-flex rounded-full bg-[#d8a441] px-5 py-3 text-sm font-black uppercase tracking-wide text-[#3f0d18]">
            One’s Classroom, 1 to 2 years old
          </div>
          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-[#d8a441] p-4 text-center">
              <Shield className="mx-auto mb-2" />
              Trust
            </div>
            <div className="rounded-2xl border border-[#d8a441] p-4 text-center">
              <Footprints className="mx-auto mb-2" />
              Movement
            </div>
            <div className="rounded-2xl border border-[#d8a441] p-4 text-center">
              <Search className="mx-auto mb-2" />
              Discovery
            </div>
          </div>
        </div>

        <div className="grid items-center rounded-[2rem] border border-[#ead9bd] bg-white p-8 shadow-xl md:grid-cols-2">
          <HorseMascot />
          <div className="rounded-[2rem] bg-[#f7edda] p-6">
            <div className="rounded-2xl border-4 border-[#d8a441] bg-white p-6 text-center shadow-inner">
              <p className="text-4xl font-black text-[#651625]">
                RED
                <br />
                HOUSE
              </p>
              <Heart className="mx-auto mt-3 text-[#651625]" />
            </div>
            <p className="mt-5 text-center leading-relaxed text-[#5d4b3e]">
              In the Red House, children build trust, independence, and early learning confidence through care, play,
              and discovery.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[#ead9bd] bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-black text-[#651625]">Purpose Pasture Hall</h2>
          <p className="mt-2 text-lg font-bold text-[#7b4f38]">Elite Freshman Class</p>
          <p className="mt-5 leading-relaxed text-[#5d4b3e]">
            Our One’s classroom is where little explorers begin their learning journey. The room supports early
            development, social confidence, and independent growth.
          </p>
          <div className="mt-6 rounded-2xl border border-[#ead9bd] bg-[#fff7e8] p-5">
            <p className="font-bold text-[#651625]">Freshman Student Traits</p>
            <ul className="mt-4 space-y-3 text-[#5d4b3e]">
              <FeatureRow>Trust</FeatureRow>
              <FeatureRow>Movement</FeatureRow>
              <FeatureRow>Discovery</FeatureRow>
            </ul>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-[#5d4b3e]">
            <div className="flex gap-3">
              <Home className="text-[#651625]" /> Age Group: 1 to 2 years old
            </div>
            <div className="flex gap-3">
              <Users className="text-[#651625]" /> Class Size: Maximum 10 students
            </div>
            <div className="flex gap-3">
              <CalendarDays className="text-[#651625]" /> Schedule: Monday to Friday, 8:30 AM to 2:30 PM
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ead9bd] bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-black text-[#651625]">Our Classrooms</h2>
          <div className="mt-6 grid gap-4">
            <div className="h-60 rounded-[2rem] bg-[linear-gradient(135deg,#ead9bd,#fff7e8)] p-5 shadow-inner">
              <div className="grid h-full grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 p-4 shadow">
                    <div className="h-24 rounded-xl bg-[#c99b5a]/40" />
                    <div className="mx-auto mt-6 h-16 w-24 rounded-full bg-[#8b4a2e]/60" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-24 rounded-2xl bg-[#f1dfbf] shadow-inner" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-[#ead9bd] bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-black text-[#651625]">What We Do</h2>
          <ul className="mt-6 grid gap-4 text-[#5d4b3e] sm:grid-cols-2">
            <FeatureRow>Hands-on learning activities</FeatureRow>
            <FeatureRow>Story time and circle time</FeatureRow>
            <FeatureRow>Creative arts and crafts</FeatureRow>
            <FeatureRow>Sensory play and exploration</FeatureRow>
            <FeatureRow>Building social skills and confidence</FeatureRow>
            <FeatureRow>Encouraging independence</FeatureRow>
          </ul>
        </div>

        <div className="rounded-[2rem] bg-[#651625] p-8 text-center text-[#fff7e8] shadow-xl">
          <Gift className="mx-auto h-12 w-12 text-[#d8a441]" />
          <p className="mt-3 text-lg font-bold">New Enrollees Can Get</p>
          <h2 className="mt-2 text-4xl font-black text-[#f7d891]">1 Free Elite Uniform</h2>
          <p className="mx-auto mt-4 max-w-md text-[#f7dec1]">Use the teacher’s referral code at registration.</p>
          <div className="mx-auto mt-6 max-w-xs rounded-2xl border-2 border-[#d8a441] bg-[#3f0d18] px-8 py-4 text-3xl font-black tracking-widest">
            RED10
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a href="https://elitechildrenlearningcenter.com" className="rounded-2xl bg-[#d8a441] px-6 py-4 font-bold text-[#3f0d18]">
              <Monitor className="mx-auto mb-2" />
              Register Online
            </a>
            <a href="#tour" className="rounded-2xl border-2 border-[#d8a441] px-6 py-4 font-bold text-[#fff7e8]">
              <CalendarDays className="mx-auto mb-2" />
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#3f0d18] px-6 py-8 text-center text-[#fff7e8]">
        <p className="text-2xl font-black">ECLC</p>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#d8a441]">Elite Children Learning Center</p>
        <p className="mt-4 text-sm text-[#f1d7ba]">Love • Education • Unity</p>
      </footer>
    </main>
  );
}
