export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-20 pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About LETAIWORK4U</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We're on a mission to make AI technology accessible and beneficial for businesses of all sizes.
        </p>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, LETAIWORK4U emerged from a simple observation: while artificial intelligence was
            revolutionizing industries, many businesses struggled to implement and benefit from these technologies.
          </p>
          <p>
            Our founders, a team of AI specialists and business consultants, set out to bridge this gap by creating
            accessible, practical AI solutions that deliver real business value without requiring extensive technical
            expertise.
          </p>

          <h2>Our Mission</h2>
          <p>
            At LETAIWORK4U, we believe that AI should work for you, not the other way around. Our mission is to
            democratize access to advanced AI technologies, enabling businesses of all sizes to harness the power of
            artificial intelligence to improve operations, enhance customer experiences, and drive growth.
          </p>

          <h2>Our Approach</h2>
          <p>
            We take a business-first approach to AI implementation. Rather than starting with technology, we begin by
            understanding your business challenges, objectives, and workflows. This allows us to design AI solutions
            that integrate seamlessly with your existing systems and deliver measurable results.
          </p>
          <p>
            Our team combines deep technical expertise with industry knowledge to create solutions that are not just
            technologically advanced but also practical and user-friendly.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> We continuously explore new technologies and approaches to solve complex
              business problems.
            </li>
            <li>
              <strong>Accessibility:</strong> We make advanced AI technologies understandable and usable for everyone.
            </li>
            <li>
              <strong>Integrity:</strong> We are transparent about what AI can and cannot do, and we always prioritize
              ethical considerations.
            </li>
            <li>
              <strong>Partnership:</strong> We view our clients as partners and are committed to their long-term
              success.
            </li>
            <li>
              <strong>Excellence:</strong> We hold ourselves to the highest standards in everything we do.
            </li>
          </ul>
        </div>

        <div className="bg-muted p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>Natural Language Processing</li>
                <li>Machine Learning</li>
                <li>Computer Vision</li>
                <li>Predictive Analytics</li>
                <li>Robotic Process Automation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Industries</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>Healthcare</li>
                <li>Finance</li>
                <li>Retail</li>
                <li>Manufacturing</li>
                <li>Professional Services</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your business with AI?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us today to discuss how our AI solutions can address your specific business challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
