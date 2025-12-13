import { useState } from "react";

export default function FAQ() {
  const items = [
    {
      q: "What is Frontlines?",
      a: "Frontlines is a developer marketplace where creators can buy and sell high-quality Roblox assets."
    },
    {
      q: "How does selling work?",
    a: "Create a seller account, upload your products, and start earning from every sale."
    },
    {
      q: "Is it free to use?",
      a: "Browsing is free. Frontlines takes a small commission only when a sale is made."
    },
    {
      q: "Where can I get support?",
      a: "You can reach support through our help center or community Discord."
    }
  ];


  return (
    <section className="mx-auto mt-28 max-w-5xl px-6">
      <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-3">
        {items.map((item, i) => (
          <FAQItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="font-medium">{q}</span>
        <span className="text-zinc-400">{open ? "–" : "+"}</span>
      </button>

      {open && (
        <div className="border-t border-white/10 px-4 py-3 text-sm text-zinc-400">
          {a}
        </div>
      )}
    </div>
  );
}