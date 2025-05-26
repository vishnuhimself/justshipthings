import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight, Star, ExternalLink } from 'lucide-react';
import { products } from '@/app/products';
import { Header } from '@/app/components/header';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the UGCVidGenUsage component
const UGCVidGenUsage = dynamic(() => import('@/app/products/ugc-vid-gen-usage').then(mod => mod.UGCVidGenUsage), {
  ssr: true,
  loading: () => <div className="p-4 text-center">Loading usage guide...</div>
});

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  
  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.iconUrl,
          width: 1200,
          height: 630,
          alt: `${product.name} - Product Details`,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const isComingSoon = product.status === 'beta' && !product.link;

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="pt-20 pb-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center">
              {/* Product Status Badge */}
              <div className="mb-8">
                <span className={`inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium
                  ${product.status === 'live' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'}`}
                >
                  {product.status === 'live' 
                    ? product.storeButton?.icon === 'github' 
                      ? 'Available on GitHub' 
                      : 'Live on App Store'
                    : 'Coming Soon'}
                </span>
              </div>

              {/* Product Icon & Title */}
              <div className="mb-8">
                <div className="mx-auto mb-6 relative h-24 w-24 overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
                  <Image
                    src={product.iconUrl}
                    alt={`${product.name} icon`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tags & CTA */}
              <div className="space-y-6">
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md px-2.5 py-1 text-sm font-medium bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                  >
                    {product.storeButton.icon === 'app-store' && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/>
                      </svg>
                    )}
                    {product.storeButton.icon === 'github' && (
                      <Image
                        src="/images/github-white.svg"
                        alt="GitHub"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    )}
                    {product.storeButton.text}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections - Only show if not coming soon */}
        {!isComingSoon && (
          <div className="max-w-4xl mx-auto px-8 py-16">
            {/* Overview */}
            {product.details.overview && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Overview
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed text-lg">{product.details.overview}</p>
                </div>
              </section>
            )}

            {/* Screenshots */}
            {product.details.screenshots && product.details.screenshots.length > 0 && product.id !== "ugcvidgen" && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Screenshots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.details.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="relative aspect-[9/16] overflow-hidden rounded-xl bg-gray-100 border border-gray-200 shadow-sm group"
                    >
                      <Image
                        src={screenshot}
                        alt={`${product.name} screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Features */}
            {product.details.features && product.details.features.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.details.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-none h-5 w-5 rounded-full bg-gray-900 flex items-center justify-center text-white mt-0.5">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Add UGCVidGenUsage component for the UGCVidGen product */}
            {product.id === "ugcvidgen" && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  How to Use
                </h2>
                <UGCVidGenUsage />
              </section>
            )}

            {/* Testimonials */}
            {product.details.testimonials && product.details.testimonials.length > 0 && product.id !== "ugcvidgen" && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  What Users Say
                </h2>
                <div className="grid gap-6">
                  {product.details.testimonials.map((testimonial, index) => (
                    <blockquote
                      key={index}
                      className="rounded-xl bg-gray-50 p-6 border border-gray-200 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <footer className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {testimonial.author}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {testimonial.role}
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            {/* Pricing */}
            {product.details.pricing && product.details.pricing.length > 0 && product.id !== "ugcvidgen" && (
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Pricing Plans
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {product.details.pricing.map((plan, index) => (
                    <div
                      key={index}
                      className={`rounded-xl p-6 border transition-all duration-200 hover:shadow-sm ${
                        plan.plan.includes('Yearly') || plan.plan.includes('Lifetime')
                          ? 'bg-gray-50 border-gray-300'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {plan.plan}
                      </h3>
                      {plan.price && (
                        <div className="mb-4">
                          <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                          {plan.plan.includes('Monthly') && <span className="text-gray-500"> /month</span>}
                          {plan.plan.includes('Yearly') && <span className="text-gray-500"> /year</span>}
                        </div>
                      )}
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                            <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {product.link && (
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center w-full gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors
                            ${plan.plan.includes('Yearly') || plan.plan.includes('Lifetime')
                              ? 'bg-gray-900 text-white hover:bg-gray-800'
                              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            }`}
                        >
                          Get Started
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* Coming Soon Section */}
        {isComingSoon && (
          <div className="max-w-4xl mx-auto px-8 py-16">
            <div className="text-center">
              <div className="rounded-xl bg-gray-50 p-8 sm:p-12 border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Coming Soon! 😉
                </h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re working hard to bring {product.name} to you.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 