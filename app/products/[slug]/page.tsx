import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight, Star, ExternalLink } from 'lucide-react';
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
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  
  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Just Ship Things`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Just Ship Things`,
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
    <>
      <AnimatedBackground />
      <Header />
      <main className="min-h-screen bg-white/80 dark:bg-gray-950">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-24 pb-12 sm:pt-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-teal-100/30 to-transparent dark:from-teal-900/10 opacity-70 dark:opacity-30" />
          </div>
          
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
                <div className="mx-auto mb-6 relative h-32 w-32 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-900/10 dark:ring-white/10 shadow-lg">
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
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-3">
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
                  </div>
                )}
                
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-full
                             bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 
                             text-white shadow-md hover:shadow-lg hover:from-teal-500 hover:to-emerald-500 
                             dark:hover:from-teal-400 dark:hover:to-emerald-400 transition-all duration-200"
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-3xl">
              {/* Overview */}
              {product.details.overview && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6 inline-flex items-center">
                    <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 h-8 w-1 rounded-full mr-3"></span>
                    Overview
                  </h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{product.details.overview}</p>
                  </div>
                </section>
              )}

              {/* Technologies */}
              {/* {product.details.technologies && product.details.technologies.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6 inline-flex items-center">
                    <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 h-8 w-1 rounded-full mr-3"></span>
                    Built With
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.details.technologies.map((tech, index) => (
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
              {product.details.screenshots && product.details.screenshots.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6 inline-flex items-center">
                    <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 h-8 w-1 rounded-full mr-3"></span>
                    Screenshots
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.details.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-gray-100 
                                 dark:bg-gray-800 ring-1 ring-gray-900/10 dark:ring-white/10 shadow-md group"
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
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6 inline-flex items-center">
                    <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 h-8 w-1 rounded-full mr-3"></span>
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {product.details.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                      >
                        <div className="flex-none h-6 w-6 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white">
                          <ChevronRight className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Testimonials */}
              {product.details.testimonials && product.details.testimonials.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6 inline-flex items-center">
                    <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 h-8 w-1 rounded-full mr-3"></span>
                    What Users Say
                  </h2>
                  <div className="grid gap-6">
                    {product.details.testimonials.map((testimonial, index) => (
                      <blockquote
                        key={index}
                        className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 ring-1 ring-gray-900/5 dark:ring-white/10 shadow-sm hover:-translate-y-1 transition-transform duration-300"
                      >
                        <div className="flex gap-0.5 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                        <footer className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.author}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm">
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
              {product.details.pricing && product.details.pricing.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6 inline-flex items-center">
                    <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 h-8 w-1 rounded-full mr-3"></span>
                    Pricing Plans
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {product.details.pricing.map((plan, index) => (
                      <div
                        key={index}
                        className={`rounded-2xl p-6 ring-1 ${
                          plan.plan.includes('Yearly') || plan.plan.includes('Lifetime')
                            ? 'bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 ring-teal-200 dark:ring-teal-800'
                            : 'bg-white dark:bg-gray-900 ring-gray-200 dark:ring-gray-800'
                        } hover:-translate-y-1 transition-transform duration-300`}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {plan.plan}
                        </h3>
                        {plan.price && (
                          <div className="mb-4">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                            {plan.plan.includes('Monthly') && <span className="text-gray-500 dark:text-gray-400"> /month</span>}
                            {plan.plan.includes('Yearly') && <span className="text-gray-500 dark:text-gray-400"> /year</span>}
                          </div>
                        )}
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
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
                            className={`inline-flex items-center justify-center w-full gap-1 px-4 py-2 text-sm font-medium rounded-lg
                              ${plan.plan.includes('Yearly') || plan.plan.includes('Lifetime')
                                ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-500 hover:to-emerald-500'
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                              } transition-colors`}
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
          </div>
        )}

        {/* Coming Soon Section */}
        {isComingSoon && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <div
                className="rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-8 sm:p-12 ring-1 ring-teal-100 dark:ring-teal-800/30"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-4">
                  Coming Soon! 😉
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  We&apos;re working hard to bring {product.name} to you.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
} 