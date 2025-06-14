/ src/components/HookIntro.tsx
"use client";

export default function HookIntro() {
  return (
    <section className="py-12 bg-white rounded-xl shadow-xl mx-4 md:mx-0">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Giới thiệu tổng kho HT228</h2>
        <p className="text-gray-700">
          Kho hàng hiện đại, đa dạng vật tư đóng gói: xốp nổ, băng keo, carton, túi bong bóng...
        </p>
        <div className="w-full h-0 pb-[56.25%] relative">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/5rBZQSKLYFY?si=F1fl8Fz2Mq0TB3ec"
            title="Video giới thiệu HT228"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="w-full h-0 pb-[75%] relative">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5162301292585!2d105.85101209999999!3d20.9719341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3570ec904b%3A0x8f41b54c32cd6f3c!2zVOG7lW5nIGtobyBOZ3V5w6puIGxp4buHdSDEkcOzbmcgZ8OzaSBIVCAyMjg!5e0!3m2!1svi!2s!4v1748250948292!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
