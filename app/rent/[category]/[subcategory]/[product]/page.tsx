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

  return {
    title: `${product.name} | Rent at ₹${product.pricing.monthly}/month`,
    description: `Rent ${product.name} starting at ₹${product.pricing.monthly}/month. Free delivery & installation. ${product.brand} ${product.specifications['Star Rating'] || ''} ${product.capacity}.`,
    alternates: {
      canonical: `/rent/${params.category}/${params.subcategory}/${params.product}`,
    },
    openGraph: {
      title: `${product.name} | SkyCool Solutions`,
      description: `Rent at ₹${product.pricing.monthly}/month`,
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
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left - Gallery */}
          <div>
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Right - Info + Config */}
          <div className="space-y-5 lg:space-y-6">
            <ProductInfo product={product} />
            <PricingCard product={product} />
            <ConfigurationForm product={product} />
          </div>
        </div>
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
        <EnquiryForm
          defaultCategory="rent"
          defaultSubCategory={product.subCategory}
          defaultProduct={product.name}
          defaultParentCategory={product.category}
        />
      </section>

      <RelatedProducts products={related} />
    </>
  );
}