import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

interface PortfolioDocument {
  title: string;
  description: string;
  file: string;
}

const documents: PortfolioDocument[] = [
  {
    title: 'Presentation 01',
    description: 'Architectural portfolio',
    file: '/portfolio/presentation-01.pdf',
  },
  {
    title: 'Presentation 02',
    description: 'Projects and developments',
    file: '/portfolio/presentation-02.pdf',
  },
];

interface PDFPageProps {
  pdf: PDFDocumentProxy;
  pageNumber: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  aspectRatio: number;
}

const PDFPage: React.FC<PDFPageProps> = ({
  pdf,
  pageNumber,
  containerRef,
  aspectRatio,
}) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const element = pageRef.current;
    const root = containerRef.current;

    if (!element || !root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        root,
        rootMargin: '900px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [containerRef]);

  useEffect(() => {
    const element = pageRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !width || !canvasRef.current) return;

    let cancelled = false;
    let renderTask: ReturnType<
      Awaited<ReturnType<PDFDocumentProxy['getPage']>>['render']
    > | null = null;

    const renderPage = async () => {
      try {
        const page = await pdf.getPage(pageNumber);

        if (cancelled || !canvasRef.current) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const scale = width / baseViewport.width;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if (!context) return;

        const pixelRatio = Math.min(
          window.devicePixelRatio || 1,
          2
        );

        canvas.width = Math.floor(viewport.width * pixelRatio);
        canvas.height = Math.floor(viewport.height * pixelRatio);

        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        renderTask = page.render({
          canvas,
          canvasContext: context,
          viewport,
          transform:
            pixelRatio !== 1
              ? [pixelRatio, 0, 0, pixelRatio, 0, 0]
              : undefined,
        });

        await renderTask.promise;

        if (!cancelled) setRendered(true);
      } catch (error) {
        if (
          error instanceof Error &&
          error.name !== 'RenderingCancelledException'
        ) {
          console.error(`PDF page ${pageNumber} failed:`, error);
        }
      }
    };

    setRendered(false);
    renderPage();

    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [pdf, pageNumber, visible, width]);

  return (
    <div
      ref={pageRef}
      className="relative mx-auto mb-6 w-full overflow-hidden bg-white shadow-[0_0_35px_rgba(255,255,255,0.09)]"
      style={{ aspectRatio }}
    >
      {!rendered && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-800" />
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="block h-auto w-full"
      />
    </div>
  );
};

interface PDFViewerProps {
  document: PortfolioDocument;
  language: 'ru' | 'en';
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  document,
  language,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(0.707);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    const loadingTask = pdfjsLib.getDocument({
      url: document.file,
    });

    loadingTask.promise
      .then(async (loadedPdf) => {
        if (!active) {
          return;
        }

        const firstPage = await loadedPdf.getPage(1);
        const viewport = firstPage.getViewport({ scale: 1 });

        setAspectRatio(viewport.width / viewport.height);
        setPageCount(loadedPdf.numPages);
        setPdf(loadedPdf);
      })
      .catch((err) => {
        if (active) {
          console.error('PDF loading failed:', err);
          setError(true);
        }
      });

    return () => {
      active = false;
      loadingTask.destroy();
    };
  }, [document.file]);

  return (
    <div className="min-w-0">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <h3 className="text-lg font-medium tracking-wide text-white">
            {document.title}
          </h3>

          <p className="mt-1 text-xs tracking-wider text-white/40">
            {document.description}
          </p>
        </div>

        <a
          href={document.file}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 border-b border-white/30 pb-1 text-xs tracking-wider text-white/70 transition-colors hover:border-white hover:text-white"
        >
          {language === 'ru' ? 'ОТКРЫТЬ PDF ↗' : 'OPEN PDF ↗'}
        </a>
      </div>

      <div
        ref={containerRef}
        className="h-[480px] overflow-y-auto overscroll-contain bg-[#111111] p-3 sm:h-[560px] sm:p-5"
        style={{ scrollbarColor: '#555 #111' }}
      >
        {error ? (
          <p className="py-10 text-center text-sm text-white/50">
            {language === 'ru'
              ? 'Не удалось загрузить документ.'
              : 'Unable to load this document.'}
          </p>
        ) : !pdf ? (
          <div className="flex h-full items-center justify-center">
            <div className="h-7 w-7 animate-spin rounded-full border-2 border-white/20 border-t-white" />
          </div>
        ) : (
          Array.from({ length: pageCount }, (_, index) => (
            <PDFPage
              key={`${document.file}-${index + 1}`}
              pdf={pdf}
              pageNumber={index + 1}
              containerRef={containerRef}
              aspectRatio={aspectRatio}
            />
          ))
        )}
      </div>

      {pdf && (
        <p className="mt-3 text-right text-[10px] tracking-widest text-white/30">
          {pageCount} {language === 'ru' ? 'СТРАНИЦ' : 'PAGES'}
        </p>
      )}
    </div>
  );
};

interface PortfolioProps {
  language: 'ru' | 'en';
}

const Portfolio: React.FC<PortfolioProps> = ({ language }) => {
  return (
    <section className="bg-[#080808] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-[10px] tracking-[0.35em] text-white/40">
            {language === 'ru' ? 'НАШЕ ПОРТФОЛИО' : 'OUR PORTFOLIO'}
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
            {language === 'ru' ? (
              <>
                Взгляните на{' '}
                <span className="font-serif italic">
                  наши проекты.
                </span>
              </>
            ) : (
              <>
                A closer look at{' '}
                <span className="font-serif italic">
                  our projects.
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
            {language === 'ru'
              ? 'Ознакомьтесь с нашими архитектурными проектами, решениями и достижениями в строительстве.'
              : 'Explore our architectural projects, designs and construction achievements.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
          {documents.map((document) => (
            <PDFViewer
              key={document.file}
              document={document}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;