"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import {
  projects,
  skills,
  certifications,
  education,
  experience,
} from "@/data";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      <CustomCursor />

      {loadingComplete && (
        <>
          <Navbar />
          <main className="flex-1 overflow-x-hidden">
            <section
              id="home"
              className="min-h-screen flex items-center pt-20 relative"
            >
              <div className="container mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 space-y-6"
                >
                  <h1 className="text-5xl md:text-7xl font-serif font-bold uppercase leading-tight">
                    Hi, I&apos;m <br />
                    <span
                      className="text-transparent bg-clip-text bg-retro-red"
                      style={{ WebkitTextStroke: "2px #AB1509" }}
                    >
                      Iqbal Rizky
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl font-bold uppercase tracking-widest max-w-lg">
                    Cloud Computing Enthusiast & Computer Science Student at
                    Universitas Pendidikan Indonesia
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects"
                    className="inline-block px-8 py-4 bg-retro-red text-retro-bg font-bold uppercase tracking-widest retro-shadow hover:retro-shadow-hover transition-all"
                  >
                    View My Work
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-1 relative"
                >
                  <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto retro-border retro-shadow bg-retro-bg p-4 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="relative w-full h-full border-2 border-retro-red overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                      <Image
                        src="/assets/PP.jpg"
                        alt="Iqbal Rizky Maulana"
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            <section
              id="about"
              className="py-20 border-t-4 border-retro-red bg-[rgba(171,21,9,0.05)]"
            >
              <div className="container mx-auto px-4 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase mb-12 text-center">
                    About Me
                  </h2>
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3 relative p-4 retro-border retro-shadow bg-retro-bg -rotate-2">
                      <div className="relative aspect-square border-2 border-retro-red overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src="/assets/PP2.jpg"
                          alt="Profile Picture"
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-6 text-lg font-medium">
                      <p>
                        Saya adalah mahasiswa tingkat 2 Program Studi Ilmu
                        Komputer di Universitas Pendidikan Indonesia yang
                        memiliki ketertarikan mendalam pada bidang Cloud
                        Computing.
                      </p>
                      <p>
                        Berawal dari ketertarikan mendalam terhadap teknologi
                        komputasi awan dan manajemen server (Linux, Docker,
                        Kubernetes), eksplorasi saya kini telah berkembang
                        secara komprehensif mencakup Fullstack Web Development
                        dan Data Analytics. Selain aktif membangun arsitektur
                        microservices dan sistem aplikasi yang scalable, saya
                        juga terbiasa memimpin berbagai proyek strategis di
                        organisasi kemahasiswaan. Perpaduan antara pemahaman
                        infrastruktur yang solid, logika pemrograman yang kuat,
                        ketelitian analitik, serta kemampuan komunikasi dalam
                        tim memotivasi saya untuk terus menciptakan solusi
                        teknologi yang inovatif dan berdampak nyata bagi bisnis.
                      </p>
                      <div className="retro-border p-6 bg-retro-bg shadow-[4px_4px_0_0_#AB1509]">
                        <ul className="space-y-2 uppercase text-sm font-bold tracking-wide">
                          <li>
                            <span className="opacity-70">Jurusan:</span> Ilmu
                            Komputer
                          </li>
                          <li>
                            <span className="opacity-70">Universitas:</span>{" "}
                            Universitas Pendidikan Indonesia
                          </li>
                          <li>
                            <span className="opacity-70">Minat:</span> Cloud
                            Computing, Infrastruktur, DevOps, Cyber Security,
                            Web Development
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            <section
              id="projects"
              className="py-20 border-t-4 border-retro-red"
            >
              <div className="container mx-auto px-4 md:px-8">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-serif font-bold uppercase mb-12 text-center"
                >
                  Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <ProjectCard {...project} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="skills"
              className="py-20 border-t-4 border-retro-red bg-[rgba(171,21,9,0.05)]"
            >
              <div className="container mx-auto px-4 md:px-8">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-serif font-bold uppercase mb-12 text-center"
                >
                  Tech Stack
                </motion.h2>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill, idx) => (
                    <SkillBadge key={idx} {...skill} index={idx} />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="certifications"
              className="py-20 border-t-4 border-retro-red"
            >
              <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase mb-8">
                      Certifications
                    </h2>
                    <div className="space-y-4">
                      {certifications.map((cert, idx) => (
                        <div
                          key={idx}
                          className="p-4 retro-border bg-retro-bg shadow-[4px_4px_0_0_#AB1509] hover:translate-x-2 transition-transform"
                        >
                          <h4 className="font-bold text-lg uppercase">
                            {cert.title}
                          </h4>
                          <p className="text-sm opacity-80">
                            {cert.issuer} | {cert.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <div className="space-y-16">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2
                        id="experience"
                        className="text-3xl md:text-4xl font-serif font-bold uppercase mb-8"
                      >
                        Experience
                      </h2>
                      <div className="relative border-l-4 border-retro-red ml-4 space-y-8">
                        {experience.map((exp, idx) => (
                          <div key={idx} className="relative pl-8">
                            <div className="absolute w-4 h-4 bg-retro-bg border-4 border-retro-red rounded-full -left-[10px] top-1"></div>
                            <div className="font-bold text-lg uppercase">
                              {exp.role}
                            </div>
                            <div className="text-sm opacity-80">
                              {exp.company}
                            </div>
                            <div className="text-xs font-bold px-2 py-1 bg-retro-red text-retro-bg inline-block mt-2">
                              {exp.period}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2
                        id="education"
                        className="text-3xl md:text-4xl font-serif font-bold uppercase mb-8"
                      >
                        Education
                      </h2>
                      <div className="relative border-l-4 border-retro-red ml-4 space-y-8">
                        {education.map((edu, idx) => (
                          <div key={idx} className="relative pl-8">
                            <div className="absolute w-4 h-4 bg-retro-bg border-4 border-retro-red rounded-full -left-[10px] top-1"></div>
                            <div className="font-bold text-lg uppercase">
                              {edu.institution}
                            </div>
                            <div className="text-sm opacity-80">
                              {edu.major}
                            </div>
                            <div className="text-xs font-bold px-2 py-1 bg-retro-red text-retro-bg inline-block mt-2">
                              {edu.period}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="contact"
              className="py-20 border-t-4 border-retro-red bg-retro-red text-retro-bg relative overflow-hidden"
            >
              <div className="bg-noise mix-blend-overlay opacity-20"></div>
              <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-7xl font-serif font-bold uppercase mb-6">
                    Let&apos;s Connect!
                  </h2>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                    Saya terbuka untuk kesempatan kolaborasi, magang, atau
                    diskusi terkait Cloud Computing.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    <a
                      href="mailto:iqbalrizkymaulana@upi.edu"
                      className="px-6 py-3 border-4 border-retro-bg font-bold uppercase hover:bg-retro-bg hover:text-retro-red transition-colors flex items-center gap-2"
                    >
                      <span className="text-2xl">✉️</span> Email Me
                    </a>
                    <a
                      href="https://linkedin.com/in/Iqbaalz28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-4 border-retro-bg font-bold uppercase hover:bg-retro-bg hover:text-retro-red transition-colors flex items-center gap-2"
                    >
                      <span className="text-2xl">🔗</span> LinkedIn
                    </a>
                    <a
                      href="https://github.com/Iqbaalz28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-4 border-retro-bg font-bold uppercase hover:bg-retro-bg hover:text-retro-red transition-colors flex items-center gap-2"
                    >
                      <span className="text-2xl">🐙</span> GitHub
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>

            <footer className="py-6 border-t-4 border-retro-red text-center font-bold uppercase text-sm tracking-widest">
              <p>
                © {new Date().getFullYear()} Iqbal Rizky Maulana. All rights
                reserved.
              </p>
            </footer>
          </main>
        </>
      )}
    </>
  );
}
