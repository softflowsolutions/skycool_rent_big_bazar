import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { PricingCard } from '@/components/product/PricingCard';
import { ConfigurationForm } from '@/components/product/ConfigurationForm';
import { Specifications } from '@/components/product/Specifications';
import { WhatsIncluded } from '@/components/product/WhatsIncluded';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { ProductJsonLd } from '@/components/seo/JsonLd';
import { PRODUCTS, getProductBySlug, getRelatedProducts } from '@/lib/data';
import { titleCase } from '@/lib/utils';
import { productSeo } from '@/lib/seo';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

interface PageProps {
  params: { category: string; subcategory: string; product: string };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    category: p.category,
    subcategory: p.subCategory,
    product: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.product);
  if (!product) return { title: 'Product Not Found' };

  const base = productSeo({
    name: product.name,
    brand: product.brand,
    category: product.category,
    capacity: product.capacity,
  });
  return {
    ...base,
    alternates: {
      canonical: `${SITE_CONFIG.url}/rent/${params.category}/${params.subcategory}/${params.product}`,
    },
    openGraph: {
      ...(base.openGraph ?? {}),
      images: [{ url: product.images[0], width: 800, height: 600 }],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.product);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id);

  const subName = titleCase(product.subCategory);

  return (
    <>
      <ProductJsonLd product={product} />
      <section className="bg-gray-50">
        <div className="container-app py-6 lg:py-8">
          <Breadcrumb
            items={[
              { label: 'Rent', href: '/rent' },
              { label: titleCase(product.category), href: `/rent/${product.category}` },
              { label: subName, href: `/rent/${product.category}/${product.subCategory}` },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      <section className="container-app py-6 lg:py-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left - Gallery */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <ProductGallery images={product.images} name={product.name} />
            </div>
          </div>

          {/* Right - Info + Pricing */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6">
            <ProductInfo product={product} />
            <PricingCard product={product} />
          </div>
        </div>
      </section>

      <section className="container-app py-4 lg:py-8">
        <ConfigurationForm product={product} />
      </section>

      <section className="container-app py-8">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <Specifications specs={product.specifications} />
          </div>
          <WhatsIncluded />
        </div>
      </section>

      <section id="enquiry" className="container-app py-8 lg:py-12">
        {product.comingSoon ? (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 text-center max-w-xl mx-auto shadow-sm">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 mb-3">
              Coming Soon
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Enquiries for this Product are Closed
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              {product.name} is currently marked Coming Soon and cannot generate enquiries. Please explore our available Air Conditioner and Air Cooler rentals.
            </p>
            <a
              href="/rent/air-conditioners"
              className="inline-block bg-brand hover:bg-brand/90 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow"
            >
              Explore Available AC Rentals
            </a>
          </div>
        ) : (
          <EnquiryForm
            defaultCategory="rent"
            defaultSubCategory={product.subCategory}
            defaultProduct={product.name}
            defaultParentCategory={product.category}
            hideCategory
          />
        )}
      </section>

      <RelatedProducts products={related} />
    </>
  );
}