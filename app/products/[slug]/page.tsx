import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight, Star } from 'lucide-react';
import { products } from '@/app/products';
import { Header } from '@/app/components/header';
import { AnimatedBackground } from '@/app/components/animated-background';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id === params.slug);
  
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
  const product = products.find((p) => p.id === params.slug);

  if (!product) {
    notFound();
  }

  const isComingSoon = product.status === 'beta' && !product.link;

  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="min-h-screen bg-white/80 dark:bg-gray-950">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-24 pb-4 sm:pt-32">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative z-10">
              {/* Product Status Badge */}
              <div className="mb-8 flex justify-center">
                <span className={`inline-flex items-center rounded-full px-4 py-1 text-sm font-medium
                  ${product.status === 'live' 
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                    : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400'}`}
                >
                  {product.status === 'live' ? 'Live on App Store' : 'Coming Soon'}
                </span>
              </div>

              {/* Product Icon & Title */}
              <div className="text-center">
                <div className="mx-auto mb-6 relative h-32 w-32 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-900/10 dark:ring-white/10">
                  <Image
                    src={product.iconUrl}
                    alt={`${product.name} icon`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-display">
                  {product.name}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {product.description}
                </p>
              </div>

              {/* Tags & CTA */}
              <div className="mt-8 flex flex-col items-center gap-6">
                {/* <div className="flex flex-wrap justify-center gap-3">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium 
                               bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
                               ring-1 ring-inset ring-gray-300/20 dark:ring-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-full
                             bg-black dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 
                             dark:hover:bg-gray-100 transition-colors duration-200"
                  >
                    {product.storeButton.icon === 'app-store' && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/>
                      </svg>
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="mx-auto max-w-3xl">
              {/* Overview */}
              {product.details.overview && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6">
                    Overview
                  </h2>
                  <div className="prose prose-gray dark:prose-invert">
                    <p>{product.details.overview}</p>
                  </div>
                </section>
              )}

              {/* Technologies */}
              {/* {product.details.technologies.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6">
                    Built With
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.details.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium
                                 bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              )} */}

              {/* Screenshots */}
              {product.details.screenshots.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6">
                    Screenshots
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.details.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-gray-100 
                                 dark:bg-gray-800 ring-1 ring-gray-900/10 dark:ring-white/10"
                      >
                        <Image
                          src={screenshot}
                          alt={`${product.name} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Features */}
              {product.details.features.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6">
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {product.details.features.map((feature, index) => (
                      <li key={index} className="flex gap-3">
                        <ChevronRight className="h-6 w-6 flex-none text-teal-500" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Testimonials */}
              {product.details.testimonials && product.details.testimonials.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6">
                    What Users Say
                  </h2>
                  <div className="grid gap-6">
                    {product.details.testimonials.map((testimonial, index) => (
                      <blockquote
                        key={index}
                        className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-6 ring-1 ring-gray-900/5 dark:ring-white/10"
                      >
                        <div className="flex gap-0.5 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                        <footer>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.author}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-sm">
                            {testimonial.role}
                          </div>
                        </footer>
                      </blockquote>
                    ))}
                  </div>
                </section>
              )}

              {/* Pricing */}
              {product.details.pricing && product.details.pricing.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6">
                    Pricing Plans
                  </h2>
                  <div className="grid gap-6">
                    {product.details.pricing.map((plan, index) => (
                      <div
                        key={index}
                        className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-6 ring-1 ring-gray-900/5 dark:ring-white/10"
                      >
                        <div className="flex items-baseline justify-between gap-x-4">
                          <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                            {plan.plan}
                          </h3>
                          {plan.price && (
                            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                              {plan.price}
                            </p>
                          )}
                        </div>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex gap-x-3">
                              <ChevronRight className="h-5 w-5 flex-none text-teal-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
} 