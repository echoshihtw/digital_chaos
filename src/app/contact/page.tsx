import React from "react";
import Section from "@/components/Section";
import Header from "@/components/Header";

const Page = () => {
  return (
    <div>
      {/*<Header/>*/}
      <Section title="Contact">
        <p>
          Email:{" "}
          <a className="glitch mono" href="mailto:you@domain.com">
            you@domain.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a className="glitch mono" href="https://github.com/you">
            github.com/you
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a className="glitch mono" href="https://www.linkedin.com/in/you/">
            linkedin.com/in/you
          </a>
        </p>
        <h3 className="mono" style={{ marginTop: "20px" }}>
          Open for:
        </h3>
        <ul>
          <li>Permanent role collaborations (Frontend / Web3 Engineer)</li>
          <li>
            Freelance cases (React/Next.js, Web3 dApps, design-to-code builds)
          </li>
        </ul>
      </Section>
    </div>
  );
};

Page.propTypes = {};

export default Page;
