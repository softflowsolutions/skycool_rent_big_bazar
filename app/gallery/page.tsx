import Image from 'next/image';
import { Images } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/gallery';
import { SEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = SEO.gallery;

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Gallery' }]} />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 mb-4 shadow-sm">
              <Images className="h-3.5 w-3.5 text-gray-700" />
              <span className="text-xs font-semibold text-gray-700">Real Warehouse & Products</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Gallery
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Take a look inside our warehouse and at the rental-ready products we
              dispatch every day across India.
            </p>
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        {/* Category chips (visual filter labels — static page, all images shown) */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-1">
            Categories:
          </span>
          {GALLERY_CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {GALLERY_IMAGES.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-500">
              No gallery images yet. Drop files into{' '}
              <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                public/images/gallery/
              </code>{' '}
              and add entries to{' '}
              <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                lib/gallery.ts
              </code>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {GALLERY_IMAGES.map((img) => (
              <figure
                key={img.src}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur text-gray-700 px-2 py-1 rounded-full shadow-sm">
                    {img.category}
                  </span>
                </div>
                {(img.title || img.alt) && (
                  <figcaption className="p-3 sm:p-4">
                    <p className="font-display font-bold text-sm text-gray-900">
                      {img.title ?? img.alt}
                    </p>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
