export default function VideoSection() {
  return (
    <section className="relative w-full bg-[url('/images/awareness/uncrackable-conversation.webp')] bg-cover bg-right sm:bg-center">
      <div className="relative w-full">
        <div className="h-16 absolute inset-0 bg-gradient-to-t from-black/0 via-black/40 to-black/90 z-10" />

        <video autoPlay loop muted playsInline className="w-full h-[500px] object-cover">
          <source src="/videos/awareness/Uncrackable_conversation_loop.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
