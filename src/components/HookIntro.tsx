"use client";

export default function HookIntro() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-14 space-y-10">
      <h2 className="text-center text-3xl font-bold text-[#1e90ff]">Giới thiệu HT228</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* YouTube video */}
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
          <iframe
            src="https://www.youtube.com/embed/5rBZQSKLYFY?si=F1fl8Fz2Mq0TB3ec"
            title="Video giới thiệu HT228"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-none"
          ></iframe>
        </div>

        {/* Google map */}
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5162301292585!2d105.85101209999999!3d20.9719341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3570ec904b%3A0x8f41b54c32cd6f3c!2zVOG7lW5nIGtobyBOZ3V5w6puIGxp4buHdSDEkcOzbmcgZ8OzaSBIVCAyMjg!5e0!3m2!1svi!2s!4v1748250948292!5m2!1svi!2s"
            title="Bản đồ HT228"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

