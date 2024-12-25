import Link from "next/link";
export default function Resume() {
  return (
    <div className="px-40 py-20 min-h-screen">
      <h1 className="font-bold text-2xl pb-4">Resume</h1>
      <Link
        href="Mark_McGuire_Resume.pdf"
        className="flex gap-1 w-max border-2 border-black p-2"
        target="_blank"
        download
      >
        <h1 className="font-medium">Download Resume</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
      </Link>
      <div className="resume">
        <section className="section">
          <h2 className="font-bold text-2xl py-2">Education</h2>
          <div className="entry">
            <h3 className="font-bold">
              California Polytechnic State University
            </h3>
            <p className="entry-info">
              Bachelor of Science in Computer Science, Minor in Mathematics;
              GPA: 3.517 | Sep. 2023 – Jun. 2027
            </p>
          </div>
          <div className="entry">
            <h3 className="font-bold">Stanford Continuing Studies</h3>
            <p className="entry-info">
              Coursework focused on neural networks and their applicability in
              gen-AI and LLMs | Jan. 2024 – Mar. 2024
            </p>
          </div>
        </section>
        <section className="section">
          <h2 className="font-bold text-2xl py-2">Coursework</h2>
          <div className="entry">
            <ul className="px-5">
              <li>Data Structures</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Systems Programming</li>
              <li>Computer Organization</li>
              <li>Linear Algebra</li>
            </ul>
          </div>
        </section>
        <section className="section">
          <h2 className="font-bold text-2xl py-2">Experience</h2>
          <div className="entry">
            <h3 className="font-bold">Expedera</h3>
            <p className="entry-info">
              AI/ML Software Engineer | Jun. 2024 - Sep. 2024
            </p>
            <ul className="px-5">
              <li>
                <strong>Model Optimization</strong>: Wrote and perfected DFS and
                DP algorithms to optimize bottlenecks. Achieved an average
                decrease of 27% in peak memory usage through node-splitting and
                layer execution order optimizations.
              </li>
              <li>
                <strong>Estimation Tools</strong>: Created internal bash and
                python scripts that streamlined model estimation, saving ̃36 dev
                hours per quarter by increasing productivity and flexibility
                within workflow.
              </li>
              <li>
                <strong>CV Model Conversion</strong>: Worked on updating and
                converting legacy implementations of various multimodal computer
                vision models such as BEVFormer, MMDet3D, and MMCV.
              </li>
              <li>
                <strong>ML Frameworks</strong>: Gained industry experience
                working with common ML libraries like TensorFlow and PyTorch,
                and exchange mediums like ONNX.
              </li>
              <li>
                <strong>Collaboration</strong>: Actively participated in code
                reviews and team meetings, contributing to the continuous
                improvement of internal tools and processes.
              </li>
            </ul>
          </div>
          <div className="entry">
            <h3 className="font-bold pt-5">Ramen Nagi</h3>
            <p className="entry-info">
              Shift-lead/Head Chef | Aug. 2021 - Jun. 2023
            </p>
            <ul className="px-5">
              <li>
                <strong>Shift-Lead</strong>: Started as a server, eventually
                took on managerial duties like QA and floor. Mentored and
                trained fellow servers. Led flow of service, instructing servers
                on orders, running, bussing, etc.
              </li>
              <li>
                <strong>Head-Chef</strong>: Curiosity about cooking/prep process
                led to technical training. Worked up to head chef/kitchen
                leader. As leader, ran kitchen and helped conceive and institute
                practices increasing productivity and efficiency.
              </li>
              <li>
                <strong>Administration & Oversight</strong>: Led closing and
                opening of restaurant, collecting data at the end of shifts.
              </li>
            </ul>
          </div>
        </section>
        <section className="section">
          <h2 className="font-bold text-2xl py-2">Projects</h2>
          <div className="entry">
            <h3 className="font-bold">Sentennial</h3>
            <ul className="px-5">
              <li>
                <strong>Next.js web app</strong>: Developed and deployed a fully
                built NextJS blog/personal site using Next’s underlying React
                functionalities, TypeScript, and Node.
              </li>
              <li>
                <strong>Frontend</strong>: Gained experience with state
                management, dynamic routing, and responsive design. Used modern
                TS techniques and leveraged React for dynamic, component-based
                UI
              </li>
              <li>
                <strong>API & Rendering</strong>: Built API routes to fetch and
                style Markdown content, added category filtering, and optimized
                performance with SSG/SSR for better SEO.
              </li>
            </ul>
          </div>
          <div className="entry">
            <h3 className="font-bold pt-2">Bill Scanner - Hackathon</h3>
            <ul className="px-5">
              <li>
                <strong>Django web app</strong>: Developed and deployed a Django
                project that utilized Python’s open-cv and Google’s Tesseract to
                analyze invoices and paper bills, creating calendar
                notifications and digital summaries.
              </li>
              <li>
                <strong>ML & CV</strong>: Applied preprocessing techniques like
                resizing, thresholding, and denoising to enhance image quality
                for text extraction, integrating with advanced CV libraries and
                OCR engines for effective file parsing.
              </li>
              <li>
                <strong>Authentication & APIs</strong>: Utilized various Google
                APIs including Google OAuth to allow users to securely sign in
                and create calendar events. Created Django middleware to handle
                permissions and access.
              </li>
            </ul>
          </div>
          <div className="entry">
            <h3 className="font-bold pt-2">Movie Recommendation System</h3>
            <ul className="px-5">
              <li>
                <strong>Machine Learning</strong>: Prototyped with Jupyter
                Notebooks, and mastered ML tools like Pandas, NumPy, and
                scikit-learn, applying them to public movie dataset modeling.
              </li>
              <li>
                <strong>AWS</strong>: Integrated cloud functionality through the
                utilization of AWS. Learned about boto3 and s3 buckets.
              </li>
              <li>
                <strong>Project Structure</strong>: Took prototyped code and
                instituted development best practices to create a working
                project. Separated code into multiple files and modules, making
                project accessible and readable.
              </li>
            </ul>
          </div>
        </section>
        <section className="section">
          <h2 className="font-bold text-2xl py-2">Programming Skills</h2>
          <div className="entry">
            <h3 className="font-bold">Languages</h3>
            <ul className="px-5 py-2">
              <li>Python</li>
              <li>C/C++</li>
              <li>Typescript</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="entry">
            <h3 className="font-bold">Technologies</h3>
            <ul className="px-5 py-2">
              <li>PyTorch</li>
              <li>Tensorflow</li>
              <li>Django</li>
              <li>Next</li>
              <li>React</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
