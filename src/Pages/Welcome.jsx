import React, { useState } from "react";
import Footer from "../componets/Footer/Footer";
import WelcomePageImage1 from "../images/WelcomePageImage1.png";
import WelcomePageImage2 from "../images/WelcomePageImage2.png";
import WelcomePageImage3 from "../images/WelcomePageImage3.png";
import WelcomePageImage4 from "../images/WelcomePageImage4.png";
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import RowPost from "../componets/RowPost/RowPost";
import {
  trending,
  originals,
  comedy,
  horror,
  Adventure,
  SciFi,
  UpcomingMovies,
  romance,
  thriller,
} from "../Constants/URLs";

function Welcome() {
  const [activeMood, setActiveMood] = useState("Happy");
  const moodOptions = ["Happy", "Romantic", "Thriller", "Comedy", "Horror", "Sci-Fi"];
  const moodUrls = {
    Happy: comedy,
    Romantic: romance,
    Thriller: thriller,
    Comedy: comedy,
    Horror: horror,
    "Sci-Fi": SciFi,
  };

  const handleSurprise = () => {
    const randomMood = moodOptions[Math.floor(Math.random() * moodOptions.length)];
    setActiveMood(randomMood);
    window.scrollTo({ top: 1150, behavior: "smooth" });
  };

  return (
    <div className="bg-[#020202] text-white">
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.72) 25%, rgba(0,0,0,0.92) 100%), url(${WelcomePageBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0b0d0f]/70"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#7CFC00]/25 bg-[#7CFC00]/10 px-4 py-2 text-sm uppercase tracking-[0.22em] text-[#A3FF4D] font-semibold">
                HajiBI Premium
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl xl:text-7xl">
                  Your ultimate Movie & TV experience.
                </h1>
                <p className="max-w-2xl text-lg text-stone-300 sm:text-xl">
                  Discover, watch, collect, and enjoy a premium library of movies and shows tailored for your mood.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-xl bg-[#7CFC00] px-8 py-4 text-base font-semibold text-black transition hover:bg-[#a3ff4d]"
                >
                  Get Started
                </Link>
                <button
                  onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
                  className="inline-flex items-center justify-center rounded-xl border border-[#7CFC00]/60 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:border-[#7CFC00] hover:bg-white/10"
                >
                  Explore Now
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-[#2f9b12]/20 bg-white/5 p-5">
                  <h2 className="text-3xl font-bold text-white">12K+</h2>
                  <p className="mt-2 text-sm text-stone-400">Premium titles</p>
                </div>
                <div className="rounded-3xl border border-[#2f9b12]/20 bg-white/5 p-5">
                  <h2 className="text-3xl font-bold text-white">4.9</h2>
                  <p className="mt-2 text-sm text-stone-400">Average user rating</p>
                </div>
                <div className="rounded-3xl border border-[#2f9b12]/20 bg-white/5 p-5">
                  <h2 className="text-3xl font-bold text-white">Any device</h2>
                  <p className="mt-2 text-sm text-stone-400">Watch on mobile, tablet, laptop, TV</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Fade duration={1200}>
                <div className="overflow-hidden rounded-[2rem] border border-[#3f9e18]/20 bg-[#111] shadow-2xl shadow-[#000]/80">
                  <img src={WelcomePageImage1} alt="HajiBI hero" className="h-full w-full object-cover" />
                  <div className="space-y-3 p-6 bg-[#000000d6]">
                    <p className="uppercase tracking-[0.3em] text-xs text-[#7CFC00]">Featured collection</p>
                    <h2 className="text-3xl font-bold text-white">HajiBI Originals</h2>
                    <p className="text-sm text-stone-400">Curated hits and trending stories made for your next binge session.</p>
                  </div>
                </div>
              </Fade>

              <div className="grid gap-4 sm:grid-cols-3">
                {[WelcomePageImage2, WelcomePageImage3, WelcomePageImage4].map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-[1.75rem] border border-[#3f9e18]/20 bg-[#090a0b] shadow-lg shadow-[#000]/25">
                    <img src={image} alt={`HajiBI scene ${index + 1}`} className="h-36 w-full object-cover" />
                    <div className="p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#7CFC00]">New drop</p>
                      <h3 className="mt-3 text-lg font-semibold text-white">Premium scene</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#7CFC00]">Featured Collections</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Recommended for you</h2>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 1700, behavior: "smooth" })}
            className="rounded-full border border-[#7CFC00]/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#7CFC00]"
          >
            See All
          </button>
        </div>

        <div className="mt-10">
          <RowPost first hideTitle title="Recommended For You" url={trending} key="recommended" />
        </div>
      </section>

      <section className="bg-[#070a0c] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#7CFC00]">Mood board</p>
              <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Explore by mood</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {moodOptions.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setActiveMood(mood)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    activeMood === mood
                      ? "border-[#7CFC00] bg-white/10 text-white"
                      : "border-white/10 text-stone-300 hover:border-[#7CFC00] hover:text-white"
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-[#7CFC00]/10 bg-[#0a0d11] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#7CFC00]">Hidden Gems</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Discover underrated titles</h3>
              <p className="mt-3 text-sm leading-6 text-stone-400">
                Find amazing films and series that fly under the radar but feel premium.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#7CFC00]/10 bg-[#0a0d11] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#7CFC00]">Weekend Picks</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Perfect for your next binge</h3>
              <p className="mt-3 text-sm leading-6 text-stone-400">
                Weekly hand-picked movies for Friday, Saturday, and Sunday nights.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#7CFC00]/10 bg-[#0a0d11] p-8 flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#7CFC00]">Surprise me</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Need a random watch?</h3>
                <p className="mt-3 text-sm leading-6 text-stone-400">
                  Get a fresh suggestion instantly from our premium movie feed.
                </p>
              </div>
              <button
                onClick={handleSurprise}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#7CFC00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#a3ff4d]"
              >
                Surprise Me
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[#7CFC00]">Movie collections</p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">Every genre, every mood.</h2>
            <p className="max-w-xl text-base leading-7 text-stone-400">
              Browse collections built around action, romance, animation, sci-fi, and more. Every title is ready for your next watch session.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-[#7CFC00]/10 bg-[#090b0d] p-6">
              <h3 className="text-xl font-semibold text-white">Action</h3>
              <p className="mt-3 text-sm text-stone-400">High-energy blockbusters and thrill rides.</p>
            </div>
            <div className="rounded-[2rem] border border-[#7CFC00]/10 bg-[#090b0d] p-6">
              <h3 className="text-xl font-semibold text-white">Oscar Winners</h3>
              <p className="mt-3 text-sm text-stone-400">Critically acclaimed cinema for premium taste.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#7CFC00]">Mood picks</p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">{activeMood} movies</h2>
          </div>
          <span className="rounded-full border border-[#7CFC00]/50 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.25em] text-[#7CFC00]">
            Showing: {activeMood}
          </span>
        </div>

        <div className="mt-10">
          <RowPost
            title={`${activeMood} Movies`}
            url={moodUrls[activeMood]}
            key={`mood-${activeMood}`}
          />
        </div>
      </section>

      <section className="bg-[#070a0c] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold text-white sm:text-5xl">More to explore</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-stone-400">
                Discover new stories, trending collections, and streaming suggestions for every mood.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[#7CFC00]/10 bg-[#0a0d11] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#7CFC00]">Trending</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Top stories now</h3>
              </div>
              <div className="rounded-[2rem] border border-[#7CFC00]/10 bg-[#0a0d11] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#7CFC00]">New releases</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Fresh movies every week</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <RowPost title="HajiBI Originals" islarge url={originals} key="originals" />
      </section>

      <section className="bg-[#070a0c] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold text-white sm:text-5xl">Still not convinced?</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-stone-400">
                HajiBI gives you a premium feeling with every click — original visuals, curated collections, and a rich watch experience.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#7CFC00]/10 bg-[#0a0d11] p-8">
              <div className="flex items-center justify-between rounded-3xl bg-[#101315] p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#7CFC00]">Continue watching</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Pick up where you left off</h3>
                </div>
                <div className="rounded-full border border-[#7CFC00]/50 bg-[#14171b] px-4 py-2 text-sm font-semibold text-[#7CFC00]">
                  Live
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#0b0e12] p-4">
                  <p className="text-sm text-stone-400">Action</p>
                  <h4 className="mt-3 text-lg font-semibold text-white">Night Chase</h4>
                </div>
                <div className="rounded-3xl bg-[#0b0e12] p-4">
                  <p className="text-sm text-stone-400">Drama</p>
                  <h4 className="mt-3 text-lg font-semibold text-white">City Lights</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Welcome;
