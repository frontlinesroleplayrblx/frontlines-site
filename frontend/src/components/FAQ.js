export default function FAQ() {
    const questions = [
    "What is Frontlines?",
    "How does selling work?",
    "Is it free to use?",
    "Where can I get support?",
    ];


    return (
        <section className="mx-auto mt-28 max-w-5xl px-6">
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-3">
                {questions.map(q => (
                <div key={q} className="rounded-lg border border-white/10 bg-zinc-900 p-4">{q}</div>
                ))}
            </div>
        </section>
    );
}