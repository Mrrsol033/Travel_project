"use client";

import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-slate-800 px-6">
      <section className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="p-8 md:pl-12">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white/60 backdrop-blur p-3 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 6-7.5 11.5-7.5 11.5S4.5 16.5 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-sm uppercase tracking-wide text-slate-500">
                Best Travel
              </h1>
              <p className="text-xs text-slate-400">explore the world with confidence</p>
            </div>
          </div>

          <h2 className="mt-10 text-6xl md:text-7xl font-extrabold leading-none text-indigo-700">
            404
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-600">
            Sorry — we couldn’t find the page you’re looking for.
          </p>
          <p className="mt-3 text-slate-500">
            It might have been removed, had its name changed, or is temporarily
            unavailable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5H9v5a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z"
                />
              </svg>
              Back to home
            </Link>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 transition"
            >
              Explore destinations
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            If you think this is a mistake,{' '}
            <Link href="/contact" className="underline">
              contact us
            </Link>{' '}
            and we’ll help you find what you need.
          </p>
        </div>

        <div className="relative p-6 flex items-center justify-center">
          <div className="w-full max-w-md p-6 rounded-2xl bg-white/70 backdrop-blur shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800">
                  Where to next?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Try one of our popular picks — hand-picked travel spots to get
                  you inspired.
                </p>

                <ul className="mt-4 grid grid-cols-1 gap-3">
                  <li className="flex items-center justify-between rounded-lg p-3 bg-slate-50">
                    <div>
                      <div className="text-sm font-medium">Bali, Indonesia</div>
                      <div className="text-xs text-slate-500">
                        Beaches, temples & rice terraces
                      </div>
                    </div>
                    <Link href="/destinations/bali" className="text-xs font-medium underline">
                      View
                    </Link>
                  </li>

                  <li className="flex items-center justify-between rounded-lg p-3 bg-slate-50">
                    <div>
                      <div className="text-sm font-medium">Paris, France</div>
                      <div className="text-xs text-slate-500">
                        Museums, cafés & the Eiffel Tower
                      </div>
                    </div>
                    <Link href="/destinations/paris" className="text-xs font-medium underline">
                      View
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="absolute -left-8 -top-8 w-40 h-40 pointer-events-none opacity-90 animate-[fly_8s_linear_infinite]">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g transform="translate(0,0)">
                  <path
                    d="M2 30c0 0 32 0 60-12"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <g transform="translate(36,12)">
                    <path d="M0 0 L8 4 L0 8 L2 4 Z" fill="#4f46e5" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;