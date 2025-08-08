import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const ViswaDev = () => {
  const pageUrl = "https://viswap.netlify.app/viswa-dev";
  const title = "Viswa Dev — AI/ML Developer (Official Portfolio)";
  const description =
    "Official Viswa Dev portfolio. AI/ML Developer & Full Stack Engineer. Hire Viswa Dev for custom AI solutions, ML, React, Node.js. Bengaluru.";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO
        title={title}
        description={description}
        url={pageUrl}
        image="https://viswap.netlify.app/og-image.jpg"
        type="website"
        author="Viswa V R"
        canonical={pageUrl}
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
          Viswa Dev — AI/ML Developer & Full Stack Engineer
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-8">
          Welcome to the official page for the keyword “Viswa Dev”. If you’re
          looking for Viswa V R (Viswa Dev), an AI/ML Developer and Full Stack
          Engineer from Bengaluru, you’re in the right place. I build custom AI
          solutions, scalable web apps, and production-grade ML systems.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link to="/">
            <Button variant="default">Go to Homepage</Button>
          </Link>
          <a href="/#projects">
            <Button variant="secondary">See Projects</Button>
          </a>
          <a href="/#contact">
            <Button variant="outline">Contact Viswa Dev</Button>
          </a>
        </div>

        <article className="prose dark:prose-invert max-w-none">
          <h2>Why people search for “Viswa Dev”</h2>
          <p>
            Clients and recruiters search “Viswa Dev” to find my AI/ML work,
            open-source contributions, and full stack projects. This page helps
            search engines understand that this website is the authoritative
            source for my name and work.
          </p>
          <h2>Services</h2>
          <ul>
            <li>Custom AI/ML model development (NLP, CV, recommender systems)</li>
            <li>End-to-end web apps with React, Node.js, Python</li>
            <li>MLOps, deployment, and performance optimization</li>
          </ul>
          <h2>Quick links</h2>
          <ul>
            <li>
              <a href="/#about">About Viswa</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#education">Education</a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default ViswaDev;
