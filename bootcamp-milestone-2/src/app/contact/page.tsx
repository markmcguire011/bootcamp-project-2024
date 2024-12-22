export default function Contact() {
  return (
    <div className="px-40 py-20 min-h-screen">
      <h1 className="text-2xl font-bold">Contact</h1>
      <form id="contact-form" className="flex flex-col gap-2 pt-5">
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-black rounded w-max p-1"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-black rounded w-max p-1"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="border-2 border-black rounded w-max p-1"
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="border-black border-2 w-max p-1 rounded"
        />
      </form>
    </div>
  );
}
