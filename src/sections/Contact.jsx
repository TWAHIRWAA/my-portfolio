export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          Contact Me
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded bg-slate-900"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded bg-slate-900"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded bg-slate-900"
          />

          <button
            className="bg-cyan-500 px-8 py-3 rounded-xl"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}